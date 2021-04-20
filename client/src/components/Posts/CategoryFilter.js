import React from "react";
import { CategoryItem } from "../";
import { useDispatch } from "react-redux";
import { selectCategory } from "../../actions/settings";

export default function CategoryFilter() {
  const dispatch = useDispatch();

  const handleCategorySelect = (category) => {
    dispatch(selectCategory(category));
  };

  return (
    <section>
      <ul className="flex flex-wrap justify-center my-4 md:my-6">
        <CategoryItem
          text="All Pets"
          category=""
          handleCategorySelect={handleCategorySelect}
        />

        <CategoryItem
          text="Dogs"
          category="dog"
          handleCategorySelect={handleCategorySelect}
        />

        <CategoryItem
          text="Cats"
          category="cat"
          handleCategorySelect={handleCategorySelect}
        />

        <CategoryItem
          text="Birds"
          category="bird"
          handleCategorySelect={handleCategorySelect}
        />
      </ul>
    </section>
  );
}
