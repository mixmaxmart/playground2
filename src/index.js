import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Routes } from "./pages/routes";
import { Sidebar, Content } from "./components/layout";
import "./styles.scss";

function App({ match }) {
  const navigation = Routes.map((route, index) => (
    <NavLink
      key={index}
      activeClassName="active"
      exact={route.exact}
      to={route.path}
    >
      {route.title}
    </NavLink>
  ));
  const content = Routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      component={route.page}
      exact={route.exact}
    />
  ));
  return (
    <Router>
      <Sidebar>{navigation}</Sidebar>
      <Content>{content}</Content>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
