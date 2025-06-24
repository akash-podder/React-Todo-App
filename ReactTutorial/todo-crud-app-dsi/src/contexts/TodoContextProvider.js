import React, { useReducer } from "react";
import TodoReducer from "./TodoReducer";

export const TodoContext = React.createContext()

function TodoContextProvider({ children }){
    const [todos, dispatch] = useReducer(TodoReducer, [])

    return (
        <TodoContext.Provider value={[todos, dispatch]}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider