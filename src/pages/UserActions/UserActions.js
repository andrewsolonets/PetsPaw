import { ReactComponent as Fav } from "../assets/fav.svg";
import { ReactComponent as Like } from "../assets/like.svg";
import { ReactComponent as DisLike } from "../assets/dislike.svg";

export const UserActions = ({
  addDislikeHandler,
  addFavouriteHandler,
  addLikeHandler,
}) => {
  return (
    <div className={classes.actions}>
      <div className={classes.likeAction} onClick={addLikeHandler}>
        <Like className={classes.like} />
      </div>
      <div className={classes.favoutitesAction} onClick={addFavouriteHandler}>
        <Fav className={classes.favIcon} />
      </div>
      <div className={classes.dislikeAction} onClick={addDislikeHandler}>
        <DisLike className={classes.dislike} />
      </div>
    </div>
  );
};
