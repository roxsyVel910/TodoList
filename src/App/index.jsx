import React from "react";
import { AppUI } from "./appUI";
import { useEffect } from "react";

const defaultItem = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el cursso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "LALALALAA", completed: false },
];

// Recibimos como parámetros el nombre y el estado inicial de nuestro item.
function useLocalStorage(itemName, initialValue) {
  const [ error, setError] = React.useState(false)
  const [ loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try{
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
      setItem(parsedItem)
      setLoading(false);
    } catch{
      (error);
    }

    }, 1000);
  });

  // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);

    } catch(error){
      setError(error);
    }
    
  };

  // Regresamos los datos que necesitamos
  return {
    item, 
    saveItem,
    loading,
    error
  };
}
function App() {


  

export default App;
