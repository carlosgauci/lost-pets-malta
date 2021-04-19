import React from "react";

export default function Button({ text, disabled }) {
  return (
    <button
      type="submit"
      className="bg-purple-600 text-white px-3 py-1 rounded w-full mt-3 mb-2 disabled:opacity-50"
      disabled={disabled || undefined}
    >
      {text}
    </button>
  );
}
