import { createContext } from 'react';
import { observable, action, computed, autorun } from 'mobx';

class TodoStore {
  // @autorun getTodoStore() {
  //   this.todoStore = localStorage.getItem("todoStore");
  // }
  // constructor() {
  //   const local = localStorage.getItem("todoStore");

  //   console.log("local", local);
  //   local
  //     ? (this.todoStore = localStorage.getItem("todoStore"))
  //     : (this.todoStore = [
  //         {
  //           id: "0",
  //           title: "asdasd",
  //           dueToDate: "",
  //           check: false,
  //           trash: false
  //         },
  //         {
  //           id: "0",
  //           title: "asdasd",
  //           dueToDate: "",
  //           check: false,
  //           trash: false
  //         }
  //       ]);
  //   // this.todoStore = localStorage.getItem("todoStore");
  // }
  @observable todo = 'asda';
  @observable todoStore = [
    { id: '0', title: 'asdasd', dueToDate: '', check: false, trash: false },
    { id: '1', title: 'asdasd', dueToDate: '', check: false, trash: false }
  ];
  @action save() {
    localStorage.setItem('todoStore', this.todoStore);
  }
  @action addTodo = (data, position) => {
    console.log('------------------------------------------------');
    data = { title: data.title, id: this.todoStore.length };
    position
      ? this.todoStore.slice(position, 0, data)
      : this.todoStore.push(data);
    console.log('mobx-add', data);
    console.log('mobx-store', this.todoStore);
    localStorage.setItem('todoStore', JSON.stringify(this.todoStore));
  };

  @action trashTodo = id => {
    console.log('trash - mobx', id);
    this.todoStore[this.findTodo(id)].trash = true;
  };
  @action changeTodo = (id, data) => {
    this.todoStore[this.findTodo(id)].title = data;
  };
  @action findTodo = id => {
    return this.todoStore.findIndex(x => x.id === id);
  };
}
// export default new Store();
export default createContext(new TodoStore());
