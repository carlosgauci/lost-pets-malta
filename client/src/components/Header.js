import React from "react";

export default function Header() {
  return (
    <header className="bg-black md:h-20">
      <div className="container px-2 py-4 mx-auto md:grid md:grid-cols-3 md:items-center md:py-0 md:h-full ">
        <h1 className="text-2xl text-center text-white leading-none md:text-3xl md:col-start-2">
          Lost Pets Malta
        </h1>
        <nav className="md:justify-self-end">
          <ul className="flex justify-evenly text-white mt-4 md:mt-0">
            <li className="bg-purple-600 px-2 rounded-lg md:mr-2">
              Create Post
            </li>
            <li className=" px-2 rounded-lg md:bg-transparent">Logout</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
