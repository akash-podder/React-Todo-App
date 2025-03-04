export default function ListTodosComponent(){
    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const todosList = [
                    {id: 1, description: 'Learn AWS', isDone: false, targetDate: targetDate},
                    {id: 2, description: 'Learn Full Stack Dev', isDone: false, targetDate: targetDate},
                    {id: 3, description: 'Learn DevOps', isDone: false, targetDate: targetDate},
                ]

    return (
      <div className="container">
        <h1>Things You Want to Do!</h1>
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Description</td>
                        <td>is Done?</td>
                        <td>Target Date</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        todosList.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.isDone.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
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