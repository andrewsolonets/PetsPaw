import React, { useEffect, useState } from "react";
import CardButton from "./UI/CardButton";
import Button from "./UI/Button";
import backArrow from "../assets/backArrow.png";
import classes from "./VotingApp.module.css";

import Like from "../assets/Like.png";
import Dislike from "../assets/Dislike.png";
// import Favourites from "../assets/Favourites.png";
import Favourites from "../assets/fav.svg";
import testimg from "../assets/testImg.png";

import UserLogItem from "./UserLogItem";

const VotingApp = (props) => {
  const [newCat, setNewCat] = useState({});

  useEffect(() => {
    const randomCat = async () => {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      const data = await response.json();
      const [{ url, id }] = data;
      console.log(url, id);
      setNewCat({ url, id });
    };
    randomCat();
  }, []);

  return (
    <div className={classes.containerMain}>
      <div className={classes["nav-content"]}>
        <CardButton>
          <img src={backArrow} alt="back arrow"></img>
        </CardButton>
        <Button>VOTING</Button>
      </div>
      <div className={classes.parentImg}>
        <div className={classes.containerImg}>
          <img src={newCat.url} alt="testImg"></img>
        </div>

        <div className={classes.actions}>
          <div className={classes.likeAction}>
            <img src={Like} alt="like"></img>
          </div>
          <div className={classes.favoutitesAction}>
            <img src={Favourites} alt="like"></img>
          </div>
          <div className={classes.dislikeAction}>
            <img src={Dislike} alt="like"></img>
          </div>
        </div>
      </div>

      <div className={classes.userLog}>
        <UserLogItem />
      </div>
    </div>
  );
};

export default VotingApp;
