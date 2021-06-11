import { FunctionComponent } from "react";
import { CardProps } from "./Card.types";
import "./Card.scss";

export const Card: FunctionComponent<CardProps> = (props: CardProps) => {
  return <div className="card-container">{props.children}</div>;
};
