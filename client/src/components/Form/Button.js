import React from "react";

export default function Button({ text, disabled, google, handleClick }) {
  return (
    <button
      type={google ? "button" : "submit"}
      className={`font-semibold py-2 rounded w-full mb-2 disabled:opacity-50 ${
        google
          ? "bg-gray-50 text-black border border-gray-300"
          : "bg-purple-600 text-white mt-3"
      } `}
      disabled={disabled || undefined}
      onClick={handleClick || undefined}
    >
      {text}
    </button>
  );
}
