import { AUTH, LOGOUT, AUTH_ERROR } from "../constants/actionTypes";
import * as api from "../api";

export const auth = (result, token) => {
  return { type: AUTH, data: { result, token } };
};

export const logout = () => {
  return { type: LOGOUT };
};

export const authError = (error) => {
  return { type: AUTH_ERROR, data: error };
};

export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    dispatch({ type: AUTH_ERROR, data: error.response.data.message });
  }
};

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    dispatch({ type: AUTH_ERROR, data: error.response.data.message });
  }
};
