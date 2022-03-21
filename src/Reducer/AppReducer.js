import {ActionTypes} from "../Action/ActionTypes"

const Initalstate = {
    Example : [],
}

export const ExampleReducer = (state = Initalstate, { type, payload }) => {
    
    switch (type) {
        case ActionTypes.ABC_EXAMPLE:
            return {...state, Example: payload};
    
        default:
            return state;
    }

}