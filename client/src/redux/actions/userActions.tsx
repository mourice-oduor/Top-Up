import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  CLEAR_ERRORS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS
} from "../constants/userConstants";

import axios from "axios";
import { Dispatch } from "redux";

//register
export const register =( email: string, password: string ) =>
  async (dispatch: Dispatch<any> )=> {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "https://reqres.in/api/register", { email, password }, config
      );

      dispatch({ type: REGISTER_USER_SUCCESS, payload: data });

      setTimeout(() => {
        window.location.href = "/login";
      }, 200);

      dispatch({ type: LOGIN_REQUEST, payload: data });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error: any) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  // login
export const login = (email: string, password: string) => async (dispatch: Dispatch<any> ) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://reqres.in/api/login", { email, password }, config
    )
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("userInfo", JSON.stringify(response.data));
      }

      return response.data;
    });

    setTimeout(() => {
      window.location.href = "/profile";
    }, 200);

    dispatch({ type: LOGIN_SUCCESS, payload: data });

  } catch (error: any) {
    dispatch({
      type: LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// Load User
export const loadUser = (id?: any) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get(`https://reqres.in/api/users/${id}`);

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error: any) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};
// logout
export const logout = () => async (dispatch: Dispatch<any> ) => {
  setTimeout(() => {
    window.location.href = "/";
  }, 200);

  dispatch({ type: LOGOUT_SUCCESS });
  localStorage.removeItem("userInfo");
};

//  Get All Users
export const getAllUsers = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST });
    const { data } = await axios.get(`https://reqres.in/api/users?page=1`);

    dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
  } catch (error: any) {
    dispatch({ type: ALL_USERS_FAIL, payload: error.response.data.message });
  }
};


// getCurrentUser
export const getCurrentUser = () => {
  const userStr = localStorage.getItem("userInfo");
  if (userStr) return JSON.parse(userStr);

  return null;
};

// Update Profile
export const updateProfile = ( userData: any, id?: any) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.put(`https://reqres.in/api/users/${id}`, userData, config);

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
  } catch (error: any) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

  // CRUD AREA 
//  Update User 
export const updateUser = (id: any, userData: any) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({ type: UPDATE_USER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `https://reqres.in/api/users/${id}`,
      userData,
      config
    );

    dispatch({ type: UPDATE_USER_SUCCESS, payload: data.success });
  } catch (error: any) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete User
export const deleteUser = (id: any) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({ type: DELETE_USER_REQUEST });

    const { data } = await axios.delete(`https://reqres.in/api/users/${id}`);

    dispatch({ type: DELETE_USER_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch: Dispatch<any>) => {
  dispatch({ type: CLEAR_ERRORS });
};
