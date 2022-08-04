import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "../constants/userConstants";

import axios from "axios";
import { Dispatch } from "redux";

import { Alert } from "react-bootstrap";

export const getAllUsers =
  () => async (dispatch: Dispatch<any> ) => {
    dispatch({
      type: "LOADING",
      payload: true,
    });

    try {
      const response = await axios.get("https://reqres.in/api/users?page=2");
      dispatch({
        type: "GET_ALL_USERS",
        payload: response.data,
      });
      dispatch({
        type: "LOADING",
        payload: false,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "LOADING",
        payload: false,
      });
    }
  };

export const register =( first_name: string, last_name: string, email: string, password: string ) =>
  async (dispatch: Dispatch<any> )=> {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "https://reqres.in/api/register", { first_name, last_name, email, password }, config
      );

      dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
      <Alert variant="success">
        <Alert.Heading>Registration successfull</Alert.Heading>
      </Alert>;

      setTimeout(() => {
        window.location.href = "/login";
      }, 200);

      dispatch({ type: LOGIN_SUCCESS, payload: data });

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
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data });
    <Alert variant="success">
      <Alert.Heading>Login successfull</Alert.Heading>
    </Alert>;
    // message.success('Login success');

    localStorage.setItem("userInfo", JSON.stringify(data));

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

export const logout = () => async (dispatch: Dispatch<any> ) => {
  // message.success('Successfully Logged you out');
  <Alert variant="success">
    <Alert.Heading>Successfully Logged you out</Alert.Heading>
  </Alert>;

  dispatch({ type: LOGOUT_SUCCESS });
  localStorage.removeItem("userInfo");
};
