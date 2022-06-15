export const delTodo = async (id: any) => {
    const res = await fetch(`https://todo-server-react.herokuapp.com/api/deltodo/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
    return await res.json()
}