// src/components/App.js
import React, { useState } from 'react';
import ShoppingList from './ShoppingList';
import itemData from '../data/items';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => setDarkMode(!darkMode);

  const appClass = darkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggle}>Dark Mode</button>
      </header>
      <main>
        <ShoppingList items={itemData} />
      </main>
    </div>
  );
}

export default App;
