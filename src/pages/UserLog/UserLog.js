import UserLogItem from "../../Components/UserLogItem/UserLogItem";
import { UserLogContainer } from "./UserLog.styles";

const UserLog = ({ log }) => {
  return (
    <UserLogContainer>
      {log?.map((el) => {
        return (
          <UserLogItem
            key={el.id}
            catId={el.image_id}
            value={el.value}
            time={el.created_at}
          />
        );
      })}
    </UserLogContainer>
  );
};

export default UserLog;
