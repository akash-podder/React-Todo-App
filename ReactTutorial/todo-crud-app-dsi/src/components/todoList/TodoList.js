import React, {useContext} from "react";
import {TodoContext} from "../../contexts/TodoContextProvider";
import TodoCard from "../card/TodoCard";

function TodoList(){
    const [todos] = useContext(TodoContext)

    if(todos.length !== 0){
        return (
            <div className={"container blue-shadow-lg"}>
                <h1 className={"title"}>Todos</h1>
                <ul>
                    {
                        todos.map((todo,index)=><li key={todo.name+todo.email+index}>
                            <TodoCard {...todo}/>
                        </li>)
                    }
                </ul>
            </div>
        )
    }
    return (
        <React.Fragment></React.Fragment>
    )
}

export default TodoList