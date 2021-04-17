import React, { useState, useEffect } from "react";
import { Header, Posts, Footer, PostModal } from "./";
import { useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";

export default function App() {
  const [postModalOpen, setPostModalOpen] = useState(true);
  const dispatch = useDispatch();

  // Get posts
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Posts />
      <Footer />
      {postModalOpen && <PostModal />}
    </>
  );
}
