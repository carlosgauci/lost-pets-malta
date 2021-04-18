import React from "react";
import { useDispatch } from "react-redux";
import { selectPost, toggleModal } from "../actions/settings";
import { deletePost } from "../actions/posts";

export default function SinglePost({
  post: { name, breed, contact, image, lastSeen, _id },
}) {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(selectPost(_id));
    dispatch(toggleModal());
  };

  const handleDelete = () => {
    dispatch(deletePost(_id));
  };

  return (
    <article className="w-full max-w-md border border-gray-300 rounded-lg overflow-hidden">
      {/* Image container */}
      <div className="w-full h-72 bg-blue-400">
        <img src={image} alt="Charlie" className="object-cover w-full h-full" />
      </div>

      {/* Text */}
      <section className="px-2 py-3">
        <ul>
          <li className="mb-3">
            <span className="font-semibold">Name:</span> {name}
          </li>
          <li className="mb-3">
            <span className="font-semibold">Breed/Identifier:</span> {breed}
          </li>
          <li className="mb-3">
            <span className="font-semibold">Last Seen:</span> {lastSeen}
          </li>
          <li>
            <span className="font-semibold">Contact:</span> {contact}
          </li>
        </ul>
        <div className="flex justify-between mt-3 text-xs">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </section>
    </article>
  );
}
