import { todoReducer } from "../store/reducers/todoReducer";
import { TodoState, TodoActionTypes } from "../types/todo"

let state: TodoState;

beforeEach(()=> {
    state = {
        todos: [{
            _id: 0, title: "Some text", starred: false, done: false, editMode: null, date: "16-02-2334"
        },
        {
            _id: 1, title: "Some text 1", starred: true, done: true, editMode: null, date: "18-02-2334"
        },
        {
            _id: 2, title: "Some text 2", starred: false, done: false, editMode: null, date: "22-02-2334"
        }],
        currentPopUpData: { id: null, title: "", starred: null, done: null, editMode: null, date: "", modalActive: false },
        loading: false,
        error: null,
    };
});

test("Добавление в избранные", () => {  

    const newState = todoReducer(state, {type: TodoActionTypes.UPD_TODO, payload:{_id: 0, title: "Some text", starred: true, done: false, editMode: null, date: "16-02-2334"}})

    expect(newState.todos[0].starred).toBeTruthy()
});

test("Смена названия задачи", () => {  

    const newState = todoReducer(state, {type: TodoActionTypes.UPD_TODO, payload:{_id: 1, title: "Another text", starred: true, done: false, editMode: false, date: "16-02-2334"}})

    expect(newState.todos[1].editMode).toBeFalsy()
    expect(newState.todos[1].title).toMatch(/Another text/i)
});


test("Фильтр по не выполненным", () => {  

    const newState = todoReducer(state, {type: TodoActionTypes.SORT_BY_NOT_DONE, payload:
        [
            {id: 0, title: "Some text", starred: false, done: false, editMode: null, date: "16-02-2334"},
            {id: 1, title: "Some text 1", starred: true, done: false, editMode: null, date: "18-02-2334"}
        ]})

    expect(newState.todos[0].done).toBeFalsy()
    expect(newState.todos[1].done).toBeFalsy()
});


test("Удаление задачи", () => {  

    const newState = todoReducer(state, {type: TodoActionTypes.DELETE_TODO, payload: {id: 2}})

    expect(newState.todos[2]).toBeUndefined()
});