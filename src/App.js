import './App.css';
import {Component} from 'react' // Name Export

import ThirdComponent from './components/learning-examples/ThirdComponent' // Default Export

import FourthComponent from './components/learning-examples/FourthComponent'

import CounterParentComponent from './components/counter/CounterParentComponent'

import TodoApp from './components/todo/TodoApp';

function App() {
  return (
    <div className="App">
      {/* <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <FourthComponent></FourthComponent> */}
      
      {/* <CounterParentComponent></CounterParentComponent> */}
      <TodoApp></TodoApp>
    </div>
  );
}

//---Function Component---
function FirstComponent(){
  return (
    <div className="FirstComponent">
      FirstComponent --- Function Component
    </div>
  )
}


//---Class Component---
class SecondComponent extends Component{
  render(){
    return (
      <div className="SecondComponent">
        SecondComponent --- Class Component
      </div>
    )
  }
}

export default App;