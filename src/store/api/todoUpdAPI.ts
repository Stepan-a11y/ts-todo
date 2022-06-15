export const todoUpd = async (id: any, title: string, starred: boolean | null, done: boolean | null, editMode: boolean | null, date: string) => {
   const res = await fetch('https://todo-server-react.herokuapp.com/api/updtodo', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ id: id, title: title, starred: starred, done: done, editMode: editMode, date: date })
    })
    return await res.json()
}