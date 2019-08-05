import React, { useContext } from "react";
import { Container } from "../../components/layout/layout";
import { observer } from "mobx-react-lite";
import TodoStore from "./todo-store";
import { Input } from "../../components/form";
// import { Text } from "../../components/typography/typorgraphy";
import { TodoItem } from "./todo-item/todo-item";
import { Header } from "../../components/typography/typorgraphy";

export const TodoList = observer(() => {
  const store = useContext(TodoStore);

  function addTodo(event) {
    const data = { title: event.target.value };
    store.addTodo(data);
  }
  // function trashTodo(index) {
  //   console.log("todo-list", index);
  //   store.trashTodo(index);
  // }
  return (
    <Container>
      <Input onSubmit={addTodo} />

      <Header size="4">Today, 21 december</Header>

      {store.todoStore
        .slice(0)
        .reverse()
        .map((item, index) => {
          // const print = !item.delete ? "" : item;
          return (
            !item.trash && (
              <TodoItem
                key={index}
                item={item}
                position={index}
                // onClick={trashTodo}
                // title={item.id + " " + item.title}
                // onClick={trashTodo(item.id)}
              />
            )
          );
        })}
    </Container>
  );
});
