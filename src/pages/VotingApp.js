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

const VotingApp = (props) => {
  const [userLog, setUserLog] = useState([]);
  const [newCat, setNewCat] = useState({});

  const randomCat = useCallback(async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    const [{ url, id }] = await data;
    setNewCat({ url, id });
  }, []);

  async function postCat(num) {
    let catJson = {
      image_id: newCat.id,
      sub_id: props.subId,
      value: num,
    };
    await fetch("https://api.thecatapi.com/v1/votes", {
      method: "POST",
      body: JSON.stringify(catJson),
      headers: {
        "x-api-key": "4072d7cf-ded4-47a3-bf51-39851c2428b8",
        "Content-Type": "application/json",
      },
    });
    getVotes();
  }

  const getVotes = useCallback(async () => {
    const response = await fetch(
      "https://api.thecatapi.com/v1/votes/?" +
        new URLSearchParams({
          order: "DESC",
          limit: 10,
        }),
      {
        headers: {
          "x-api-key": "4072d7cf-ded4-47a3-bf51-39851c2428b8",
        },
      }
    );
    const data = await response.json();

    const response2 = await fetch(
      "https://api.thecatapi.com/v1/favourites/?" +
        new URLSearchParams({
          order: "DESC",
          limit: 3,
        }),
      {
        headers: {
          "x-api-key": "4072d7cf-ded4-47a3-bf51-39851c2428b8",
        },
      }
    );
    const data2 = await response2.json();

    let finalArr = [...data, ...data2].sort((el1, el2) => {
      return new Date(el2.created_at) - new Date(el1.created_at);
    });

    setUserLog(finalArr);
  }, []);

  useEffect(() => {
    randomCat();
    getVotes();
  }, [randomCat, getVotes]);

  async function addFav() {
    let fav = {
      image_id: newCat.id,
      sub_id: props.subId,
    };

    try {
      await fetch("https://api.thecatapi.com/v1/favourites", {
        method: "POST",
        body: JSON.stringify(fav),
        headers: {
          "x-api-key": "4072d7cf-ded4-47a3-bf51-39851c2428b8",
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.error(err);
    }

    // console.log(response);
  }

  const addFavouriteHandler = () => {
    addFav();
    getVotes();
  };

  const addLikeHandler = () => {
    postCat(1);
    randomCat();
    getVotes();
  };

  const addDislikeHandler = () => {
    postCat(0);
    randomCat();
    getVotes();
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
          <img src={newCat.url} alt="testImg"></img>
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

      <div className={classes.userLog}>
        {userLog.map((el) => {
          return (
            <UserLogItem
              key={el.id}
              catId={el.image_id}
              value={el.value}
              time={el.created_at}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VotingApp;
