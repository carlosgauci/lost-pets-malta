import React from "react";
import { NewPostForm } from "./";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toggleModal } from "../actions/settings";

export default function PostModal() {
  const dispatch = useDispatch();

  return (
    <section className="fixed bg-black bg-opacity-80 inset-0 flex justify-center items-center">
      <div className="bg-white px-6 py-4 rounded-lg w-full max-w-sm relative">
        <IoCloseSharp
          className="absolute top-0 right-0 mt-2 mr-2 text-2xl"
          onClick={() => dispatch(toggleModal())}
        />
        <h2 className="text-center text-2xl mb-4">Create Post</h2>
        <NewPostForm />
      </div>
    </section>
  );
}
