import searchIcon from "../assets/searchIcon.svg";

import classes from "./SearchInput.module.css";

const SearchInput = (props) => {
  return (
    <div
      className={
        !props.isLight
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
          value={props.searchUser}
          onChange={props.onEnterUser}
        />
        {props.noResult && <p className={classes.error}>No Results</p>}
      </form>

      <button type="button" onClick={props.searchUserHandler}>
        Search
      </button>
    </div>
  );
};

export default SearchInput;
