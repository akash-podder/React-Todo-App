import React, { useRef } from 'react';
import './styles.css'

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void; // Defining a Function Type
}

// Alternate way
// const InputField = ({todo, setTodo, handleAdd}: Props) => {

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  //   whenever we have to Manipulate Virtual-DOM Element just like we do with JS by doing:
  // document.getElementById(...)
  // eirokom usecase huile amra “useRef()” diye agge oi Element ke Point kori
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input" onSubmit={ (e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }
      }
      >
      <input type="input"
      value={todo}
      onChange={
        (e) => setTodo(e.target.value)
      }
      placeholder="Enter a task" className="input__box" />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  )
}

export default InputField;