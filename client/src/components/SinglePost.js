import React from "react";

export default function SinglePost() {
  return (
    <article className="w-full max-w-md border border-gray-300 rounded-lg overflow-hidden">
      {/* Image container */}
      <div className="w-full h-72 bg-blue-400">
        <img
          src="https://res.cloudinary.com/dph6bvbnu/image/upload/v1618659231/dog2_hy80rj.jpg"
          alt="Charlie"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text */}
      <section className="px-2 py-3">
        <ul>
          <li className="mb-3">
            <span className="font-semibold">Name:</span> Charlie
          </li>
          <li className="mb-3">
            <span className="font-semibold">Breed/Indentifier:</span> Fox
            Terrier
          </li>
          <li className="mb-3">
            <span className="font-semibold">Last Seen:</span> Bugibba
          </li>
          <li>
            <span className="font-semibold">Contact:</span> 79007289
          </li>
        </ul>
      </section>
    </article>
  );
}
