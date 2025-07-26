import React, { useState } from 'react';
import './App.css';
import { Todo } from './models/model';

import InputField from './components/InputField'
import TodoListComponent from './components/TodoListComponent';
import Navbar from './useContext-tutorial/Navbar';

// here, React.FC means, FC = Functional Component
const App: React.FC = () => {

  const [todo, setTodo] =useState<string>("");

  // { id: number; todo: string; isDone: boolean; }
  const [todoList, setTodoList] =useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodoList([...todoList, {id: Date.now(), todo: todo, isDone: false}])
      setTodo(""); // Empyting the CURRENT "todo", so that the "input" Field gets Cleared
    }
  }

  console.log(todoList);

  return (
    <div className="App">
      {/* <h1>{todo}</h1> */}
      <span className="heading">Taskify</span>
      <Navbar/>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}></InputField>
      <TodoListComponent todoList={todoList} setTodoList={setTodoList}></TodoListComponent>
    </div>
  );
}

export default App;
