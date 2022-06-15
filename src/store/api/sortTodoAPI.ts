export const sortDone = async (done: boolean) => {
    const res = await fetch(`https://todo-server-react.herokuapp.com/api/sort/${done}`)
    return await res.json()
}


export const sortStar = async (done: boolean, starred: boolean) => {
    const res = await fetch(`https://todo-server-react.herokuapp.com/api/sortstar/${done}&${starred}`)
    return await res.json()
}