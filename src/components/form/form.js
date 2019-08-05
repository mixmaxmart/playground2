import React from "react";
import "./form.scss";

export function Form(props) {
  return (
    <form className={props.className}>
      {props.children}
      <input
        type="submit"
        value="Submit"
        onBlur={props.onBlur}
        onFocus={props.onFocus}
      />
    </form>
  );
}
