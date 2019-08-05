import React from "react";
import "./layout.scss";

export function Content(props) {
  return <div className="content">{props.children}</div>;
}
export function Container(props) {
  const { bg = "white" } = props;
  return (
    <div className="container" data-bg={bg}>
      {props.children}
    </div>
  );
}
