import "./List.css";
import NewItem from "./NewItem";

function List(props) {
  const saveNewItem = (enteredNewItem) => {
    const newItem = enteredNewItem;
    props.onAddNewTask(newItem);
  };
  return (
    <div>
      <h1 className="title">TO DO LIST</h1>
      <hr className="underline" />
      <NewItem onSaveNewItem={saveNewItem} />
      {props.list.map((item) => (
        <div className="item">{item}</div>
      ))}
    </div>
  );
}

export default List;
