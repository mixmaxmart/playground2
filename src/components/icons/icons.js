import React from "react";
import { ReactComponent as Burger } from "./icons/burger.svg";
import { cn } from "../../logic/helpers";
import "./icons.scss";

export function Icons(props) {
  const icon = {
    burger: <Burger />
  };

  return (
    <div className={cn("icon")} data-color={props.color} data-size={props.size}>
      {icon[props.name]}
    </div>
  );
}
