import * as type from '../types';

const defaultState = {
    isLoading: false,
    data: [],
    error: null,
    active: false,
};

const userReducer = (state, action) => {
    switch(action.type) {
        case type.ADD_USER:
            console.log([...state.data]);
            return {
                isLoading: true,
                data: [...state.data],
                error: null,
                active: 0,
            };
        case type.ADD_USER_SUCCESS:
            return {
                isLoading: false,
                data: [...state.data, action.payload],
                error: null,
                active: 1,
            };
        case type.ADD_USER_FAIL:
            return {
                isLoading: false,
                data: [state.data],
                error: action.error,
                active: 0,
        };
        default:
            return defaultState;
    }
}

export default userReducer;