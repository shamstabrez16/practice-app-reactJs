import React from "react";
import classes from "./Button.module.css";
import { type } from "@testing-library/user-event/dist/type";

const Button = (props) => {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}{" "}
    </button>
  );
};
export default Button;
