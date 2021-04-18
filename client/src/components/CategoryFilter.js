import React from "react";
import { useDispatch } from "react-redux";
import { selectCategory } from "../actions/settings";
import { useSelector } from "react-redux";

export default function CategoryFilter() {
  const dispatch = useDispatch();

  const handleCategorySelect = (category) => {
    dispatch(selectCategory(category));
  };

  const selectedCategory = useSelector(
    (state) => state.settings.categorySelected
  );

  return (
    <section>
      <ul className="flex flex-wrap justify-center my-4 md:my-8">
        <li
          className="border border-gray-300 px-2 rounded-lg my-2 mx-1 cursor-pointer md:mx-3"
          style={{ backgroundColor: selectedCategory === "" && "#C4B5FD" }}
          onClick={() => handleCategorySelect("")}
        >
          All Pets
        </li>

        <li
          className="border border-gray-300 px-2 rounded-lg my-2 mx-1 cursor-pointer  md:mx-3"
          style={{ backgroundColor: selectedCategory === "dog" && "#C4B5FD" }}
          onClick={() => handleCategorySelect("dog")}
        >
          Dogs
        </li>

        <li
          className="border border-gray-300 px-2 rounded-lg my-2 mx-1 cursor-pointer  md:mx-3"
          style={{ backgroundColor: selectedCategory === "cat" && "#C4B5FD" }}
          onClick={() => handleCategorySelect("cat")}
        >
          Cats
        </li>

        <li
          className="border border-gray-300 px-2 rounded-lg my-2 mx-1 cursor-pointer  md:mx-3"
          style={{ backgroundColor: selectedCategory === "bird" && "#C4B5FD" }}
          onClick={() => handleCategorySelect("bird")}
        >
          Birds
        </li>
      </ul>
    </section>
  );
}
