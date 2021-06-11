import { FunctionComponent } from "react";
import { CardContentProps } from "./CardContent.types";
import "./CardContent.scss";

export const CardContent: FunctionComponent<CardContentProps> = (
  props: CardContentProps
) => {
  return (
    <div className="card-content-container" style={{ textAlign: props.align }}>
      {props.children}
    </div>
  );
};
