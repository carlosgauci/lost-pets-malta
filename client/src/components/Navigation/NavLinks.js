import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleModal,
  selectPost,
  toggleNavigation,
} from "../../actions/settings";
import { logout } from "../../actions/auth";
import { useHistory, useLocation } from "react-router-dom";

export default function NavLinks({ mobile }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const modalOpen = useSelector((state) => state.settings.postModalOpen);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  // Open create post modal
  // Clear selected post in case we were editing, if on mobile close the nav, and toggle the modal
  const handleModal = () => {
    dispatch(selectPost(""));
    mobile && dispatch(toggleNavigation());
    dispatch(toggleModal(!modalOpen));
  };

  // Logout link
  const handleLogout = () => {
    mobile && dispatch(toggleNavigation());
    dispatch(logout());
    history.push("/login");
  };

  // Sign in link
  const handleSignIn = () => {
    mobile && dispatch(toggleNavigation());
    history.push("/login");
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

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
          <li
            className=" px-2 rounded-lg cursor-pointer"
            onClick={handleLogout}
          >
            Sign Out
          </li>
        </>
      ) : (
        <li className="px-2 rounded-lg cursor-pointer" onClick={handleSignIn}>
          Sign In
        </li>
      )}
    </ul>
  );
}
