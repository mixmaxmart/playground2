import React from "react";
import "./typography.scss";

export const Header = props => {
  const { size = "2" } = props;
  if (size === "1") return <h1>{props.children}</h1>;
  if (size === "2") return <h2>{props.children}</h2>;
  if (size === "3") return <h3>{props.children}</h3>;
  if (size === "4") return <h4>{props.children}</h4>;
  // return <h2>{props.children}</h2>;
};
export function Text(props) {
  return <p data-type={props.type}>{props.children}</p>;
}
