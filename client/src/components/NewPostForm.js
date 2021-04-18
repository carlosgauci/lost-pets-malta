import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../actions/posts";

export default function NewPostForm() {
  // Cloudinary upload url and preset
  const preset = process.env.REACT_APP_CLOUDINARY_PRESET;
  const url = process.env.REACT_APP_CLOUDINARY_UPLOAD_URL;

  // Get current post if the edit button was clicked
  const currentPostId = useSelector((state) => state.settings.currentPostId);
  const currentPost = useSelector((state) =>
    currentPostId
      ? state.posts.find((post) => post._id === currentPostId)
      : null
  );

  // Default state for post data
  const [postData, setPostData] = useState({
    name: "",
    category: "dog",
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

    // If we have a current post id (if edit was clicked) update the post
    if (currentPostId) {
      dispatch(updatePost(currentPostId, postData));
    } else {
      // Create post
      dispatch(createPost(postData));
    }
  };

  useEffect(() => {
    if (currentPost) {
      setPostData(currentPost);
    }
  }, [currentPost]);

  return (
    <form onSubmit={handleSubmit}>
      {/* Photo upload - hide input after a file is uploaded */}
      {!fileUploaded && (
        <div className="flex flex-col mb-3">
          <label htmlFor="image">Photo:</label>
          <input
            type="file"
            accept="image/*"
            name="file"
            onChange={uploadImage}
            // Photo required only if new post
            required={!currentPost}
          />
        </div>
      )}

      {/* Image preview - show after image is uploaded or when editing post */}
      {(fileUploaded || currentPost) && (
        <div className="mb-3">
          <img
            src={postData.image}
            alt="preview"
            className="object-cover w-16 h-16"
          />
        </div>
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
          value={postData.name}
          onChange={(e) => setPostData({ ...postData, name: e.target.value })}
        />
      </div>

      {/* Category */}
      <div className="flex flex-col mb-3">
        <label htmlFor="category">Category:</label>
        <select
          name="category"
          className="border border-gray-300 rounded px-2 py-1"
          value={postData.category}
          onChange={(e) =>
            setPostData({ ...postData, category: e.target.value })
          }
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
          required
          value={postData.breed}
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
          value={postData.lastSeen}
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
          value={postData.contact}
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
