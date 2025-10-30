import logo from "../assets/logo.png";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {/* passing empty style object to demo inline styling */}
      <p
        className={classes.paragraphs}
        style={{
          color: "red",
          textAlign: "left",
        }}
      >
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
