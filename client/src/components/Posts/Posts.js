import React, { useEffect } from "react";
import { CategoryFilter, SinglePost } from "../";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";

export default function Posts() {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));
  const posts = useSelector((state) => state.posts);
  const selectedCategory = useSelector(
    (state) => state.settings.categorySelected
  );

  // Filter posts and reverse to get latest first
  const filteredPosts = posts
    .filter((post) => post.category.includes(selectedCategory))
    .reverse();

  // Get posts
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <section className="container mx-auto mb-4 md:mb-8 flex-1">
      {user && (
        <p className="text-center font-semibold mt-4 md:mt-6">
          Welcome, {user.result.name}!
        </p>
      )}
      <CategoryFilter />
      <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-center grid-flow-row items-start justify-items-center">
        {filteredPosts.map((post) => (
          <SinglePost key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
}
