import React, { useState, useEffect } from "react";
import axios from "axios";
import NewPostForm from "./NewPostForm";

export default function PostModal() {
  const preset = process.env.REACT_APP_CLOUDINARY_PRESET;
  const url = process.env.REACT_APP_CLOUDINARY_UPLOAD_URL;

  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Upload image to cloudinary and get url
  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", preset);

    await axios
      .post(url, formData)
      .then((res) => setImageUrl(res.data.secure_url))
      .catch((err) => console.log(err));
  };

  return (
    <section className="fixed bg-black bg-opacity-80 inset-0 flex justify-center items-center">
      <div className="bg-white px-6 py-4 rounded-lg w-full max-w-sm">
        <h2 className="text-center text-2xl mb-4">Create Post</h2>

        {/* Photo upload to cloudinary */}
        <div className="flex flex-col mb-3">
          <label htmlFor="image">Photo:</label>
          <input
            type="file"
            accept="image/*"
            name="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <NewPostForm uploadImage={uploadImage} imageUrl={imageUrl} />
      </div>
    </section>
  );
}
