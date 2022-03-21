import {combineReducers} from "redux"
import { ExampleReducer } from "./AppReducer"

export const rootReducer = combineReducers({
    myAppData: ExampleReducer,
})