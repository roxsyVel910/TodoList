import React, { useState } from 'react';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';

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

  if(!searchValue.length <= 1){
    searchTodos = todos;
  } else {
    searchTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)

    })
  }
  const filterSearchTodo = (value) => {
    setTodos(todos.filter(todo => todo.text.includes(value)))
}


  return (
    <React.Fragment>
       <TodoCounter
       total = { totalTodos}
       completed = { completedTodos}
        />
      <TodoSearch />
      <TodoList>
        {searchTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;