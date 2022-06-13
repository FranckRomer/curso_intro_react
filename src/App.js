import React from "react";
import { TodoCounter } from "./modules/TodoCounter";
import { TodoList} from "./modules/TodoList"
import { TodoItem} from "./modules/TodoItem"
import { CreateTodoButton} from "./modules/CreateTodoButton"
import {TodoSearch} from "./modules/TodoSearch";
import './index.css';


const todos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'jugar valorant', completed: false},
  {text: 'acabar trabajo', completed: false},
  {text: 'ir por helado', completed: false}
];


function App() {
  return (
    <>
    <h1>TODO MACHING</h1>

      <TodoCounter />
      
      <header >
        <TodoSearch/> 
        <CreateTodoButton/>
      </header>
      
      <main>
        <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text='jsjsjsjs' />
        ))}
      </TodoList>
      </main>
      
      
      

    </>
  );
}

export default App;
