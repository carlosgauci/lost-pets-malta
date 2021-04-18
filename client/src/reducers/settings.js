import {
  TOGGLE_MODAL,
  SELECT_CATEGORY,
  SELECT_POST,
} from "../constants/actionTypes";

const initState = {
  postModalOpen: false,
  categorySelected: "",
  currentPostId: "",
};

const settingsReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, postModalOpen: !state.postModalOpen };

    case SELECT_CATEGORY:
      return { ...state, categorySelected: action.payload };

    case SELECT_POST:
      return { ...state, currentPostId: action.payload };

    default:
      return state;
  }
};

export default settingsReducer;
