import { AUTH, LOGOUT, SIGNIN, SIGNOUT } from "../constants/actionTypes";

export const auth = (result, token) => {
  return { type: AUTH, data: { result, token } };
};

export const logout = () => {
  return { type: LOGOUT };
};

export const signin = (formData, history) => async (dispatch) => {
  try {
    // sign in

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    // sign up

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
