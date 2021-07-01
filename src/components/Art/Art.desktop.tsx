import { Row, Col } from "../common/Grid";
import "./Art.scss";

import colored_tiger from "../../assets/images/colored_tiger.jpg";
import pencil_owl from "../../assets/images/pencil_owl.jpg";
import colored_lion_1 from "../../assets/images/colored_lion_1.jpg";
import colored_horse from "../../assets/images/colored_horse.jpg";

export const DesktopArt = () => {
  return (
    <div>
      <Row justify="center">
        <Col cols="2">
          <img
            className="desktop image"
            src={colored_tiger}
            alt="Colored Pencil Tiger"
          />
        </Col>
        <Col cols="2">
          <img className="desktop image" src={pencil_owl} alt="Pencil Owl" />
        </Col>
      </Row>
      <Row justify="center">
        <Col cols="2">
          <img
            className="desktop image"
            src={colored_lion_1}
            alt="Colored Pencil Lion"
          />
        </Col>
        <Col cols="2">
          <img
            className="desktop image"
            src={colored_horse}
            alt="Colored Pencil Horse"
          />
        </Col>
      </Row>
    </div>
  );
};
