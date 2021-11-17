import * as type from '../types';

const defaultState = () => 0;

const countReducer = (state, action) => {
    if(state === undefined) {
        return defaultState();
    }

    switch(action.type) {
        case type.ADD_COUNT:
            //you can do the action(logic) in action.payload
            return state += action.payload;
        case type.REDUCE_COUNT:
            //or you can do the action(logic) immediately from here
            return (state -= 1);
        default:
            return state;
    }
}

export default countReducer;