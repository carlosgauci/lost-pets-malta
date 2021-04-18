const mongoose = require("mongoose");
const Post = require("../models/post");

// Get posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create new post
const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new Post(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// Update post
const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  // Check that post exists
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Post not found");
  }

  try {
    // Update the post
    const updatedPost = await Post.findByIdAndUpdate(_id, post, { new: true });
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

module.exports = { getPosts, createPost, updatePost };
