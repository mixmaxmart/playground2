import React, { useContext, useState } from "react";
import { cn } from "../../../logic/helpers";
import "./todo-item.scss";
import TodoStore from "./../todo-store";
import { observer } from "mobx-react-lite";
import ContentEditable from "react-contenteditable";

// export const TodoItem = props => {
export const TodoItem = observer(props => {
  const store = useContext(TodoStore);
  const item = props.item;
  // const [value, setValue] = useState(item.title);
  console.log("todo-item. title: ", item.title);

  function onKeyPress(event) {
    if (event.key === "Enter") {
      // store.addTodo("", props.position);
      // console.log(props.position);
      // if value
    }
  }
  function onChange(event) {
    store.changeTodo(item.id, event.target.value);
    console.log(event.target.value);
  }
  function onBlur(event) {
    console.log(event.target.value);
    if (item.title === "") {
      store.trashTodo(item.id);
    }
  }
  // const content = value;

  return (
    <div className={cn("todo-item")}>
      <ContentEditable
        className={cn("todo-item__input")}
        html={item.title} // innerHTML of the editable div
        disabled={false} // use true to disable editing
        onKeyUp={onKeyPress}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
});

// <div
//   contenteditable={editable && "true"}
//   className={cn("todo-item", editable && "editable")}
//   // onClick={() => trashTodo(props.item.id)}
//   onClick={() => editTodo(props.item.id)}
//   onKeyPress={onKeyPress}
//   // onClick={() => trashTodo(props.item.id)}
// >
//   id: {props.item.id}, title: {props.item.title}
// </div>
// if (event.key === "Backspace") {
//   console.log("delete");
//   store.trashTodo(item.id);
// }
// function editTodo() {
//   !editable ? setEditable(true) : null;
//   console.log("editable true");
// }
// function trashTodo(index) {
//   store.trashTodo(index);
// }
