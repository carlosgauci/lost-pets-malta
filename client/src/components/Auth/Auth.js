import React, { useState } from "react";
import { AuthForm } from "../";

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <section className="flex flex-col h-full items-center mt-8">
      <h2 className="text-2xl mb-4 font-semibold">
        Sign {isSignup ? "Up" : "In"}
      </h2>
      <AuthForm isSignup={isSignup} />
      <p>
        {isSignup ? "Already have an account?" : "Don't have an account?"}
        <button
          className="text-purple-600 font-semibold ml-1"
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup ? "Log in" : "Sign Up"}
        </button>
      </p>
    </section>
  );
}
