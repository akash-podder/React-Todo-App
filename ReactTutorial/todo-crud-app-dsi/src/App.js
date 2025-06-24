import './App.css';

import TodoContextProvider from "./contexts/TodoContextProvider";
import Main from "./components/main/Main";

function App() {
    return (
        <TodoContextProvider>
            <Main/>
        </TodoContextProvider>
    )
}

export default App;
