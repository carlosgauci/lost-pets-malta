import React from "react";
import { NavLinks } from "./";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toggleNavigation } from "../actions/settings";

export default function Navigation() {
  const dispatch = useDispatch();

  return (
    <nav className="fixed inset-0 bg-black z-50 flex justify-center items-center">
      {/* Close button */}
      <IoCloseSharp
        className="text-white text-3xl absolute top-0 right-0 mt-4 mr-4"
        onClick={() => dispatch(toggleNavigation())}
      />

      <NavLinks mobile={true} />
    </nav>
  );
}
