import favouriteIconS from "../assets/favouritesiconS.png";
import dislikes from "../assets/dislikes.png";
import likes from "../assets/likes.png";
import {
  TimeWrapper,
  UserLogElement,
  UserLogIcon,
  UserLogInfo,
} from "./UserLogItem.styles";

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
    <UserLogElement>
      <TimeWrapper>
        <span>{time}</span>
      </TimeWrapper>
      <UserLogInfo>
        <span>
          Image ID: <b>{props.catId}</b> was added to {category}
        </span>
      </UserLogInfo>

      <UserLogIcon>
        <img src={icon} alt="icon fav S"></img>
      </UserLogIcon>
    </UserLogElement>
  );
};
export default UserLogItem;
