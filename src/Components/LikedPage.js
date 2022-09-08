import classes from "./FavouritesPage.module.css";
import Button from "./UI/Button";
import CardButton from "./UI/CardButton";
import { useCallback, useEffect, useState } from "react";
import Grid from "./UI/GridLikes";
import { ReactComponent as Back } from "../assets/back.svg";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import BounceLoader from "react-spinners/BounceLoader";

const LikedPage = (props) => {
  const [{ apiData, isLoading, error }] = useFetch(
    `votes/?`,
    { order: "DESC", limit: 10 },
    null,
    "get",
    "likedFilter",
    props.value
  );

  let navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  };

  return (
    <div className={classes.containerMain}>
      <div className={classes["nav-content"]}>
        <CardButton onClick={backHandler}>
          <Back className={classes.back} />
        </CardButton>
        <Button>{props.text}</Button>
      </div>
      <BounceLoader
        color={"var(--main)"}
        loading={isLoading}
        cssOverride={{ marginTop: "5vw" }}
        size={50}
        speedMultiplier={1.5}
      ></BounceLoader>

      <Grid items={apiData}></Grid>
    </div>
  );
};

export default LikedPage;
