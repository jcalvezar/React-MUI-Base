import store from "../redux/store";
import { AUTH_LOGIN, AUTH_LOGOUT } from "../redux/auth/actionTypes";

export const jlogin = (login) => {
  console.log("JLOGIN", login);
  if (login.user === "admin" && login.pass === "admin") {
    store.dispatch({
      type: AUTH_LOGIN,
      payload: { loggedAs: "admin", user: "Admin" },
    });
  }

  if (login.user === "user" && login.pass === "user") {
    store.dispatch({
      type: AUTH_LOGIN,
      payload: { loggedAs: "user", user: "User" },
    });
  }
};

export const jlogout = () => {
  store.dispatch({ type: AUTH_LOGOUT, payload: {} });
};
