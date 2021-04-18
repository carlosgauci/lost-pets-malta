export const toggleModal = () => {
  return { type: "TOGGLE_POST_MODAL" };
};

export const selectCategory = (category) => {
  return { type: "SELECT_CATEGORY", payload: category };
};

export const selectPost = (id) => {
  return { type: "SELECT_CURRENT_POST", payload: id };
};
