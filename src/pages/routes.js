import React from "react";
import { Loader } from "./loader/loader";
import { Home } from "./home/home";
import { UiKit } from "./ui-kit/ui-kit";
import { TodoList } from "./todolist/todolist";
// import { BrowserRouter as match } from "react-router-dom";

export const Routes = [
  {
    path: "/",
    title: "Home",
    exact: true,
    page: () => <Home />
  },
  {
    path: "/loader",
    title: "Loader",
    exact: false,
    page: () => <Loader />
  },
  {
    path: "/ui",
    title: "UI kit",
    exact: false,
    page: () => <UiKit />
  },
  {
    path: "/todo",
    title: "Todo Store",
    exact: false,
    page: () => <TodoList />
  }
];
