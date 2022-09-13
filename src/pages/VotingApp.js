import React, { useEffect, useState } from "react";
import CardButton from "../Components/UI/CardButton";
import Button from "../Components/UI/Button";
import classes from "./VotingApp.module.css";

import { ReactComponent as Fav } from "../assets/fav.svg";
import { ReactComponent as Like } from "../assets/like.svg";
import { ReactComponent as DisLike } from "../assets/dislike.svg";
import { ReactComponent as Back } from "../assets/back.svg";
import { useNavigate } from "react-router-dom";
import { MainContentContainer } from "../Components/styles/globalstyles.styles";

import { useFetch } from "../hooks/useFetch";
import UserLog from "./UserLog";
import { PageNavBar } from "../Components/PageNavBar/PageNavBar";

const VotingApp = (props) => {
  const { apiData, fetchData, additional, isLoading, postAction, logAction } =
    useFetch("images/search", null, null, "get");

  useEffect(() => {
    logAction();
  }, [apiData]);

  useEffect(() => {
    fetchData();
  }, []);

  const addFavouriteHandler = () => {
    let catJson = {
      image_id: apiData[0]?.id,
      sub_id: props.subId,
    };
    postAction("favourites", {}, catJson);
    logAction();
  };

  // USE USEEFFECT FOR REPEATED ACTIONS
  const addLikeHandler = () => {
    let catJson = {
      image_id: apiData[0]?.id,
      sub_id: props.subId,
      value: 1,
    };
    postAction("votes", {}, catJson);
  };

  const addDislikeHandler = () => {
    let catJson = {
      image_id: apiData[0]?.id,
      sub_id: props.subId,
      value: 0,
    };
    postAction("votes", {}, catJson);
  };

  let navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  };

  return (
    <MainContentContainer>
      <PageNavBar backHandler={backHandler} title={"VOTING"} />

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

      <UserLog log={additional} />
    </MainContentContainer>
  );
};

export default VotingApp;
