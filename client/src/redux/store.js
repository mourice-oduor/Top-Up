import { configureStore } from "@reduxjs/toolkit";

import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./reducers/userReducers";

import { alertsReducer } from "./reducers/alertsReducer";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";

export const history = createBrowserHistory();

const rootReducer = (history) => ({
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  alerts: alertsReducer,
  router: connectRouter(history),
});

// const userInfoFromStorage = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user"))
//   : null;

// const initialState = {
//   userLogin: { user: userInfoFromStorage },
// };

const preloadedState = {};
const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware(history)),
  reducer: rootReducer(history),
  preloadedState,
});

export default store;
