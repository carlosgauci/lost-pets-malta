import {
  TOGGLE_MODAL,
  SELECT_CATEGORY,
  SELECT_POST,
  TOGGLE_NAVIGATION,
} from "../constants/actionTypes";

const initState = {
  postModalOpen: false,
  categorySelected: "",
  currentPostId: "",
  navigationOpen: false,
};

const settingsReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, postModalOpen: action.payload };

    case SELECT_CATEGORY:
      return { ...state, categorySelected: action.payload };

    case SELECT_POST:
      return { ...state, currentPostId: action.payload };

    case TOGGLE_NAVIGATION:
      return { ...state, navigationOpen: !state.navigationOpen };

    default:
      return state;
  }
};

export default settingsReducer;
