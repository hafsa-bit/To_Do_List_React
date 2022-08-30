import "./styles.css";
import List from "./components/List";
import React, { useState } from "react";

export default function App() {
  const dummyList = ["book", "text", "DEsk", "Office"];

  const [list, setNewTask] = useState(dummyList);
  const addNewTask = (newItem) => {
    setNewTask((prevList) => {
      return [newItem, ...prevList];
    });
  };
  return (
    <div className="App">
      <List list={list} onAddNewTask={addNewTask}></List>
    </div>
  );
}
