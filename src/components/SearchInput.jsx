import { useContext } from "react";
import { AppContext } from "../App";

import searchIcon from "../assets/searchIcon.svg";

import classes from "./SearchInput.module.css";

const SearchInput = () => {
  const {
    searchUser,
    searchInputHandler,
    searchUserHandler,
    noResult,
    themeLight,
  } = useContext(AppContext);

  return (
    <div
      className={
        !themeLight
          ? classes.search
          : `${classes.searchLight} + ${classes.search}`
      }
    >
      <img src={searchIcon} alt="Search Icon" />

      <form>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Search GitHub username…"
          value={searchUser}
          onChange={searchInputHandler}
        />
        {noResult && <p className={classes.error}>No Results</p>}
      </form>

      <button type="button" onClick={searchUserHandler}>
        Search
      </button>
    </div>
  );
};

export default SearchInput;
