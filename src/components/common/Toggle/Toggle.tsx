import "./Toggle.scss";
import React from "react";
import { ToggleProps } from "./Toggle.types";

export const Toggle = (props: ToggleProps) => {
  return (
    <div className="toggle-container">
      <label className="toggle">
        <input
          type="checkbox"
          onChange={() => {
            props.action();
          }}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};
