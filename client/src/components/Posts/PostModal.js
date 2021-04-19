import React from "react";
import { PostForm } from "../";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../actions/settings";

export default function PostModal() {
  const dispatch = useDispatch();

  const currentPost = useSelector((state) => state.settings.currentPostId);

  return (
    <section className="fixed bg-black bg-opacity-80 inset-0 flex justify-center items-center">
      <div className="bg-white px-6 py-4 rounded w-full max-w-sm relative max-h-screen overflow-y-auto">
        <IoCloseSharp
          className="absolute top-0 right-0 mt-2 mr-2 text-2xl cursor-pointer"
          onClick={() => dispatch(toggleModal())}
        />
        <h2 className="text-center text-2xl mb-4">
          {currentPost ? "Edit" : "Create"} Post
        </h2>
        <PostForm />
      </div>
    </section>
  );
}
