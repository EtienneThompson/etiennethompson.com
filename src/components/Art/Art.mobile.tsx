import { Row } from "../common/Grid";
import "./Art.scss";

import colored_tiger from "../../assets/images/colored_tiger.jpg";
import pencil_owl from "../../assets/images/pencil_owl.jpg";
import colored_lion_1 from "../../assets/images/colored_lion_1.jpg";
import colored_horse from "../../assets/images/colored_horse.jpg";

export const MobileArt = () => {
  return (
    <div>
      <Row justify="center">
        <img
          className="image"
          src={colored_tiger}
          alt="Colored Pencil Tiger"
          loading="lazy"
        />
      </Row>
      <Row justify="center">
        <img
          className="image"
          src={pencil_owl}
          alt="Pencil Owl"
          loading="lazy"
        />
      </Row>
      <Row justify="center">
        <img
          className="image"
          src={colored_lion_1}
          alt="Colored Pencil Lion"
          loading="lazy"
        />
      </Row>
      <Row justify="center">
        <img
          className="image"
          src={colored_horse}
          alt="Colored Pencil Horse"
          loading="lazy"
        />
      </Row>
    </div>
  );
};
