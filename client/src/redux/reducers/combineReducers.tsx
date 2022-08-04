import { combineReducers } from 'redux';
import { userReducer } from './userReducers';
import { alertsReducer } from './alertsReducer';

const reducers = combineReducers({
    user: userReducer,
    alerts: alertsReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
