import React from 'react';
import '../stylos/TodoSearch.css';

function TodoSearch() {
    const [patito, setPatito] = React.useState('Juan');

  /*const onSearchValueChange = (event) => {
    console.log(event.target.value);
  };*/
  
  return [
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      onChange={() => setPatito('Enrique')}
    />,
    <p>{patito}</p>
  ];
}

export { TodoSearch };