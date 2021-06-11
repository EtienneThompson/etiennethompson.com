import { SectionHeader } from "../common/SectionHeader";
import "./Art.scss";

import colored_tiger from "../../assets/images/colored_tiger.jpg";
import pencil_owl from "../../assets/images/pencil_owl.jpg";
import colored_lion_1 from "../../assets/images/colored_lion_1.jpg";
import colored_horse from "../../assets/images/colored_horse.jpg";

export const Art = () => {
  return (
    <div className="art">
      <SectionHeader>Art</SectionHeader>
      <div className="row">
        <div className="column">
          <img
            className="image"
            src={colored_tiger}
            alt="Colored Pencil Tiger"
          />
        </div>
        <div className="column">
          <img className="image" src={pencil_owl} alt="Pencil Owl" />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <img
            className="image"
            src={colored_lion_1}
            alt="Colored Pencil Lion"
          />
        </div>
        <div className="column">
          <img
            className="image"
            src={colored_horse}
            alt="Colored Pencil Horse"
          />
        </div>
      </div>
    </div>
  );
};
