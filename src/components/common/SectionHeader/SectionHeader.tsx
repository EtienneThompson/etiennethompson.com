import React, { FunctionComponent } from "react";
import "./SectionHeader.scss";
import { SectionHeaderProps } from "./SectionHeader.types";

export const SectionHeader: FunctionComponent<SectionHeaderProps> = (
  props: SectionHeaderProps
) => {
  return (
    <div className="section-header-container">
      <p className="header-text">{props.children}</p>
    </div>
  );
};
