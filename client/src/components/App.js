import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header, Posts, Footer, PostModal, Navigation, Auth } from "./";

export default function App() {
  const postModalOpen = useSelector((state) => state.settings.postModalOpen);
  const navigationOpen = useSelector((state) => state.settings.navigationOpen);

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
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Switch>
            <Route path="/" exact component={Posts} />
            <Route path="/login" exact component={Auth} />
          </Switch>
        </main>
        <Footer />
        {postModalOpen && <PostModal />}
        {navigationOpen && <Navigation />}
      </div>
    </BrowserRouter>
  );
}
