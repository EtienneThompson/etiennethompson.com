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
          alt="Colored pencil tiger drawing. The tiger is walking left but looking towards the viewer. It has a black background. 9 by 12 paper. Completed in 2017."
          loading="lazy"
        />
      </Row>
      <Row justify="center">
        <img
          className="image"
          src={pencil_owl}
          alt="Mechanical pencil owl drawing. This owl is in flight with it's wings spread, in a position to catch prey. 9 by 12 paper. Completed September 6, 2020."
          loading="lazy"
        />
      </Row>
      <Row justify="center">
        <img
          className="image"
          src={colored_lion_1}
          alt="Colored pencil lion drawing. This was a smaller drawing of a yawning lion. Completed 2017."
          loading="lazy"
        />
      </Row>
      <Row justify="center">
        <img
          className="image"
          src={colored_horse}
          alt="Colored pencil horse drawing. This is a drawing of a black horse running on a beach. Completed September 21, 2020."
          loading="lazy"
        />
      </Row>
    </div>
  );
};
