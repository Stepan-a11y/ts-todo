export const newTodo = async (title: string, starred: boolean, done: boolean, editMode: boolean, date: string) => {
    const res = await fetch('https://todo-server-react.herokuapp.com/api/newtodo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ title: title, starred: starred, done: done, editMode: editMode, date: date })
    })
    return await res.json()
}