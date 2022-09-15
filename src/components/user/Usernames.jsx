import eloss from "../../assets/eloss.jpg";

import classes from "./Usernames.module.css";

const Usernames = ({ avatar, name, created, login, bio, url }) => {
  return (
    <div className={classes.user}>
      <img src={avatar} alt="user avatar" />

      <div className={classes.userAll}>
        <div className={classes.username}>
          <h1>{name ? name : "No Name"}</h1>
          <p>Joined {created}</p>
        </div>

        <div>
          <a className={classes.userTag} href={url}>
            @{login}
          </a>
        </div>

        <div className={classes.bioMrg}>
          <p className={bio ? classes.bio : classes.noBio}>
            {bio ? bio : "This profile has no bio"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Usernames;
