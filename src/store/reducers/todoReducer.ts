import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo"

const initialState: TodoState = {
    todos: [],
    currentPopUpData: { id: null, title: "", starred: null, done: null, editMode: null, date: "", modalActive: false },
    loading: false,
    error: null,
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODOS:
            return { ...state, loading: true };
        case TodoActionTypes.SET_TODOS:
            return { ...state, loading: false, todos: action.payload };
        case TodoActionTypes.ADD_NEW_TODO:
            return { ...state, loading: false, todos: [...state.todos, action.payload] };
        case TodoActionTypes.UPD_TODO:
            return {
                ...state, loading: false, todos: state.todos.map(elem => {
                    if (elem._id === action.payload._id) {
                        return action.payload;
                    } else {
                        return elem;
                    }
                })
            };
        case TodoActionTypes.SET_TODOS_ERROR:
            return { ...state, loading: false, error: action.payload, todos: [] };
        case TodoActionTypes.OPEN_POPUP:
            return { ...state, currentPopUpData: action.payload };
        case TodoActionTypes.SORT_BY_DONE:
            return { ...state, loading: false, todos: action.payload };
        case TodoActionTypes.SORT_BY_NOT_DONE:
            return { ...state, loading: false, todos: action.payload };
        case TodoActionTypes.SORT_BY_STARRED:
            return { ...state, loading: false, todos: action.payload };
        case TodoActionTypes.DELETE_TODO:
            const newTodos = state.todos.filter(item => item._id !== action.payload.id);
            return { ...state, loading: false, todos: newTodos };
        default: return state;
    }
}