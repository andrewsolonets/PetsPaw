import UserLogItem from "../Components/UserLogItem";
import { UserLogContainer } from "./UserLog.styles";
import { useRef } from "react";

const UserLog = ({ log }) => {
  const userLog = useRef(log);

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
