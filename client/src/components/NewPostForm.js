import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";

export default function NewPostForm() {
  // Cloudinary upload url and preset
  const preset = process.env.REACT_APP_CLOUDINARY_PRESET;
  const url = process.env.REACT_APP_CLOUDINARY_UPLOAD_URL;

  // Default state for post data
  const [postData, setPostData] = useState({
    name: "",
    category: "",
    breed: "",
    lastSeen: "",
    contact: "",
    image: "",
  });

  // State to disable submit button while we're uploading an image to cloudinary
  const [loading, setLoading] = useState(false);

  // State to hide uploader once image is uploaded
  const [fileUploaded, setFileUploaded] = useState(false);

  // Upload image to cloudinary and get url
  const uploadImage = async (e) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", preset);

    await axios
      .post(url, formData)
      .then((res) => setPostData({ ...postData, image: res.data.secure_url }))
      .then(() => setFileUploaded(true))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  };

  const dispatch = useDispatch();

  // Submit new post
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Photo upload */}
      {!fileUploaded ? (
        <div className="flex flex-col mb-3">
          <label htmlFor="image">Photo:</label>
          <input
            type="file"
            accept="image/*"
            name="file"
            onChange={uploadImage}
            required
          />
        </div>
      ) : (
        <p className="mb-3">Image upload successful.</p>
      )}

      {/* Name */}
      <div className="flex flex-col mb-3">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Your pet's name"
          className="border border-gray-300 rounded px-2 py-1"
          required
          onChange={(e) => setPostData({ ...postData, name: e.target.value })}
        />
      </div>

      {/* Category */}
      <div className="flex flex-col mb-3">
        <label htmlFor="category">Category:</label>
        <select
          name="category"
          className="border border-gray-300 rounded px-2 py-1"
          defaultValue="default"
          onChange={(e) =>
            setPostData({ ...postData, category: e.target.value })
          }
        >
          <option disabled value="default">
            Select a category
          </option>
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
          required
          onChange={(e) => setPostData({ ...postData, breed: e.target.value })}
        />
      </div>

      {/* Last Seen */}
      <div className="flex flex-col mb-3">
        <label htmlFor="lastSeen">Last Seen:</label>
        <input
          type="text"
          name="lastSeen"
          placeholder="eg: Xemxija"
          className="border border-gray-300 rounded px-2 py-1"
          required
          onChange={(e) =>
            setPostData({ ...postData, lastSeen: e.target.value })
          }
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
          required
          onChange={(e) =>
            setPostData({ ...postData, contact: e.target.value })
          }
        />
      </div>

      <button
        type="submit"
        className="bg-purple-600 text-white px-3 py-1 rounded-lg block mx-auto mt-6 mb-2 disabled:opacity-50"
        disabled={loading}
      >
        Submit Post
      </button>
    </form>
  );
}
