import React, { useState, useEffect } from 'react';

const SelectdataApi = () => {
  const [userdata,setUserData] = useState([])
  // const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  // Fetch data from an API
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      // Limiting the items to the first 10 for simplicity
      // setUserData(data)
      setUserData(data);
      // .slice(0, 10)
    };
    fetchData();
  }, []);

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedItems(userdata.map(item => item.id));
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

  const isAllSelected = selectedItems.length === userdata.length;

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
      {userdata.map(item => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={selectedItems.includes(item.id)}
            onChange={(event) => handleSelectItem(event, item.id)}
          />
          {/* <label>{item.id}</label>
          <label>{item.title}</label>
          <label>{item.category}</label>
          <label>{item.image}</label> */}

          <div>{item.id}</div>
          <div>{item.title}</div>
          <div>{item.category}</div>
          <div className='asd'><img src={item.image} alt="" /></div>

        </div>
      ))}
    </div>
  );
};

export default SelectdataApi;
