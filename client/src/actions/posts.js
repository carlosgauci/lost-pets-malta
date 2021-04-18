import {
  GET_POSTS,
  CREATE,
  UPDATE,
  DELETE,
  TOGGLE_MODAL,
} from "../constants/actionTypes";

import * as api from "../api";

// Get all posts from api
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: GET_POSTS, payload: data });
  } catch (err) {
    console.log(err);
  }
};

// Create a post
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
    dispatch({ type: TOGGLE_MODAL });
  } catch (err) {
    console.log(err);
  }
};

// Update a post
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
    dispatch({ type: TOGGLE_MODAL });
  } catch (err) {
    console.log(err);
  }
};

// Delete a post
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (err) {
    console.log(err);
  }
};
