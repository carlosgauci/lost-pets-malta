import React, { useState } from "react";
import Header from "./Header";
import Posts from "./Posts";
import Footer from "./Footer";
import PostModal from "./PostModal";

export default function App() {
  const [postModalOpen, setPostModalOpen] = useState(true);
  return (
    <>
      <Header />
      <Posts />
      <Footer />
      {postModalOpen && <PostModal />}
    </>
  );
}
