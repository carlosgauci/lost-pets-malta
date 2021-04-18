import React from "react";
import { CategoryFilter, SinglePost } from "./";
import { useSelector } from "react-redux";

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  const selectedCategory = useSelector(
    (state) => state.settings.categorySelected
  );

  // Filter posts and reverse to get latest first
  const filteredPosts = posts
    .filter((post) => post.category.includes(selectedCategory))
    .reverse();

  return (
    <section className="container mx-auto px-2 mb-4 md:mb-8 flex-1">
      <CategoryFilter />
      <div className="grid gap-10 template-columns justify-center">
        {filteredPosts.map((post) => (
          <SinglePost key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
}
