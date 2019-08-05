import React, { useState } from "react";
import { cn } from "../../../logic/helpers";
import "./input.scss";

export function Input(props) {
  const { type = "text" } = props;
  const { size = "m" } = props;
  const { placeholder = "exapmle" } = props;
  const { defaultValue = "text" } = props;

  const { prefix = "" } = props;
  const { sufix = "" } = props;

  const [state, setState] = useState("");
  // const [inputValue, inputValue] = useState("");
  const [value, setValue] = useState(defaultValue);

  function onFocus(event) {
    setState("focus");
    props.onFocus(event);
  }
  function onBlur(event) {
    setState("");
    props.onBlur(event);
  }
  function handleChange(event) {
    setValue(event.target.value);
    props.onChange(event);
  }
  function onKeyPress(event) {
    if (event.key === "Enter") {
      props.onSubmit(event);
      // console.log("enter");
    }
  }

  return (
    <div className={cn("input", state)} data-size={size} data-type={type}>
      {type === "url" && (
        <div className={cn("input__url-placeholder")}>
          <span className="dontshow">
            {prefix}
            {value ? value : placeholder}
          </span>
          <span className={cn("input__sufix")}>{sufix}</span>
        </div>
      )}

      {prefix && <span className={cn("input__prefix")}>{prefix}</span>}
      <input
        // ref={c => (this._input = c)}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={handleChange}
        onSubmitEditing={props.onSubmitEditing}
        onKeyPress={onKeyPress}
        // value={}
      />
    </div>
  );
}
