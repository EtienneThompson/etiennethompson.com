import React, { FunctionComponent } from "react";
import { ButtonProps } from "./Button.types";
import "./Button.scss";

export const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  return (
    <div
      className="button-container"
      onClick={props.onClick}
      style={{ color: props.color }}
    >
      {props.children}
    </div>
  );
};
