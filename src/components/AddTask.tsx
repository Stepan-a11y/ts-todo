import React, { useState } from 'react';
import { useAction } from '../hooks/useAction';
import './styles/AddTask.css';

const AddTask: React.FC = () => {
  const { addNewTodo } = useAction();

  const [title, setTitle] = useState('');
  const [errorCount, setErrorCount] = useState(1);

  const addNewTask = () => {
    addNewTodo(title, false, false, false, new Date().toLocaleString());
    setTitle('');
  };

  const text = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setErrorCount(-160 + e.target.value.length);
  };

  return (
    <>
      <div className='cont'>
        <input className='inp' type="text" value={title} onChange={(e) => text(e)} />
        <input className='but' disabled={title.length < 1} type="button" value="Добавить" onClick={addNewTask} />
      </div>
      {(title.length > 160) && <p className='err' style={{ color: "red" }}>Превышен лимит символов на {errorCount}</p>}
    </>
  );
}

export default AddTask;
