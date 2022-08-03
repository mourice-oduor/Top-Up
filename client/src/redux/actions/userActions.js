import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS
} from '../constants/userConstants';
import axios from 'axios';
import {message} from 'antd';

export const getAllUsers = () => async (dispatch) => {

    dispatch({
        type: 'LOADING',
        payload:true
    });

    try {
        const response = await axios.get('/api/users/getallusers');
        dispatch({
            type: 'GET_ALL_USERS',
            payload:response.data
        });
        dispatch({
            type: 'LOADING',
            payload: false
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: 'LOADING',
            payload: false
        });
    }

};

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });

        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        };

        const { data } = await axios.post('/api/users/register',{ name, email, password }, config);

        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        message.success('Registration successfull');

        setTimeout(() => {
            window.location.href='/login';
        }, 200);

        // dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem('user', JSON.stringify(data));
    }
    catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });

        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        };

        const { data } = await axios.post('/api/users/login', { email, password }, config );

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        message.success('Login success');
        localStorage.setItem('user', JSON.stringify(data));
        const user = await JSON.parse(localStorage.getItem('user'));

        setTimeout(() => {
            if(!user.isAdmin) {
                window.location.href='/home';
            }
            else {
                window.location.href='/admin';
            }
        }, 2000);
    }
    catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const logout = () => async (dispatch) => {
    message.success('Successfully Logged you out');
    dispatch({ type: USER_LOGOUT });
    localStorage.removeItem('user');
};

export const deleteUser = (userid)=> async(dispatch) =>{
    dispatch({
        type: 'LOADING',
        payload:true
    });

    try {
        await axios.post('/api/users/deleteuser', {userid});

        dispatch({
            type: 'LOADING',
            payload: false
        });
        alert('User deleted successfully');
        window.location.reload();
    }
    catch (error) {
        alert('Something went wrong');
        console.log(error);
        dispatch({
            type: 'LOADING',
            payload: false
        });
    }

};

