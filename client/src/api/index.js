import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, postData) =>
  axios.patch(`${url}/${id}`, postData);

export const deletePost = (id) => {
  axios.delete(`${url}/${id}`);
};

export const signIn = (formData) =>
  axios.post("http://localhost:5000/user/signin", formData);
export const signUp = (formData) =>
  axios.post("http://localhost:5000/user/signup", formData);
