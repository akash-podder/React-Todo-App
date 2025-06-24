import "./TodoCard.css"

import {ACTIONS} from "../../data/actions";
import { useState, useContext } from "react";
import {ReactComponent as EditIcon} from "../../icons/edit-solid.svg";
import {ReactComponent as DeleteIcon} from "../../icons/trash-alt-solid.svg";
import TodoCreate from "../todoCreate/TodoCreate";
import {TodoContext} from "../../contexts/TodoContextProvider";

function TodoCard(todo){
    // eslint-disable-next-line
    const [todos, dispatch] = useContext(TodoContext)
    const [showModal, setShowModal] = useState(false)

    const closeModal = () => setShowModal(false)
    const openModal = () => setShowModal(true)

    const handleDelete = () => {
        if(window.confirm("Are you sure you want to delete this todo?")) {
            dispatch({
                type: ACTIONS.DELETE_TODO,
                todo:{...todo},
            });
        }
    }

    return(
        <div className={"card gray-shadow-md"}>
            <div className={"todo-info"}>
                <h4>ID: {todo.id}</h4>
                <h1>Name: {todo.name}</h1>
                <h4 className={"overflow-break-word"}>Email: {todo.email}</h4>
                <p><b>Description:</b> {todo.desc}</p>
            </div>
            <div className={"edit-delete"}>
                <button className={"icon"} onClick={openModal}><EditIcon/></button>
                {
                    showModal && <TodoCreate {...{type:ACTIONS.UPDATE_TODO, passedTodo:todo, closeModal:closeModal}}/>
                }
                <button className={"icon"} onClick={handleDelete}><DeleteIcon/></button>
            </div>
        </div>
    )
}

export default TodoCard