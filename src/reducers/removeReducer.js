import * as type from '../types';

const defaultState = {
    isLoading: false,
    data: [],
    error: null,
}

const removeReducer = (state, action) => {
    switch(action.type) {
        case type.REMOVE_TODO:
            // console.log([...state.data]);
            return {
                isLoading: true,
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

export default removeReducer;