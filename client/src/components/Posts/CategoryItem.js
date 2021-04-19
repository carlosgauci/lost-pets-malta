import React from "react";
import { useSelector } from "react-redux";

export default function CategoryItem({ text, category, handleCategorySelect }) {
  const selectedCategory = useSelector(
    (state) => state.settings.categorySelected
  );

  return (
    <li
      className={`border border-gray-300 w-16 text-center text-sm font-semibold py-2 rounded my-2 mx-1 cursor-pointer sm:w-20 md:mx-3 leading-none ${
        selectedCategory === category && "bg-purple-600 text-white"
      }`}
      onClick={() => handleCategorySelect(category)}
    >
      {text}
    </li>
  );
}
