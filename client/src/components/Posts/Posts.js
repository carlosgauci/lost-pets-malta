import React, { useEffect } from "react";
import { CategoryFilter, SinglePost } from "../";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";

export default function Posts() {
  const dispatch = useDispatch();

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
      <CategoryFilter />
      <div className="grid gap-10 template-columns justify-center">
        {filteredPosts.map((post) => (
          <SinglePost key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
}
