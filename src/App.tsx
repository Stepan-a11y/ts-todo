import React, { useState } from 'react';
import Todos from './components/Todos';
import'./components/styles/App.css';
import AddTask from './components/AddTask';
import PopUp from './components/PopUp';
import ModalRemove from './components/ModalRemove';

const App = () => {
  const [active, setActive] = useState(false)
  return (
    <div className='wrap'>
      <AddTask />
      <Todos />
      <PopUp active={active} setActive={setActive}/>
      <ModalRemove active={active} setActive={setActive}/>
    </div>
  );
}

export default App;
