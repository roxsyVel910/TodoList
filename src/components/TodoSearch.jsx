import React from 'react';
import '../stylos/TodoSearch.css';

function TodoSearch() {
    const [seacrhValue, setSearchValue] = React.useState('');

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  
  return [
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      onChange={onSearchValueChange}
    />,
    <p>{seacrhValue}</p>
  ];
}

export { TodoSearch };