import logo from "../assets/logo.png";
// import classes from "./Header.module.css";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  & img {
    object-fit: contain;
    margin-bottom: 2rem;
    width: 11rem;
    height: 11rem;
  }

  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-align: center;
    text-transform: uppercase;
    color: #9a3412;
    font-family: "Pacifico", cursive;
    margin: 0;
  }

  .& p {
    text-align: center;
    color: #a39191;
    margin: 0;
  }

  @media (min-width: 768px) {
    & {
      margin-bottom: 4rem;
    }

    & h1 {
      font-size: 2.25rem;
    }
  }
`;

// & is used to target the current component in styled-components
// like HeaderContainer in this case.
// It helps to avoid naming conflicts and keeps styles scoped to the component.
// For more details, refer to the 'styled-components' documentation.
//  It stye header element as well as its child elements like img, h1 and p.

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {/* passing empty style object to demo inline styling */}
      <p
      // className={classes.paragraphs}
      // style={{
      //   color: "red",
      //   textAlign: "left",
      // }}
      >
        A community of artists and art-lovers.
      </p>
    </HeaderContainer>
  );
}
