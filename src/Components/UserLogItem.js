import favouriteIconS from "../assets/favouritesiconS.png";
import classes from "./UserLogItem.module.css";

const UserLogItem = (props) => {
  return (
    <div className={classes.userLogElement}>
      <div className={classes.time}>
        <p>22:45</p>
      </div>
      <div className={classes.userLogInfo}>
        <p>
          Image ID: <b>fQSunHvl8</b> was added to Favourites
        </p>
      </div>

      <div className={classes.userLogIcon}>
        <img src={favouriteIconS} alt="icon fav S"></img>
      </div>
    </div>
  );
};
export default UserLogItem;
