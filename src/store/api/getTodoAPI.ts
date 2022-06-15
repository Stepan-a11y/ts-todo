export const getTodo = async () => {
    const res = await fetch("https://todo-server-react.herokuapp.com/api/gettodos")
    return await res.json()
}