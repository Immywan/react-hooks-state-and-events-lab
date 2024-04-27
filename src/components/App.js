import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

 const [ mode, setMode] = useState(false)
 
  const appClass = mode ? "App dark" : "App light"

  function handleMode() {
    setMode(mode => !mode)
  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleMode}>{mode ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  )
}

export default App;
