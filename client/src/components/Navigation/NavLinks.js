import React from "react";
import { useDispatch } from "react-redux";
import {
  toggleModal,
  selectPost,
  toggleNavigation,
} from "../../actions/settings";
import { Link } from "react-router-dom";

export default function NavLinks({ mobile }) {
  const dispatch = useDispatch();

  // Open create post modal
  // Clear selected post in case we were editing, if on mobile close the nav, and toggle the modal
  const handleModal = () => {
    dispatch(selectPost(""));
    mobile && dispatch(toggleNavigation());
    dispatch(toggleModal());
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
        <li className="px-2 rounded-lg cursor-pointer">
          <Link to="/login">Login</Link>
        </li>
      )}
    </ul>
  );
}
