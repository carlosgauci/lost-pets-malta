import React from "react";

export default function NewPostForm() {
  return (
    <form action="">
      {/* Name */}
      <div className="flex flex-col mb-3">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Your pet's name"
          className="border border-gray-300 rounded px-2 py-1"
        />
      </div>

      {/* Category */}
      <div className="flex flex-col mb-3">
        <label htmlFor="category">Category:</label>
        <select
          name="category"
          className="border border-gray-300 rounded px-2 py-1"
        >
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Breed / Identifier */}
      <div className="flex flex-col mb-3">
        <label htmlFor="breed">Breed/Identifier:</label>
        <input
          type="text"
          name="breed"
          placeholder="eg: Fox Terrier"
          className="border border-gray-300 rounded px-2 py-1"
        />
      </div>

      {/* Contact */}
      <div className="flex flex-col">
        <label htmlFor="contact">Contact:</label>
        <input
          type="text"
          name="contact"
          placeholder="Phone number or email"
          className="border border-gray-300 rounded px-2 py-1"
        />
      </div>

      <button className="bg-purple-600 text-white px-3 py-1 rounded-lg block mx-auto mt-6 mb-2">
        Submit Post
      </button>
    </form>
  );
}
