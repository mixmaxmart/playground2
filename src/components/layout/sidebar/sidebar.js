import React, { useState, useEffect } from "react";
import "./sidebar.scss";
import { cn } from "../../../logic/helpers/cn";
import { Icons } from "../../icons/icons";

export function Sidebar(props) {
  const [visable, setVisable] = useState(
    localStorage.getItem("sidebarVisable")
  );
  const [drower, setDrower] = useState(false);
  const [drowerHideble, setdrowerHideble] = useState(false);

  function toggleSidebar() {
    setVisable(!visable);
    localStorage.setItem("sidebarVisable", visable);
  }
  function handleMouseEnter() {
    if (visable) {
      setDrower(true);
      setTimeout(() => {
        setdrowerHideble(true);
        console.log("хуй");
      }, 300);
    }
  }
  function handleMouseLeave() {
    if (drowerHideble) {
      setDrower(false);
      setdrowerHideble(false);
    }
  }

  return (
    <div
      className={cn("sidebar", visable && "hide", drower && "drower")}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn("sidebar__switcher")}
        onClick={toggleSidebar}
        onMouseEnter={handleMouseEnter}
      >
        <Icons name="burger" color="white" />
      </div>
      {props.children}
    </div>
  );
}
