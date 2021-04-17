import React from "react";
import { CategoryFilter, SinglePost } from "./";
import { useSelector } from "react-redux";

export default function Posts() {
  const posts = useSelector((state) => state.posts);

  return (
    <section className="container mx-auto px-2 mb-4 md:mb-8">
      <CategoryFilter />
      <div className="grid gap-10 template-columns justify-center">
        <SinglePost />
      </div>
    </section>
  );
}
