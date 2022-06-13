import React from "react";
import { useAction } from "../hooks/useAction";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { ModalProps } from "../types/todo";
import './styles/PopUp.css';

const PopUp: React.FC<ModalProps> = (props) => {
    const { modalActive } = useTypeSelector(store => store.todos.currentPopUpData);
    const currentTodo = useTypeSelector(store => store.todos.currentPopUpData);
    const { openPop, updStarred } = useAction();

    const close = () => {
        openPop(null, "", null, null, null, '', false);
    };


    return (
        <div className={modalActive ? "dropdown active" : "dropdown"} onClick={() => close()}>
            <div className="menu" onClick={(e) => e.stopPropagation()}>
                <input className="butt" type="button"
                    onClick={() => { updStarred(currentTodo.id, currentTodo.title, !currentTodo.starred, currentTodo.done, currentTodo.editMode, currentTodo.date); close() }}
                    value={(currentTodo.starred) ? "Убрать из избранного" : "В избранное"} />
                <input className="butt" type="button"
                    onClick={() => { updStarred(currentTodo.id, currentTodo.title, currentTodo.starred, !currentTodo.done, currentTodo.editMode, currentTodo.date); close() }}
                    value={(currentTodo.done) ? "Вернуть в работу" : "Выполнено"} />
                <input className="butt" type="button" value="Редактировать" onClick={() => { updStarred(currentTodo.id, currentTodo.title, currentTodo.starred, currentTodo.done, !currentTodo.editMode, currentTodo.date); close() }} />
                <input className="butt" type="button" value="Удалить" onClick={() => props.setActive(true)} />
            </div>
        </div>
    )
}

export default PopUp;