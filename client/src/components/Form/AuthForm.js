import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { auth, signIn, signUp, authError } from "../../actions/auth";
import { Input, Button } from "../";
import { FcGoogle } from "react-icons/fc";

export default function AuthForm({ isSignup }) {
  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const dispatch = useDispatch();
  const history = useHistory();
  const error = useSelector((state) => state.auth.authError);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authError(""));

    if (isSignup) {
      dispatch(signUp(formData, history));
    } else {
      dispatch(signIn(formData, history));
    }
  };

  // Google login success
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch(auth(result, token));
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  // Google login failure
  const googleFailure = () => {
    console.log("Sign in unsuccessful. Please try again.");
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto max-w-sm">
      {/* First & last name - only show on sign up*/}
      {isSignup && (
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="text"
            label="First Name:"
            name="firstName"
            placeholder="Your first name"
            value={formData.firstName}
            required={true}
            handleChange={handleChange}
          />

          <Input
            type="text"
            label="Last Name:"
            name="lastName"
            placeholder="Your last name"
            value={formData.lastName}
            required={true}
            handleChange={handleChange}
          />
        </div>
      )}

      {/* Email */}
      <Input
        type="text"
        label="Email:"
        name="email"
        placeholder="Your email address"
        value={formData.email}
        required={true}
        handleChange={handleChange}
      />

      {/* Password */}
      <Input
        type="password"
        label="Password:"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        required={true}
        handleChange={handleChange}
      />

      {/* Confirm password - only show on signup*/}
      {isSignup && (
        <Input
          type="password"
          label="Confirm password:"
          name="confirmPassword"
          placeholder="Retype your password"
          value={formData.confirmPassword}
          required={true}
          handleChange={handleChange}
        />
      )}

      {/* Error message */}
      {error && (
        <p className="text-red-500 text-center font-semibold">{error}</p>
      )}

      {/* Form submit button */}
      <Button text={isSignup ? "Register" : "Sign In"} />

      {/* Login with google */}
      <GoogleLogin
        clientId={googleClientId}
        render={(renderProps) => (
          <Button
            text={
              <span className="flex items-center justify-center">
                <FcGoogle className="mr-2 text-2xl" />
                Sign in with Google
              </span>
            }
            google={true}
            disabled={renderProps.disabled}
            handleClick={renderProps.onClick}
          />
        )}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy="single_host_origin"
      />
    </form>
  );
}
