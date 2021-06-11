import { FunctionComponent } from "react";
import { CardTitleProps } from "./CardTitle.types";
import "./CardTitle.scss";

export const CardTitle: FunctionComponent<CardTitleProps> = (
  props: CardTitleProps
) => {
  return (
    <div className="card-title-container" style={{ textAlign: props.align }}>
      {props.children}
    </div>
  );
};
