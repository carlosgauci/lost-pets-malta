import { AUTH, LOGOUT } from "../constants/actionTypes";

export const auth = (result, token) => {
  return { type: AUTH, data: { result, token } };
};

export const logout = () => {
  return { type: LOGOUT };
};
