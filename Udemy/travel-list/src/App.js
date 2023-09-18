import { useState } from "react";

import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((s) => [...s, item]);
  };

  const handleDeleteItem = (itemId) => {
    setItems((s) => s.filter((item) => item.id !== itemId));
  };

  const handleToggleItem = (itemId) => {
    setItems((s) =>
      s.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const handleClearItems = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    confirmed && setItems([]);
  };

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
