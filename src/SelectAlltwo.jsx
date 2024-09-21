import React, { useState, useEffect } from 'react';

const Selectdata = () => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  // Fetch data from an API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        // Limiting the items to the first 10 for simplicity
        setItems(data.slice(0, 10));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedItems(items.map(item => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (event, id) => {
    if (event.target.checked) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    }
  };

  const isAllSelected = selectedItems.length === items.length;

  return (
    <div>
      <h1>Select All Example with Fetch API</h1>
      <div>
        <input
          type="checkbox"
          onChange={handleSelectAll}
          checked={isAllSelected}
        />
        <label>Select All</label>
      </div>
      {items.map(item => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={selectedItems.includes(item.id)}
            onChange={(event) => handleSelectItem(event, item.id)}
          />
          <label>{item.title}</label>
        </div>
      ))}
    </div>
  );
};

export default Selectdata;
