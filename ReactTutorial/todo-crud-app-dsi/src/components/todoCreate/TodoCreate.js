import "./TodoCreate.css"

import {ACTIONS} from "../../data/actions";
import React, {useContext, useRef, useState} from "react";
import {TodoContext} from "../../contexts/TodoContextProvider";
import useClickedOutside from "../../hooks/useClickedOutside";

function TodoCreate({ type, passedTodo, closeModal }){
    const backgroundArea = useRef();
    const updateModal = useClickedOutside(closeModal, backgroundArea)

    const [todos, dispatch] = useContext(TodoContext)
    const [todo, setTodo] = useState((passedTodo && type === ACTIONS.UPDATE_TODO) ? {
        id: passedTodo.id,                  // Reassigning todos values
        name: passedTodo.name,              // if it is an update operation
        email: passedTodo.email,
        desc: passedTodo.desc,
    } : {
        //id: null,
        name: "",
        email: "",
        desc: "",
    });

    const changeField = e => {
        setTodo({...todo,[e.target.name]:e.target.value})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        if(todo.name === ""){
            alert("Name cannot be empty.");
            return false
        }
        if(todo.email === ""){
            alert("Email cannot be empty.");
            return false
        }
        if(todo.desc === ""){
            alert("Description cannot be empty.");
            return false
        }


        if(!passedTodo && !todo.id && type === ACTIONS.CREATE_TODO){
            dispatch({
                type: ACTIONS.CREATE_TODO,
                todo:{...todo, id:(todos.length+1)},
            });
            setTodo({
                //id: null,
                name: "",
                email: "",
                desc: "",
            })
        } else if(type === ACTIONS.UPDATE_TODO){
            dispatch({
                type: ACTIONS.UPDATE_TODO,
                todo:{...todo},
            });
            closeModal();
        }
    }

    if (type === ACTIONS.CREATE_TODO){
        return (
            <div className={"container blue-shadow-lg"}>
                <h1 className={"title"}>Create Your Todos List</h1>
                <form className={"form-container"} onSubmit={handleFormSubmit}>
                    <input name={"name"} className={"input-field gray-shadow-md"} type={"text"} value={todo.name} onChange={changeField} placeholder={"Name"}/>
                    <input name={"email"} className={"input-field gray-shadow-md"} type={"email"} value={todo.email} onChange={changeField} placeholder={"Email"}/>
                    <textarea name={"desc"} className={"input-field gray-shadow-md height-150"} value={todo.desc} onChange={changeField} placeholder={"Todo Description"}/>
                    <button className={"btn btn-blue"} type={"submit"}>Create a Todo</button>
                </form>
            </div>
        )
    } else if(type === ACTIONS.UPDATE_TODO){
        return (
            <div ref={backgroundArea} className={"modal-container"}>
                <div ref={updateModal} className={"modal-content blue-shadow-lg"}>
                    <div className={"height-50"}><span className={"cross"} onClick={closeModal}>+</span></div>
                    <h1>Update Your Todo</h1>
                    <form className={"form-container"} onSubmit={handleFormSubmit}>
                        <input name={"name"} className={"input-field gray-shadow-md"} type={"text"} value={todo.name} onChange={changeField} placeholder={"Name"}/>
                        <input name={"email"} className={"input-field gray-shadow-md"} type={"email"} value={todo.email} onChange={changeField} placeholder={"Email"}/>
                        <textarea name={"desc"} className={"input-field gray-shadow-md height-150"} value={todo.desc} onChange={changeField} placeholder={"Todo Description"}/>
                        <div className={"flex flex-row flex-wrap"}>
                            <button className={"btn btn-blue"} type={"submit"}>Update The Todo</button>
                            <button className={"btn btn-gray"} onClick={closeModal}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
    return (
        <React.Fragment></React.Fragment>
    )
}

export default TodoCreate