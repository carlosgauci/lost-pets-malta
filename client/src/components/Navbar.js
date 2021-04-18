import React from "react";
import { useDispatch } from "react-redux";
import { toggleModal, selectPost } from "../actions/settings";

export default function Navbar() {
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(selectPost(""));
    dispatch(toggleModal());
  };
  return (
    <nav className="md:justify-self-end">
      <ul className="flex justify-evenly text-white mt-4 md:mt-0">
        <li
          className="bg-purple-600 px-2 rounded-lg md:mr-2 cursor-pointer"
          onClick={handleModal}
        >
          Create Post
        </li>
        <li className=" px-2 rounded-lg md:bg-transparent cursor-pointer">
          Logout
        </li>
      </ul>
    </nav>
  );
}
