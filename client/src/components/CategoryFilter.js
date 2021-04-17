import React from "react";

export default function CategoryFilter() {
  return (
    <section>
      <ul className="flex flex-wrap justify-center my-4 md:my-8">
        <li className="border border-gray-300 px-2 rounded-lg my-2 mr-2">
          All Pets
        </li>

        <li className="border border-gray-300 px-2 rounded-lg my-2 mr-2">
          Dogs
        </li>

        <li className="border border-gray-300 px-2 rounded-lg my-2 mr-2">
          Cats
        </li>

        <li className="border border-gray-300 px-2 rounded-lg my-2 mr-2">
          Birds
        </li>
      </ul>
    </section>
  );
}
