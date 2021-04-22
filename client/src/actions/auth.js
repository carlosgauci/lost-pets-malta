import { AUTH, LOGOUT, SIGNIN, SIGNUP } from "../constants/actionTypes";
import * as api from "../api";

export const auth = (result, token) => {
  return { type: AUTH, data: { result, token } };
};

export const logout = () => {
  return { type: LOGOUT };
};

export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
