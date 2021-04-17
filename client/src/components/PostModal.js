import React from "react";
import { NewPostForm } from "./";

export default function PostModal() {
  return (
    <section className="fixed bg-black bg-opacity-80 inset-0 flex justify-center items-center">
      <div className="bg-white px-6 py-4 rounded-lg w-full max-w-sm">
        <h2 className="text-center text-2xl mb-4">Create Post</h2>
        <NewPostForm />
      </div>
    </section>
  );
}
