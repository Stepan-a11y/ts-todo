import React from "react";
import { useAction } from "../hooks/useAction";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { ModalProps } from "../types/todo";
import'./styles/ModalRemove.css';

const ModalRemove: React.FC<ModalProps> = (props) => {
    const { currentPopUpData } = useTypeSelector(store => store.todos);
    const { deleteTodo, openPop } = useAction();

    const deleteTask = () => {
      deleteTodo(currentPopUpData.id);
      props.setActive(false);
      openPop(null, "", null, null,  null, '', false);
    };

    return (
        <div className={props.active ? "modal active" : "modal"}>
          <div className={props.active ? "modalContent active" : "modalContent"}>
            <button className="closeBut" onClick={() => props.setActive(false)}>X</button>
            <h1>Вы действительно хотите удалить задачу?</h1>
            <div className="data">
            <h3>Название задачи:</h3> <p>{currentPopUpData.title}</p>
            <h3>Дата создания задачи:</h3><p>{currentPopUpData.date}</p>
            </div>
            <div className="butsBlock">
            <input className="buts" type="button" value="Отмена" onClick={() => props.setActive(false)}/>
            <input className="buts" type="button" value="Да, удалить" onClick={() => deleteTask()}/>
            </div>
          </div>
        </div>
      );
}

export default ModalRemove;