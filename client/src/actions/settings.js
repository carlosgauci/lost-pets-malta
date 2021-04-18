import {
  SELECT_POST,
  SELECT_CATEGORY,
  TOGGLE_MODAL,
} from "../constants/actionTypes";

export const toggleModal = () => {
  return { type: TOGGLE_MODAL };
};

export const selectCategory = (category) => {
  return { type: SELECT_CATEGORY, payload: category };
};

export const selectPost = (id) => {
  return { type: SELECT_POST, payload: id };
};
