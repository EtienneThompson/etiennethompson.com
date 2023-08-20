import React from "react";
import "./Support.scss";
import { Col, Container, Row } from "components/common/Grid";
import { TextInput } from "components/common/Form/TextInput/TextInput";
import { TextArea } from "components/common/Form/TextArea/TextArea";

export const Support = () => {
  return (
    <Container>
      <Row className="support-container" justify="center">
        <Col>
          <h1 className="section-title">GET IN TOUCH</h1>
          <p className="text">
            Question or concerns about the Barbu Card Game app? Feel free to
            reach out, and I'll get back to you as soon as I can!
          </p>
          <Row>
            <Col cols="2" align="start">
              <div className="left-form-column">
                <span className="text">First Name</span>
                <TextInput />
              </div>
            </Col>
            <Col cols="2" align="start">
              <div className="right-form-column">
                <span className="text">Last Name</span>
                <TextInput />
              </div>
            </Col>
          </Row>
          <Row>
            <Col align="start">
              <span className="text">Email</span>
              <TextInput />
            </Col>
          </Row>
          <Row>
            <Col align="start">
              <span className="text">Subject</span>
              <TextInput />
            </Col>
          </Row>
          <Row>
            <Col align="start">
              <span className="text">Message</span>
              <TextArea />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
