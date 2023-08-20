import React from "react";
import { TextInput } from "../TextInput";
import { EmailInputTypes } from "./EmailInput.types";
import { isValidEmail } from "utils";

export const EmailInput: React.FunctionComponent<EmailInputTypes> = (
  props: EmailInputTypes
) => {
  const [hasError, setHasError] = React.useState(false);

  const validateEmail = (value: string) => {
    // validate the email here.
    setHasError(!isValidEmail(value));

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
