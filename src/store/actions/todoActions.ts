import { Dispatch } from "react";
import { TodoAction, TodoActionTypes } from "../../types/todo";
import { delTodo } from "../api/deleteTodo";
import { getTodo } from "../api/getTodoAPI";
import { newTodo } from "../api/newTodoAPI";
import { sortDone, sortStar } from "../api/sortTodoAPI";
import { todoUpd } from "../api/todoUpdAPI";

export const fetchTodos = () => async (dispatch: Dispatch<TodoAction>) => {
    try {
        dispatch({ type: TodoActionTypes.FETCH_TODOS });
        getTodo()
            .then(data => dispatch({ type: TodoActionTypes.SET_TODOS, payload: data }));
    } catch (error) {
        dispatch({ type: TodoActionTypes.SET_TODOS_ERROR, payload: 'Произошла ошибка!' });
    }
};

export const addNewTodo = (title: string, starred: boolean, done: boolean, editMode: boolean, date: string) => async (dispatch: Dispatch<TodoAction>) => {
    try {
        dispatch({ type: TodoActionTypes.FETCH_TODOS });
        newTodo(title, starred, done, editMode, date)
            .then(data => {
                dispatch({ type: TodoActionTypes.ADD_NEW_TODO, payload: data });
            });
    } catch (error) {
        dispatch({ type: TodoActionTypes.SET_TODOS_ERROR, payload: 'Произошла ошибка!' });
    }
};

export const updStarred = (id: any, title: string, starred: boolean | null, done: boolean | null, editMode: boolean | null, date: string) => async (dispatch: Dispatch<TodoAction>) => {
    try {
        dispatch({ type: TodoActionTypes.FETCH_TODOS });
        todoUpd(id, title, starred, done, editMode, date)
            .then(data => {
                if (data.success) {
                    dispatch({ type: TodoActionTypes.UPD_TODO, payload: { _id: id, title: title, starred: starred, done: done, editMode: editMode, date: date } });
                }
            });
    } catch (error) {
        dispatch({ type: TodoActionTypes.SET_TODOS_ERROR, payload: 'Произошла ошибка!' })
    }
};

export const openPop = (id: any, title: string, starred: boolean | null, done: boolean | null, editMode: boolean | null, date: string, modalActive: boolean) => async (dispatch: Dispatch<TodoAction>) => {
    try {
        dispatch({ type: TodoActionTypes.OPEN_POPUP, payload: { id: id, title: title, starred: starred, done: done, editMode: editMode, date: date, modalActive: modalActive } });
    } catch (error) {
        dispatch({ type: TodoActionTypes.SET_TODOS_ERROR, payload: 'Произошла ошибка!' });
    }
};

export const sortByDone = (done: boolean) => async (dispatch: Dispatch<TodoAction>) => {
    try {
        dispatch({ type: TodoActionTypes.FETCH_TODOS });
        sortDone(done)
            .then(data => dispatch({ type: TodoActionTypes.SORT_BY_DONE, payload: data }));
    } catch (error) {
        dispatch({ type: TodoActionTypes.SET_TODOS_ERROR, payload: 'Произошла ошибка!' });
    }
};

export const sortByNotDone = (done: boolean) => async (dispatch: Dispatch<TodoAction>) => {
    try {
        dispatch({ type: TodoActionTypes.FETCH_TODOS });
        sortDone(done)
            .then(data => dispatch({ type: TodoActionTypes.SORT_BY_NOT_DONE, payload: data }));
    } catch (error) {
        dispatch({ type: TodoActionTypes.SET_TODOS_ERROR, payload: 'Произошла ошибка!' });
    }
};

export const sortByStarred = (done: boolean, starred: boolean) => async (dispatch: Dispatch<TodoAction>) => {
    try {
        dispatch({ type: TodoActionTypes.FETCH_TODOS });
        sortStar(done, starred)
            .then(data => dispatch({ type: TodoActionTypes.SORT_BY_STARRED, payload: data }));
    } catch (error) {
        dispatch({ type: TodoActionTypes.SET_TODOS_ERROR, payload: 'Произошла ошибка!' });
    }
};

export const deleteTodo = (id: any) => async (dispatch: Dispatch<TodoAction>) => {
    try {
        dispatch({ type: TodoActionTypes.FETCH_TODOS });
        delTodo(id)
            .then(data => {
                if (data.success) {
                    dispatch({ type: TodoActionTypes.DELETE_TODO, payload: { id: id } });
                }
            })
    } catch (error) {
        dispatch({ type: TodoActionTypes.SET_TODOS_ERROR, payload: 'Произошла ошибка!' });
    }
};