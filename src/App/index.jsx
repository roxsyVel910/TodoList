import React from "react";
import {AppUI} from "./appUI";

const defaultItem = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar el cursso de intro a React', completed: false },
    { text: 'Llorar con la llorona', completed: false },
    { text: 'LALALALAA', completed: false },
  ];

  // Recibimos como parámetros el nombre y el estado inicial de nuestro item.
function useLocalStorage(itemName, initialValue) {
    // Guardamos nuestro item en una constante
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
    
    // Utilizamos la lógica que teníamos, pero ahora con las variables y parámentros nuevos
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
    
    // ¡Podemos utilizar otros hooks!
    const [item, setItem] = React.useState(parsedItem);
  
    // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
    const saveItem = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    };
  
    // Regresamos los datos que necesitamos
    return [
      item,
      saveItem,
    ];
  } 
  function App() {
    const [patito, savePatito] = useLocalStorage('PATITO_V1', 'FERNANDO');
    // Desestructuramos los datos que retornamos de nuestro custom hook, y le pasamos los argumentos que necesitamos (nombre y estado inicial)
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  // Cantidad de Item completados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  // Cantidad total de Item
  const totalTodos = todos.length;

  
    
  
    let searchedTodos = [];
  
    if (!searchValue.length >= 1) {
      searchedTodos = todos;
    } else {
      searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      });
    }

    // Creamos la función en la que actualizaremos nuestro localStorage

    

    const completeTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    };
  
    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    };
   
  
  
    return [
      <p>{patito}</p>,
      <AppUI
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />,
    ];
  }
  
  export default App;