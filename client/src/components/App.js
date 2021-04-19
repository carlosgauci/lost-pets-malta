import React, { useEffect } from "react";
import { Header, Posts, Footer, PostModal, Navigation } from "./";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/posts";

export default function App() {
  const dispatch = useDispatch();
  const postModalOpen = useSelector((state) => state.settings.postModalOpen);
  const navigationOpen = useSelector((state) => state.settings.navigationOpen);

  // Get posts
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // Disable scrolling while post modal or nav is open
  let html;
  if (typeof document !== "undefined") {
    html = document.querySelector("html");
  }

  useEffect(() => {
    postModalOpen || navigationOpen
      ? (html.style.overflow = "hidden")
      : (html.style.overflow = "visible");
  }, [postModalOpen, navigationOpen]);

  return (
    <div className="flex flex-col md:min-h-screen">
      <Header />
      <Posts />
      <Footer />
      {postModalOpen && <PostModal />}
      {navigationOpen && <Navigation />}
    </div>
  );
}
