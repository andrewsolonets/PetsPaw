import favouriteIconS from "../assets/favouritesiconS.png";
import dislikes from "../assets/dislikes.png";
import likes from "../assets/likes.png";
import classes from "./UserLogItem.module.css";

const UserLogItem = (props) => {
  const newDate = new Date(props.time);
  let time;
  time = newDate.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
  let category;
  let icon;
  if (props.value === 1) {
    icon = likes;
    category = "Likes";
  }
  if (props.value === 0) {
    icon = dislikes;
    category = "Dislikes";
  }

  if (props.value === undefined) {
    icon = favouriteIconS;
    category = "Favourites";
  }

  return (
    <div className={classes.userLogElement}>
      <div className={classes.time}>
        <span className={classes.userlogP}>{time}</span>
      </div>
      <div className={classes.userLogInfo}>
        <span className={classes.userlogP}>
          Image ID: <b>{props.catId}</b> was added to {category}
        </span>
      </div>

      <div className={classes.userLogIcon}>
        <img src={icon} alt="icon fav S"></img>
      </div>
    </div>
  );
};
export default UserLogItem;
