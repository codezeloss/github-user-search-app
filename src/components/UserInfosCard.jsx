import { useContext } from "react";
import { AppContext } from "../App";

import UserDetails from "./user/UserDetails";
import Usernames from "./user/Usernames";

import classes from "./UserInfosCard.module.css";

const UserInfosCard = () => {
  const {
    userData: { isLight },
    noResult,
  } = useContext(AppContext);

  return (
    <div>
      {!noResult && (
        <div
          className={
            !isLight
              ? classes.userInfosCard
              : `${classes.userInfosCard} + ${classes.userInfosCardLight}`
          }
        >
          <Usernames />
          <UserDetails />
        </div>
      )}
      {noResult && <div>👀</div>}
    </div>
  );
};

export default UserInfosCard;
