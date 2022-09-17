import { ReactComponent as Fav } from "../../assets/fav.svg";
import { ReactComponent as Fav1 } from "../../assets/heartfull.svg";
import { ReactComponent as Like } from "../../assets/like.svg";
import { ReactComponent as DisLike } from "../../assets/dislike.svg";
import { ActionWrapper, UserActionsWrapper } from "./UserActions.styles";
import { useEffect, useState } from "react";

export const UserActions = ({
  addDislikeHandler,
  addFavouriteHandler,
  addLikeHandler,
  img,
}) => {
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    setLiked(false);
  }, [img]);

  return (
    <UserActionsWrapper>
      <ActionWrapper element={"#97eab9"} onClick={addLikeHandler}>
        <Like />
      </ActionWrapper>
      <ActionWrapper
        element={"${({ theme }) => theme.main}"}
        liked={liked}
        onClick={() => {
          setLiked(true);
          return addFavouriteHandler;
        }}
      >
        {liked ? <Fav1 /> : <Fav />}
      </ActionWrapper>
      <ActionWrapper element={"#ffd280"} onClick={addDislikeHandler}>
        <DisLike />
      </ActionWrapper>
    </UserActionsWrapper>
  );
};
