import React, { useEffect, useState, useRef } from 'react'
import { Todo } from '../models/model';

import "./styles.css";

interface Props{
  currentTodo: Todo;
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodoComponent:React.FC<Props> = ({currentTodo, todoList, setTodoList}) => {
    const [canEdit, setCanEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(currentTodo.todo);
    
    // as soon as we Click EDIT, then the Cursor should go to "edit" text
    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        inputRef.current?.focus();
    }, [canEdit]);


    // Done Functionality
    const handleDone = (id: number) => {
        setTodoList(
            todoList.map((todo)=> {
                if (todo.id === id) {
                    // Return a new object with toggled isDone
                    return {
                        ...todo,
                        isDone: !currentTodo.isDone,
                    };
                }
                else {
                    // Return the unchanged todo
                    return todo;
                }
            })
        )
    }

    // Edit Functionality
    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodoList(
            todoList.map((todo)=> {
                if (todo.id === id) {
                    // Return a new object with toggled isDone
                    return {
                        ...todo,
                        todo: editTodo,
                    };
                }
                else {
                    // Return the unchanged todo
                    return todo;
                }
            })
        );
        
        setCanEdit(false);
    }

    // Delete Functionality
    const handleDelete = (id: number) => {
        setTodoList(
            // just Filtering out the "todo" with "id"
            // that means EXCEPT for this Particular "id" all the other items will be returned
            todoList.filter((todo)=> todo.id !== id)
        )
    }

    return (
    <div>
        {/* After Hitting Enter "onSubmit" will Trigger "handleEdit" function */}
      <form className="todos__single" onSubmit={(e) => handleEdit(e, currentTodo.id)}>
        {/* <s> Tag is to strike down "Todo" Item */}
        {
            canEdit?
            (
                <input
                    ref={inputRef} // referencing input TODO
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                    className="todos__single--text"
                />
            )
            : currentTodo.isDone? 
            (
                <s className="todos__single--text">{currentTodo.todo}</s>
            ) : (
                <span className="todos__single--text">{currentTodo.todo}</span>
            )
        }
        <div>
            <span className="icon" role="img" aria-label="edit"
                onClick={() => {
                    // if "todo" is NOT Done Only then we can Edit
                    if(!canEdit && !currentTodo.isDone){
                        setCanEdit(!canEdit)
                    }
                }}>
                ✏️
            </span>
            
            <span className="icon" role="img" aria-label="delete"
                onClick={() => handleDelete(currentTodo.id)}>
                🗑️
            </span>
            
            <span className="icon" role="img" aria-label="done"
                onClick={() => handleDone(currentTodo.id)}>
                ✅
            </span>
        </div>

      </form>
    </div>
  )
}

export default SingleTodoComponent;