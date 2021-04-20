import { combineReducers } from "redux";
import posts from "./posts";
import settings from "./settings";
import auth from "./auth";

export default combineReducers({
  posts,
  settings,
  auth,
});
