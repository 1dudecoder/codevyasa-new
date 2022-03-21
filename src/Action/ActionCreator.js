import { ActionTypes } from "./ActionsTypes";

export const example = (data) => {
    return {
        type: ActionTypes.ABC_EXAMPLE,
        payload: data
    }
}