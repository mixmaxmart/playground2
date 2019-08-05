import React from "react";
import { cn } from "../../logic/helpers";
import "./form.scss";

export function InputField(props) {
  return (
    <div className={cn("input-field", props.bold && "bold")}>
      {props.title && <label>{props.title}</label>}
      {props.children}
    </div>
  );
}
