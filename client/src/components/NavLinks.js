import React from "react";
import { useDispatch } from "react-redux";
import { toggleModal, selectPost, toggleNavigation } from "../actions/settings";

export default function NavLinks({ mobile }) {
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(selectPost(""));
    dispatch(toggleModal());
    mobile && dispatch(toggleNavigation());
  };

  const user = true;

  return (
    <ul className="flex flex-col items-center text-white text-3xl md:text-base md:flex-row">
      {user ? (
        <>
          <li
            className="px-2 rounded-lg mb-4 md:mb-0 md:mr-2 cursor-pointer"
            onClick={handleModal}
          >
            Create Post
          </li>
          <li className=" px-2 rounded-lg cursor-pointer">Logout</li>
        </>
      ) : (
        <>
          <li className="px-2 rounded-lg mb-4 md:mb-0 md:mr-2 cursor-pointer">
            Create Account
          </li>
          <li className="px-2 rounded-lg cursor-pointer">Login</li>
        </>
      )}
    </ul>
  );
}
