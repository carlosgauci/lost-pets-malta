import React, { useState, useEffect } from "react";
import { Input, Button } from "../";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

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
    description: "",
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
      {/* Photo upload - hide after a file is uploaded */}
      {!fileUploaded && (
        <Input
          type="file"
          label="Photo:"
          name="file"
          placeholder="Your pet's name"
          required={!currentPost}
          handleChange={uploadImage}
        />
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
      <Input
        type="text"
        label="Name:"
        name="name"
        placeholder="Your pet's name"
        value={postData.name}
        required={true}
        handleChange={(e) => setPostData({ ...postData, name: e.target.value })}
      />

      {/* Category Select*/}
      <Input
        type="select"
        label="Category:"
        name="category"
        placeholder="Category"
        value={postData.category}
        handleChange={(e) =>
          setPostData({ ...postData, category: e.target.value })
        }
      />

      {/* Breed / Identifier */}
      <Input
        type="text"
        label="Breed/Identifier:"
        name="breed"
        placeholder="eg: Fox Terrier"
        value={postData.breed}
        required={true}
        handleChange={(e) =>
          setPostData({ ...postData, breed: e.target.value })
        }
      />

      {/* Description */}
      <Input
        type="textarea"
        label="Description:"
        name="description"
        placeholder="Add a short description / last known whereabouts of your pet (max 200 chars)."
        value={postData.description}
        required={true}
        handleChange={(e) =>
          setPostData({ ...postData, description: e.target.value })
        }
      />

      {/* Contact */}
      <Input
        type="text"
        label="Contact:"
        name="contact"
        placeholder="Phone number or email address"
        value={postData.contact}
        required={true}
        handleChange={(e) =>
          setPostData({ ...postData, contact: e.target.value })
        }
      />

      <Button text="Submit Post" disabled={loading} />
    </form>
  );
}
