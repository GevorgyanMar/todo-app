import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import "../todoLIst/todoList.css";
import {useState} from "react";
import Modal from '../../modal/modal';

const selectTodoById = (state, todoId) => {
    return state.todos.find((todo) => todo.id === todoId);
}


const TodoListItem = ({id}) => {
    const todo = useSelector((state) => selectTodoById(state, id))
    const {id: todoId, text, completed} = todo;
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    }
    const dispatch = useDispatch()

    const handleCompletedChanged = () => {
        dispatch({type: 'todos/todoToggled', payload: todo.id})
    }

    const onDelete = () => {
        dispatch({type: 'todos/todoDeleted', payload: todo.id})
    }

    return (
        <div className="view">
            <div className="segment label">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={completed}
                    onChange={handleCompletedChanged}
                />
            </div>
            <div>
                <span className="todo-text" onClick={openModal}>{text}</span>
                <Modal showModal={showModal} setShowModal={setShowModal} text={text} id={todoId}/>
            </div>
            <div className="segment buttons">
                <button className="destroy" onClick={onDelete}>delete</button>
            </div>
        </div>

    )
}

export default TodoListItem;
