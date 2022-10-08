import { useContext } from "react";

import sunIcon from "../assets/sunIcon.svg";
import moonIcon from "../assets/moonIcon.svg";

import classes from "./Navbar.module.css";
import { AppContext } from "../App";

const Navbar = () => {
  const { setBodyLight, setThemeLight, themeLight, bodyLight } =
    useContext(AppContext);

  const switchModeHandler = () => {
    setThemeLight((prevState) => !prevState);
    setBodyLight((prevState) => !prevState);
  };

  if (bodyLight === true) {
    document.body.style.backgroundColor = "#F6F8FF";
  } else {
    document.body.style.backgroundColor = "#141d2f";
  }

  return (
    <div
      className={
        !themeLight
          ? classes.navbar
          : `${classes.navbar} + ${classes.navbarLight}`
      }
    >
      <span>devfinder</span>

      <div className={classes.mode} onClick={switchModeHandler}>
        <p>{!themeLight ? "Light" : "Dark"}</p>

        {!themeLight && <img src={sunIcon} alt="Light/Dark mode" />}

        {themeLight && <img src={moonIcon} alt="Light/Dark mode" />}
      </div>
    </div>
  );
};

export default Navbar;
