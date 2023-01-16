import { AUTH_LOGIN, AUTH_LOGOUT } from "./actionTypes";

export const authLogin = (login) => {
  return { type: AUTH_LOGIN, payload: { ...login } };
};

export const authLogout = () => {
  return { type: AUTH_LOGOUT, payload: {} };
};
