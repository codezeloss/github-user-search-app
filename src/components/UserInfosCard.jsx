import UserDetails from "./user/UserDetails";
import Usernames from "./user/Usernames";

import classes from "./UserInfosCard.module.css";

const UserInfosCard = (props) => {
  return (
    <div
      className={
        !props.isLight
          ? classes.userInfosCard
          : `${classes.userInfosCard} + ${classes.userInfosCardLight}`
      }
    >
      <Usernames
        avatar={props.avatar}
        login={props.login}
        name={props.name}
        created={props.created}
        bio={props.bio}
        url={props.url}
      />
      <UserDetails
        repos={props.repos}
        followers={props.followers}
        following={props.following}
        location={props.location}
        website={props.website}
        twitter={props.twitter}
        company={props.company}
        isLight={props.isLight}
      />
    </div>
  );
};

export default UserInfosCard;
