import React, { FunctionComponent } from "react";
import { ColProps } from "./Col.types";
import "./Col.scss";

export const Col: FunctionComponent<ColProps> = (props: ColProps) => {
  return <div className={"col-container-" + props.cols}>{props.children}</div>;
};
