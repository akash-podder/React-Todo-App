import { useState, useEffect } from 'react';
import { retrieveAllTodosForUsernameApiCall, deleteTodoApiCall } from "./api/TodoApiService";

export default function ListTodosComponent(){
    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    // const todosList = [
    //                 {id: 1, description: 'Learn AWS', done: false, targetDate: targetDate},
    //                 {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate: targetDate},
    //                 {id: 3, description: 'Learn DevOps', done: false, targetDate: targetDate},
    //             ]
    
    const [todosList, setTodos] = useState([])

    // useEffect ---> Tell REACT that your component needs to do something after Render
    useEffect (
        () => refreshTodos(), []
    )

    function refreshTodos() {
        retrieveAllTodosForUsernameApiCall('in28minutes')
            .then(response => {
                console.log(response.data)
                setTodos(response.data)
            })
            .catch(error => console.log(error))
    }

    const [message, setMessage] = useState(null)

    function deleteTodo(id) {
        console.log("Delete ID: " + id)
        deleteTodoApiCall('in28minutes', id)
            .then(
                () => {
                    setMessage(`Delete of todo with ID: ${id} successful`)
                    refreshTodos()
                }
            )
            .catch(error => console.log(error))
    }

    return (
      <div className="container">
        <h1>Things You Want to Do!</h1>
        
        { message && <div className="alert alert-warning">{message}</div> }
        
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Description</td>
                        <td>is Done?</td>
                        <td>Target Date</td>
                        <td>Delete</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        todosList.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    {/* <td>{todo.targetDate.toDateString()}</td> */}
                                    <td>{todo.targetDate.toString()}</td>
                                    
                                    <td><button className="btn-btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
      </div>
    )
}