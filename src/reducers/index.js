import { combineReducers } from 'redux';

import countReducer from './countReducer';
import removeReducer from './removeReducer';
import todoReducer from './todoReducer';
import userReducer from './userReducer';

export default combineReducers({
    count: countReducer,
    todo: todoReducer,
    remove: removeReducer,
    user: userReducer,
})