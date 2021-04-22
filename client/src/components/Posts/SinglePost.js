import React from "react";
import { useDispatch } from "react-redux";
import { selectPost, toggleModal } from "../../actions/settings";
import { deletePost } from "../../actions/posts";

export default function SinglePost({
  post: { name, breed, contact, image, lastSeen, _id, creator },
}) {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  const handleEdit = () => {
    dispatch(selectPost(_id));
    dispatch(toggleModal(true));
  };

  const handleDelete = () => {
    dispatch(deletePost(_id));
  };

  return (
    <article className="w-full max-w-xl border border-gray-200 shadow-sm rounded overflow-hidden">
      {/* Image container */}
      <div className="w-full h-80 bg-blue-400 relative">
        <img src={image} alt={name} className="object-cover w-full h-full" />

        {/* Edit & delete buttons, only show to post creator */}
        {(user?.result.googleId === creator ||
          user?.result?._id === creator) && (
          <div className="absolute bottom-2 right-2  flex text-xs ">
            <button
              onClick={handleEdit}
              className="mr-2 bg-purple-800 text-white rounded py-1 w-12 font-semibold"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-purple-800 rounded py-1 w-12 font-semibold text-white"
            >
              Delete
            </button>
          </div>
        )}
      </div>

      {/* Text */}
      <section className="p-3">
        <ul className="grid grid-cols-2 text-center break-all">
          <li className="flex flex-col p-4">
            <span className="font-bold text-xs tracking-widest mb-2">NAME</span>
            <p>{name}</p>
          </li>
          <li className="flex flex-col p-4">
            <span className="font-bold text-xs tracking-widest mb-2">
              BREED
            </span>
            <p>{breed}</p>
          </li>
          <li className=" flex flex-col p-4">
            <span className="font-bold text-xs tracking-widest mb-2">
              LAST SEEN
            </span>
            <p>{lastSeen}</p>
          </li>
          <li className="flex flex-col p-4">
            <span className="font-bold text-xs tracking-widest mb-2">
              CONTACT
            </span>
            <p>{contact}</p>
          </li>
        </ul>

        {/* <ul className="text-lg">
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
        </ul> */}
      </section>
    </article>
  );
}
