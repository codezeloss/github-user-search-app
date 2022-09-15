import locationIcon from "../../assets/locationIcon.svg";
import websiteIcon from "../../assets/websiteIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import companyIcon from "../../assets/companyIcon.svg";

import classes from "./UserDetails.module.css";

const UserDetail = ({
  repos,
  followers,
  following,
  location,
  website,
  twitter,
  company,
  isLight,
}) => {
  return (
    <div className={classes.details}>
      <div
        className={
          !isLight
            ? classes.detail
            : `${classes.detail} + ${classes.detailLight}`
        }
      >
        <div className={classes.box}>
          <p>Repos</p>
          <span>{repos}</span>
        </div>

        <div className={classes.box}>
          <p>Followers</p>
          <span>{followers}</span>
        </div>

        <div className={classes.box}>
          <p>Following</p>
          <span>{following}</span>
        </div>
      </div>

      <div className={classes.links}>
        <div className={classes.linkBoxes}>
          <div className={classes.linkBox}>
            <img
              className={classes.location}
              src={locationIcon}
              alt="Location"
            />
            <p className={location ? "" : classes.notAvailable}>
              {location ? location : "Not Available"}
            </p>
          </div>
          <div className={classes.linkBox}>
            <img className={classes.website} src={websiteIcon} alt="Website" />
            <p className={website ? "" : classes.notAvailable}>
              <a href={website} target="_blank">
                {website ? website : "Not Available"}
              </a>
            </p>
          </div>
        </div>

        <div className={classes.linkBoxes}>
          <div className={classes.linkBox}>
            <img className={classes.twitter} src={twitterIcon} alt="Twitter" />
            <p className={twitter ? "" : classes.notAvailable}>
              {twitter ? twitter : "Not Available"}
            </p>
          </div>
          <div className={classes.linkBox}>
            <img className={classes.company} src={companyIcon} alt="Company" />
            <p className={company ? "" : classes.notAvailable}>
              {company ? company : "Not Available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
