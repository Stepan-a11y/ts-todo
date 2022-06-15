import { deleteTodo, updStarred } from "../store/actions/todoActions";
import { todoUpd } from "../store/api/todoUpdAPI";
import { delTodo } from "../store/api/deleteTodo";
jest.mock("../store/api/todoUpdAPI")
jest.mock("../store/api/deleteTodo")

const updMock = todoUpd;
const delMock = delTodo;

const responseUpd = {
    success: true
}

const responseDel = {
    success: true
}

//@ts-ignore
updMock.mockReturnValue(responseUpd)
//@ts-ignore
delMock.mockReturnValue(responseDel)


test("Тест экшена обновления", async() => {
     const thunk = updStarred(0, "Some text", false, false, null, "16-02-2334");
     const dispatchMock = jest.fn();

     await thunk(dispatchMock)

     expect(dispatchMock).toBeCalledTimes(2)
})

test("Тест экшена удаления", async() => {
    const thunk = deleteTodo(1)
    const dispatchMock = jest.fn();

    await thunk(dispatchMock)

    expect(dispatchMock).toBeCalledTimes(2)
})