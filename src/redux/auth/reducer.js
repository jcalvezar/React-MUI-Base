import { AUTH_LOGIN, AUTH_LOGOUT } from "./actionTypes";
import initialState from "./data.json";

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case AUTH_LOGIN: {
      return {
        ...action.payload,
      };
    }
    case AUTH_LOGOUT: {
      return {
        ...state,
        loggedAs: null,
        user: null,
      };
    }
    default:
      return state;
  }
}
