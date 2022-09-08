import React, { useEffect, useState } from "react";
import CardButton from "../Components/UI/CardButton";
import Button from "../Components/UI/Button";
import classes from "./VotingApp.module.css";

import { ReactComponent as Fav } from "../assets/fav.svg";
import { ReactComponent as Like } from "../assets/like.svg";
import { ReactComponent as DisLike } from "../assets/dislike.svg";
import { ReactComponent as Back } from "../assets/back.svg";
import { useNavigate } from "react-router-dom";

import UserLogItem from "../Components/UserLogItem";
import { useCallback } from "react";
import { useFetch } from "../hooks/useFetch";
import UserLog from "./UserLog";

const VotingApp = (props) => {
  const [{ apiData, isLoading }, postAction] = useFetch(
    "images/search",
    null,
    null,
    "get"
  );
  const [{ apiData: userLog }, fetchData] = useFetch(
    "images/search",
    null,
    null,
    "get",
    "voting"
  );

  const addFavouriteHandler = () => {
    let catJson = {
      image_id: apiData[0]?.id,
      sub_id: props.subId,
    };
    postAction("favourites", {}, catJson);
    fetchData("images/search", null, null, "get", "voting");
  };

  // USE USEEFFECT FOR REPEATED ACTIONS
  const addLikeHandler = () => {
    let catJson = {
      image_id: apiData[0]?.id,
      sub_id: props.subId,
      value: 1,
    };
    postAction("votes", {}, catJson);
    fetchData("images/search", null, null, "get", "voting");
  };

  const addDislikeHandler = () => {
    let catJson = {
      image_id: apiData[0]?.id,
      sub_id: props.subId,
      value: 0,
    };
    postAction("votes", {}, catJson);
    fetchData("images/search", null, null, "get", "voting");
  };

  let navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  };

  return (
    <div className={classes.containerMain}>
      <div className={classes["nav-content"]}>
        <CardButton className={classes.backContainer} onClick={backHandler}>
          <Back className={classes.back} />
        </CardButton>
        <Button>VOTING</Button>
      </div>

      <div className={classes.parentImg}>
        <div className={classes.containerImg}>
          {isLoading ? "" : <img src={apiData[0]?.url} alt="testImg"></img>}
        </div>

        <div className={classes.actions}>
          <div className={classes.likeAction} onClick={addLikeHandler}>
            <Like className={classes.like} />
          </div>
          <div
            className={classes.favoutitesAction}
            onClick={addFavouriteHandler}
          >
            <Fav className={classes.favIcon} />
          </div>
          <div className={classes.dislikeAction} onClick={addDislikeHandler}>
            <DisLike className={classes.dislike} />
          </div>
        </div>
      </div>

      <UserLog log={userLog} />
    </div>
  );
};

export default VotingApp;
