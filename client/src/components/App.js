import React, { useEffect } from "react";
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

  // Disable scrolling while post modal is open
  let html;
  if (typeof document !== "undefined") {
    html = document.querySelector("html");
  }

  useEffect(() => {
    postModalOpen
      ? (html.style.overflow = "hidden")
      : (html.style.overflow = "visible");
  }, [postModalOpen]);

  return (
    <>
      <Header />
      <Posts />
      <Footer />
      {postModalOpen && <PostModal />}
    </>
  );
}
