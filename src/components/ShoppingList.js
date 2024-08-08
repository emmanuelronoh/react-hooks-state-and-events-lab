// src/components/ShoppingList.js
import React, { useState } from 'react';
import Item from './Item';

function ShoppingList({ items }) {
  const [category, setCategory] = useState('All');

  const handleChange = (event) => setCategory(event.target.value);

  const filteredItems = category === 'All' ? items : items.filter(item => item.category === category);

  return (
    <div>
      <select onChange={handleChange} value={category}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
      </select>
      <ul className="Items">
        {filteredItems.map((item, index) => (
          <Item key={index} name={item.name} category={item.category} /> // Use index if no unique ID is available
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
