import React, { useState } from 'react';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';



/*import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton'; */
// import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];

function App() {
  
  const [ todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setsearchValue] = React.useState('')
  // Cantidad de TODOs completados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  // Cantidad total de TODOs
  const totalTodos = todos.length;

  let searchTodos = [];

  if(!searchValue.length >= 1){
    searchTodos = todos;
  } else {
    searchTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)

    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [... todos];
    todos[todoIndex].completed = true;
    setTodos(newTodos);

  }
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [... todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);

  }
 


  return (
    <React.Fragment>
       <TodoCounter
       total = { totalTodos}
       completed = { completedTodos}
        />
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setsearchValue}
      />
      <TodoList>
        {searchTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;