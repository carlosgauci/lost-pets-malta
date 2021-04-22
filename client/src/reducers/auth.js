import { AUTH, LOGOUT, AUTH_ERROR } from "../constants/actionTypes";

const initState = {
  authData: null,
  authError: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };

    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };

    case AUTH_ERROR:
      return { ...state, authError: action?.data };

    default:
      return state;
  }
};

export default authReducer;
