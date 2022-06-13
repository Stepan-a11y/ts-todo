export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    currentPopUpData: CurrentPopUpData;

}

interface CurrentPopUpData {
    id: any;
    title: string;
    starred: boolean | null;
    done: boolean | null;
    editMode: boolean | null;
    date: string;
    modalActive: boolean;
}

export enum TodoActionTypes {
    FETCH_TODOS = "FETCH_TODOS",
    ADD_NEW_TODO = "ADD_NEW_TODO",
    UPD_TODO = "UPD_TODO",
    SET_TODOS = "SET_TODOS",
    SET_TODOS_ERROR = "SET_TODOS_ERROR",
    OPEN_POPUP = "OPEN_POPUP",
    SORT_BY_DONE = "SORT_BY_DONE",
    SORT_BY_NOT_DONE = "SORT_BY_NOT_DONE",
    SORT_BY_STARRED = "SORT_BY_STARRED",
    DELETE_TODO = "DELETE_TODO"
}

interface FetchTodosAction {
    type: TodoActionTypes.FETCH_TODOS;
}

interface AddNewTodoAction {
    type: TodoActionTypes.ADD_NEW_TODO;
    payload: any[];
}

interface UpdTodoAction {
    type: TodoActionTypes.UPD_TODO;
    payload: any;
}

interface SetTodosAction {
    type: TodoActionTypes.SET_TODOS;
    payload: any[];
}

interface OpenPopUpAction {
    type: TodoActionTypes.OPEN_POPUP;
    payload: any;
}

interface SetTodosErrorAction {
    type: TodoActionTypes.SET_TODOS_ERROR;
    payload: string;
}


interface SortByDoneAction {
    type: TodoActionTypes.SORT_BY_DONE;
    payload: any[];
}

interface SortByNotDoneAction {
    type: TodoActionTypes.SORT_BY_NOT_DONE;
    payload: any[];
}

interface SortByStarredAction {
    type: TodoActionTypes.SORT_BY_STARRED;
    payload: any[];
}

interface DeleteTodoAction {
    type: TodoActionTypes.DELETE_TODO;
    payload: any;
}

export type InputProps = {
    id: any,
    value: string
    star: boolean,
    done: boolean,
    date: string
}

export type ModalProps = {
    active: boolean,
    setActive: any
}


export type TodoAction =
    FetchTodosAction |
    SetTodosAction |
    SetTodosErrorAction |
    AddNewTodoAction |
    UpdTodoAction |
    OpenPopUpAction |
    SortByDoneAction |
    SortByNotDoneAction |
    SortByStarredAction |
    DeleteTodoAction;