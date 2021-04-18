const initState = {
  postModalOpen: false,
  categorySelected: "",
};

const settingsReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_POST_MODAL":
      return { ...state, postModalOpen: !state.postModalOpen };

    case "SELECT_CATEGORY":
      return { ...state, categorySelected: action.payload };

    default:
      return state;
  }
};

export default settingsReducer;
