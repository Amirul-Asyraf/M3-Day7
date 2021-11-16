import { configureStore } from '@reduxjs/toolkit';
import countReducer from "../reducers/countReducer";
import removeReducer from '../reducers/removeReducer';
import todoReducer from "../reducers/todoReducer";
import userRemover from "../reducers/userReducer";

export default configureStore({
    reducer: {
        count: countReducer,
        todo: todoReducer,
        remove: removeReducer,
        user: userRemover,
    },
})