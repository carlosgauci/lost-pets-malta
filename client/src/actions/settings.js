import {
  SELECT_POST,
  SELECT_CATEGORY,
  TOGGLE_MODAL,
  TOGGLE_NAVIGATION,
} from "../constants/actionTypes";

export const toggleModal = (payload) => {
  return { type: TOGGLE_MODAL, payload };
};

export const selectCategory = (category) => {
  return { type: SELECT_CATEGORY, payload: category };
};

export const selectPost = (id) => {
  return { type: SELECT_POST, payload: id };
};

export const toggleNavigation = () => {
  return { type: TOGGLE_NAVIGATION };
};
