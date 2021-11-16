import * as type from '../types';

export const addSubmit = (num) => {
    return {
        type: type.ADD_COUNT,
        payload: num,
    }
};

export const reduceSubmit = () => {
    return {
        type: type.REDUCE_COUNT,
    };
};

export const addTodo = (data) => (dispatch) => {
    try{
        dispatch({
            type: type.ADD_TODO,
        });
        setTimeout(() => {
            dispatch({
                type: type.ADD_TODO_SUCCESS,
                payload: data,
            })
        }, 3000);
    }
    catch(error) {
        dispatch({
            type: type.ADD_TODO_FAIL,
            error: error
        });
    }

    // return {
    //     type: type.ADD_TODO,
    //     payload: data,
    // }
}

export const removeTodo = (data) => (dispatch) => {
    try{
        dispatch({
            type: type.REMOVE_TODO,
        });
        setTimeout(() => {
            dispatch({
                type: type.REMOVE_TODO_SUCCESS,
                payload: data,
            })
        }, 3000);
    }
    catch(error) {
        dispatch({
            type: type.REMOVE_TODO_FAIL,
            error: error,
        });
    }
}

export const addUser = (data) => (dispatch) => {
    try{
        dispatch({
            type: type.ADD_USER,
        });
        setTimeout(() => {
            dispatch({
                type: type.ADD_USER_SUCCESS,
                payload: data,
            })
        }, 3000);
    }
    catch(error) {
        dispatch({
            type: type.ADD_USER_FAIL,
            error: error
        });
    }
}

export const checkUser = (data) => (dispatch) => {
    try{
        dispatch({
            type: type.CHECK_USER,
        });
        setTimeout(() => {
            dispatch({
                type: type.CHECK_USER_SUCCESS,
                payload: data,
            })
        }, 3000);
    }
    catch(error) {
        dispatch({
            type: type.CHECK_USER_FAIL,
            error: error
        });
    }
}
