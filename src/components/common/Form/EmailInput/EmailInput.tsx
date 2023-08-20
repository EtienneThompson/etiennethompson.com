import React from "react";
import { TextInput } from "../TextInput";
import { EmailInputTypes } from "./EmailInput.types";

export const EmailInput: React.FunctionComponent<EmailInputTypes> = (
  props: EmailInputTypes
) => {
  const [hasError, setHasError] = React.useState(false);

  const validateEmail = (value: string) => {
    // validate the email here.
    const emailMatches = value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    setHasError(emailMatches === null);

    if (props.setter) {
      props.setter(value);
    }
  };

  return (
    <TextInput
      className={hasError ? "text-input-error" : ""}
      setter={validateEmail}
    />
  );
};
