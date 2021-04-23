import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthForm } from "../";

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();

  useEffect(() => {
    user && history.push("/");
  }, [user, history]);

  return (
    <section className="flex flex-col h-full items-center mt-8">
      {!user ? (
        <>
          <h2 className="text-2xl mb-4 font-semibold">
            Sign {isSignup ? "Up" : "In"}
          </h2>
          <AuthForm isSignup={isSignup} />
          <p className="mb-2">
            {isSignup ? "Already have an account?" : "Don't have an account?"}
            <button
              className="text-purple-600 font-semibold ml-1"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? "Sign in" : "Register"}
            </button>
          </p>
        </>
      ) : (
        <p className="font-semibold">You are already signed in.</p>
      )}
    </section>
  );
}
