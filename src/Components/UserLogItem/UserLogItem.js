import {
  DislikeUserLogIcon,
  FavUserLogIcon,
  LikeUserLogIcon,
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
    icon = <LikeUserLogIcon />;
    category = "Likes";
  }
  if (props.value === 0) {
    icon = <DislikeUserLogIcon />;
    category = "Dislikes";
  }

  if (props.value === undefined) {
    icon = <FavUserLogIcon />;
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

      <UserLogIcon>{icon}</UserLogIcon>
    </UserLogElement>
  );
};
export default UserLogItem;
