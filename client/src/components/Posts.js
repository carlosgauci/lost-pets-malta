import React from "react";
import CategoryFilter from "./CategoryFilter";
import SinglePost from "./SinglePost";

export default function Posts() {
  return (
    <section className="container mx-auto px-2 mb-4 md:mb-8">
      <CategoryFilter />
      <div className="grid gap-10 template-columns justify-center">
        <SinglePost />
      </div>
    </section>
  );
}
