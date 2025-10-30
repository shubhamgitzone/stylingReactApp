import { styled } from "styled-components";

const Button = styled.button`
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

export default Button;
// Example of creating a styled button component.
// It creates underlying CSS for the button element.
// The button has padding, font weight, text transformation, border radius, color, and background color.
// Additionally, it includes a hover effect that changes the background color when the user hovers over the button.
// This Button component can be imported and used in other parts of the application to maintain consistent styling.
