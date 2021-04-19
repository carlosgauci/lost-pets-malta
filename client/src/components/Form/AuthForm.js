import React, { useState } from "react";
import { Input, Button } from "../";

export default function AuthForm() {
  const isSignup = true;

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
        placeholder="Enter a password"
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
      <Button text={isSignup ? "Sign Up" : "Log In"} />
    </form>
  );
}
