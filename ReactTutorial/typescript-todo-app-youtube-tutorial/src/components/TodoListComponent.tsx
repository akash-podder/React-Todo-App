import React from 'react'
import { Todo } from '../models/model';
import SingleTodoComponent from './SingleTodoComponent';

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoListComponent: React.FC<Props> = ({ todoList, setTodoList }) => {
  return (
    <div className="todos">
      {todoList.map((todoItem) => (
        <SingleTodoComponent
          key={todoItem.id}
          currentTodo={todoItem}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  )
}

export default TodoListComponent;