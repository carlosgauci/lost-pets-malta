import * as api from "../api";

// Get all posts from api
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "GET_POSTS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// Create a post
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE_POST", payload: data });
    dispatch({ type: "TOGGLE_POST_MODAL" });
  } catch (err) {
    console.log(err.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: "UPDATE_POST", payload: data });
    dispatch({ type: "TOGGLE_POST_MODAL" });
  } catch (err) {
    console.log(err);
  }
};
