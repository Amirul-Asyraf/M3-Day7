import * as type from '../types';

const defaultState = {
    isLoading: false,
    data: [],
    error: null
};

const todoReducer = (state, action) => {
    switch(action.type) {
        case type.ADD_TODO:
            console.log([...state.data]);
            return {
                isLoading: true,
                data: [...state.data],
                error: null,
            }
            // return state = [...state, action.payload];
        case type.ADD_TODO_SUCCESS:
            return {
                isLoading: false,
                data: [...state.data, action.payload],
                error: null
            };
        case type.ADD_TODO_FAIL:
            return {
                isLoading: false,
                data: [...state.data],
                error: action.error
        };
        case type.REMOVE_TODO:
            // console.log([...state.data]);
            return {
                isLoading: false,
                data: [...state.data],
                error: null,
            };
        case type.REMOVE_TODO_SUCCESS:
            // const filterData = [...state.data.filter(
            //     data => data.key !== action.payload)];

            return {
                isLoading: false,
                data: state.data.filter(data => data.key !== action.payload),
                error: null,
            };
        case type.REMOVE_TODO_FAIL:
            return {
                isLoading: false,
                data: [...state.data],
                error: null,
            }
        default:
            return defaultState;
    }

}

export default todoReducer;