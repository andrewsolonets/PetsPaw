import UserLogItem from "../Components/UserLogItem";
import { UserLogContainer } from "./UserLog.styles";
import { useRef } from "react";

const UserLog = ({ log }) => {
  // console.log("userLog fired!");
  const userLog = useRef(log);

  // useEffect(() => {
  //   if (log) {
  //     userLog.current = log;
  //   }
  // }, [log]);

  return (
    <UserLogContainer>
      {log
        ? log.map((el) => {
            return (
              <UserLogItem
                key={el.id}
                catId={el.image_id}
                value={el.value}
                time={el.created_at}
              />
            );
          })
        : userLog?.current?.map((el) => {
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
