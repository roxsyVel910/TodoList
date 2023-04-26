import React, { useState } from 'react';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';



function AppUI({
  loading, 
  error,
    totalTodos,
     completedTodos,
    searchValue,
      setSearchValue,

    searchedTodos,
        completeTodo,
       deleteTodo

}){
  return (
    <React.Fragment>
       <TodoCounter
       total = { totalTodos}
       completed = { completedTodos}
        />
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoList>

      {error && <p>Desesperate, hubo un error</p>}
      {loading && <p>Estamos cargando, no desesperes...</p>}
      {(!loading && !searchedTodos.length)&& <p>Crea tu primer Todo</p> }  
           
       {searchedTodos.map(todo => (
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

export {AppUI};