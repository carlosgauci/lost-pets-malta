import React from "react";
import { useSelector } from "react-redux";

export default function CategoryItem({ text, category, handleCategorySelect }) {
  const selectedCategory = useSelector(
    (state) => state.settings.categorySelected
  );

  return (
    <li
      className="border border-gray-300 px-2 rounded-lg my-2 mx-1 cursor-pointer md:mx-3"
      style={{ backgroundColor: selectedCategory === category && "#C4B5FD" }}
      onClick={() => handleCategorySelect(category)}
    >
      {text}
    </li>
  );
}
