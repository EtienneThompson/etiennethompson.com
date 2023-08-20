import React from "react";
import "./Support.scss";
import { Col, Container, Row } from "components/common/Grid";
import { TextInput } from "components/common/Form/TextInput";
import { TextArea } from "components/common/Form/TextArea";
import { Button } from "components/common/Button";
import { EmailInput } from "components/common/Form/EmailInput";
import { isValidEmail } from "utils";

export const Support = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const onSubmitButtonClick = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(emailAddress);
    console.log(subject);
    console.log(message);

    if (!isValidEmail(emailAddress)) {
      console.log("invalid email provided!");
    }
  };

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
                <TextInput setter={(value: string) => setFirstName(value)} />
              </div>
            </Col>
            <Col cols="2" align="start">
              <div className="right-form-column">
                <span className="text">Last Name</span>
                <TextInput setter={(value: string) => setLastName(value)} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col align="start">
              <span className="text">Email</span>
              <EmailInput setter={(value: string) => setEmailAddress(value)} />
            </Col>
          </Row>
          <Row>
            <Col align="start">
              <span className="text">Subject</span>
              <TextInput setter={(value: string) => setSubject(value)} />
            </Col>
          </Row>
          <Row>
            <Col align="start">
              <span className="text">Message</span>
              <TextArea setter={(value: string) => setMessage(value)} />
            </Col>
          </Row>
          <Row>
            <Button onClick={onSubmitButtonClick}>Submit</Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
