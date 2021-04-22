require("dotenv").config();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the user in db
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found." });
    }

    // Check if pass is correct
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid password." });
    }

    // Get token
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      secret,
      { expiresIn: "1h" }
    );

    // Return user & token
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

const signUp = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Check pass & confirmed pass
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords don't match." });
    }

    // Encrypt password
    const encryptedPassword = await bcrypt.hash(password, 12);

    // Create the user in db
    const result = await User.create({
      email,
      password: encryptedPassword,
      name: `${firstName} ${lastName}`,
    });

    // Get token
    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });

    // Return user & token
    res.status(200).json({ result: result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

module.exports = { signIn, signUp };
