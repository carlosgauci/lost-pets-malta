import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { Header, Posts, Footer, PostModal, Navigation, Auth } from "./";
import decode from "jwt-decode";
import { logout } from "../actions/auth";
import { toggleModal } from "../actions/settings";

export default function App() {
  const postModalOpen = useSelector((state) => state.settings.postModalOpen);
  const navigationOpen = useSelector((state) => state.settings.navigationOpen);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("profile"));

  // Disable scrolling while post modal or nav is open
  let html;
  if (typeof document !== "undefined") {
    html = document.querySelector("html");
  }

  useEffect(() => {
    postModalOpen || navigationOpen
      ? (html.style.overflow = "hidden")
      : (html.style.overflow = "visible");
  }, [postModalOpen, navigationOpen, html.style]);

  // If a user is logged in, check if their token expired
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch(toggleModal(false));
        dispatch(logout());
        history.push("/login");
      }
    }
  }, [postModalOpen, location, history, dispatch, user?.token]);

  return (
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
  );
}
