import React, { useEffect, useState } from 'react';
import { useAction } from '../hooks/useAction';
import { useTypeSelector } from '../hooks/useTypeSelector';
import star from "../icons/starred.png";
import "./styles/Todos.css";
import menu from "../icons/menu.png";
import TitleInput from './inputs/TitleInput';

const Todos: React.FC = () => {
  const { todos, loading } = useTypeSelector(store => store.todos);
  const { fetchTodos, updStarred, openPop, sortByDone, sortByNotDone, sortByStarred } = useAction();
  const [notDone, setNotDone] = useState("Все задачи");

  useEffect(() => {
    fetchTodos()
  }, []);

  if (loading) {
    return <h2>Загрузочка...</h2>
  };

  const updStar = (id: any, title: string, star: boolean, done: boolean, editMode: boolean, date: string) => {
    updStarred(id, title, star, done, editMode, date);
  };

  return (
    <div className='container'>
      <select value={notDone} className='select'>
        <option value="Все задачи" onClick={() => { fetchTodos(); setNotDone("Все задачи") }}>Все задачи</option>
        <option value="Выполненые" onClick={() => { sortByDone(true); setNotDone("Выполненые") }}>Выполненые</option>
        <option value="В работе" onClick={() => { sortByNotDone(false); setNotDone("В работе") }}>В работе</option>
        <option value="В избранном" onClick={() => { sortByStarred(true, true); setNotDone("В избранном") }}>В избранном</option>
      </select>
      {(todos.length === 0) ? <h1>Список задач пуст</h1> :
        todos.map((i, index) =>
          <div className='wrapBlock' key={i._id}>
            <div className="titleBlock" >
              {(!i.editMode) ? <p className={(i.done) ? "titleDone" : "titleWork"}>{i.title}</p> :
                <TitleInput id={i._id} value={i.title} star={i.starred} done={i.done} date={i.date} />}
            </div>
            <div className="starredBlock" key={i.id}>
              {(i.starred) && <img src={star} onClick={() => updStar(i._id, i.title, !i.starred, i.done, i.editMode, i.date)} height="40" width="40" alt="" />}
            </div>
            <div className="menuBlock" key={i.id}>
              <img src={menu} height="40" width="40" alt="" onClick={() => { openPop(i._id, i.title, i.starred, i.done, i.editMode, i.date, true) }} />
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Todos;