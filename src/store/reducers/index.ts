import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";

export const reducers = combineReducers({
    todos: todoReducer
});

export type RootState = ReturnType<typeof reducers>;