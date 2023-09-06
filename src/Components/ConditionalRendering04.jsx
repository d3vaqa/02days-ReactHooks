import React, { useState } from 'react';

function ConditionalRendering() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', status: 'active' },
    { id: 2, name: 'Item 2', status: 'inactive' },
    { id: 3, name: 'Item 3', status: 'active' },
    { id: 4, name: 'Item 4', status: 'inactive' },
  ]);

  const showActiveItems = () => {
    setItems(items.filter((item) => item.status === 'active'));
  };

  const showInactiveItems = () => {
    setItems(items.filter((item) => item.status === 'inactive'));
  };

  const resetItems = () => {
    setItems([
      { id: 1, name: 'Item 1', status: 'active' },
      { id: 2, name: 'Item 2', status: 'inactive' },
      { id: 3, name: 'Item 3', status: 'active' },
      { id: 4, name: 'Item 4', status: 'inactive' },
    ]);
  };

  return (
    <div>
      <button onClick={showActiveItems}>Show Active Items</button>
      <button onClick={showInactiveItems}>Show Inactive Items</button>
      <button onClick={resetItems}>Reset Items</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ConditionalRendering;
