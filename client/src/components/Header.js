import React from "react";
import { Navbar } from "./";

export default function Header() {
  return (
    <header className="bg-black md:h-20">
      <div className="container px-2 py-4 mx-auto md:grid md:grid-cols-3 md:items-center md:py-0 md:h-full ">
        <h1 className="text-2xl text-center text-white leading-none cursor-default md:text-3xl md:col-start-2">
          Lost Pets Malta
        </h1>
        <Navbar />
      </div>
    </header>
  );
}
