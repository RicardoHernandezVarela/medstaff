import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import signInReducer from './signInReducer';

export default combineReducers ({
    usersReducer,
    signInReducer
});