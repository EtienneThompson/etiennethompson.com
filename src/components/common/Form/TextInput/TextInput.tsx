import React from "react";
import { TextInputTypes } from "./TextInput.types";
import "./TextInput.scss";

export const TextInput: React.FunctionComponent<TextInputTypes> = (
  props: TextInputTypes
) => {
  return (
    <input
      className={`text-input ${props.className ?? ""}`}
      type="text"
      onChange={(e) => props.setter && props.setter(e.target.value)}
    />
  );
};
