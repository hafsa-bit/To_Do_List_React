import "./NewItem.css";
import React, { useState } from "react";

function NewItem(props) {
  const [newItem, setNewItem] = useState("");

  const newItemChangeHandler = (event) => {
    setNewItem(event.target.value);
  };

  const addButtonHandler = () => {
    props.onSaveNewItem(newItem);
    setNewItem("");
  };
  return (
    <div>
      <div>
        <input type="text" value={newItem} onChange={newItemChangeHandler} />
        <button type="submit" onClick={addButtonHandler}>
          +
        </button>
      </div>
    </div>
  );
}
export default NewItem;
