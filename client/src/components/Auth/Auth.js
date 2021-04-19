import React from "react";
import { AuthForm } from "../";

export default function Auth() {
  const isSignup = false;

  return (
    <section className="flex flex-col h-full items-center mt-8">
      <h2 className="text-2xl mb-4">Sign {isSignup ? "Up" : "In"}</h2>
      <AuthForm />
    </section>
  );
}
