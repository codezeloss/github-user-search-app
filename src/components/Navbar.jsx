import sunIcon from "../assets/sunIcon.svg";
import moonIcon from "../assets/moonIcon.svg";

import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const switchModeHandler = () => {
    props.setThemeLight((prevState) => !prevState);
    props.setBodyLight((prevState) => !prevState);
  };

  if (props.bodyLight === true) {
    document.body.style.backgroundColor = "#F6F8FF";
  } else {
    document.body.style.backgroundColor = "#141d2f";
  }

  return (
    <div
      className={
        !props.isLight
          ? classes.navbar
          : `${classes.navbar} + ${classes.navbarLight}`
      }
    >
      <span>devfinder</span>

      <div className={classes.mode} onClick={switchModeHandler}>
        <p>{!props.isLight ? "Light" : "Dark"}</p>

        {!props.isLight && <img src={sunIcon} alt="Light/Dark mode" />}

        {props.isLight && <img src={moonIcon} alt="Light/Dark mode" />}
      </div>
    </div>
  );
};

export default Navbar;
