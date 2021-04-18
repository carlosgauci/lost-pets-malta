import React, { useState, useEffect } from "react";
import { Header, Posts, Footer, PostModal } from "./";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/posts";

export default function App() {
  const dispatch = useDispatch();
  const postModalOpen = useSelector((state) => state.settings.postModalOpen);

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
