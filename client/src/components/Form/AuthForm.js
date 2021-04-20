import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { auth } from "../../actions/auth";
import { Input, Button } from "../";
import { FcGoogle } from "react-icons/fc";

export default function AuthForm({ isSignup }) {
  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Form submit button
  const handleSubmit = (e) => {
    e.preventDefault();
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
      {/* Username - only show on sign up*/}
      {isSignup && (
        <Input
          type="text"
          label="Username:"
          name="username"
          placeholder="Enter a username"
          value={formData.username}
          required={true}
          handleChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
      )}

      {/* Email */}
      <Input
        type="text"
        label="Email:"
        name="email"
        placeholder="Enter your email address"
        value={formData.email}
        required={true}
        handleChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      {/* Password */}
      <Input
        type="password"
        label="Password:"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        required={true}
        handleChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
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
          handleChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
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
