import React, { FunctionComponent } from "react";
import { RowProps } from "./Row.types";
import "./Row.scss";

export const Row: FunctionComponent<RowProps> = (props: RowProps) => {
  return (
    <div
      className={`${props.className ?? ""} row-container`}
      style={{ justifyContent: props.justify }}
    >
      {props.children}
    </div>
  );
};
