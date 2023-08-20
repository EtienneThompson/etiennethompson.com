import React from "react";
import { TextAreaTypes } from "./TextArea.types";
import "./TextArea.scss";

export const TextArea: React.FunctionComponent<TextAreaTypes> = (
  props: TextAreaTypes
) => {
  return (
    <textarea
      className="text-area"
      onChange={(e) => props.setter && props.setter(e.target.value)}
    />
  );
};
