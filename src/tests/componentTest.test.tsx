import { render } from "@testing-library/react";
import AddTask from "../components/AddTask";
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';

let state: any;
const mockStore = configureStore();
let store;

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
        currentPopUpData: { _id: 0, title: "jdgrdjgdjg", starred: null, done: null, editMode: null, date: "", modalActive: false }
    };
});

test('Снапшот кнопки в компоненте AddTask', () => {
        store = mockStore(state);
        const { getByRole } = render(
            <Provider store={store}>
                <AddTask />
            </Provider>
        );

        expect(getByRole('button')).toMatchSnapshot();
});


