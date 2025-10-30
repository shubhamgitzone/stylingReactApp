import { useState } from "react";
import { styled } from "styled-components";
import ButtonContainer from "./Button";
import Input from "./Input";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;
// `` is a tagged template literal.
// It allows you to write actual CSS code to style your components.
// In this case, we are creating a styled div component.
// You can add styles inside the backticks.
// The styled component can then be used as a regular React component.
// You can also create styled components for other HTML elements like buttons, inputs, etc.
// For more details, refer to the 'styled-components' documentation.

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        {/* <p className="paragraph"> */}
        {/* <label className="label invalid">Email</label> */}
        {/* <Label className={`label ${emailNotValid ? "invalid" : ""}`}>*/}
        {/* <Label $invalid={emailNotValid}>Email</Label> */}
        <Input
          label="Email"
          type="email"
          $invalid={emailNotValid}
          // style={{
          //   background: emailNotValid ? "#fed2d2" : "#d1d5db",
          // }}
          // className={emailNotValid ? 'invalid' : undefined}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        {/* </p> */}
        {/* <p> */}
        {/* <Label className={`label ${emailNotValid ? "invalid" : ""}`}> */}
        {/* <Label $invalid={passwordNotValid}>Password</Label> */}
        <Input
          label="Password"
          type="password"
          // className={passwordNotValid ? "invalid" : undefined}
          $invalid={passwordNotValid}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
        {/* </p> */}
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <ButtonContainer onClick={handleLogin}>Sign In</ButtonContainer>
      </div>
    </div>
  );
}
