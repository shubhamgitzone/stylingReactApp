import { useState } from "react";
import { styled } from "styled-components";

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

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => (props.$invalid ? "#f87171" : "#6b7280")};
`;
// Example of creating a styled label component.
// It creates underlying CSS for the label element.
// It also accepts props to conditionally style the component.
// In this case, if the 'invalid' prop is true, the color will be red (#f87171), otherwise it will be gray (#6b7280).
// In the AuthInputs component, we pass the 'invalid' prop based on the validation state.
// This allows us to dynamically change the label color based on whether the input is valid or not.

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${(props) => (props.$invalid ? "#fed2d2" : "#d1d5db")};
  color: ${(props) => (props.$invalid ? "#ef4444" : "#374151")};
  border: 1px solid ${(props) => (props.$invalid ? "#f73f3f" : "transparent")};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;
// Defualt built in props can be avoided by using $ prefix like $invalid
// but it requires additional configuration in babel or typescript
// So we are using 'invalid' prop directly for simplicity

const ButtonContainer = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;

  &:hover {
    background-color: #f0920e;
  }
`;
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
        <p className="paragraph">
          {/* <label className="label invalid">Email</label> */}
          {/* <Label className={`label ${emailNotValid ? "invalid" : ""}`}>*/}
          <Label $invalid={emailNotValid}>Email</Label>
          <Input
            type="email"
            $invalid={emailNotValid}
            // style={{
            //   background: emailNotValid ? "#fed2d2" : "#d1d5db",
            // }}
            // className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          {/* <Label className={`label ${emailNotValid ? "invalid" : ""}`}> */}
          <Label $invalid={passwordNotValid}>Password</Label>
          <Input
            type="password"
            // className={passwordNotValid ? "invalid" : undefined}
            $invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
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
