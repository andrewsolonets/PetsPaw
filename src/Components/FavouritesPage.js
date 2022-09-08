import classes from "./FavouritesPage.module.css";
import Button from "./UI/Button";
import CardButton from "./UI/CardButton";

import UserLogItem from "./UserLogItem";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Grid from "./UI/Grid";
import { ReactComponent as Back } from "../assets/back.svg";
import BounceLoader from "react-spinners/BounceLoader";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import UserLog from "../pages/UserLog";

const FavouritesPage = (props) => {
  console.log("render");

  const [result, postAction] = useFetch(
    `favourites/?`,
    { order: "DESC", limit: 10 },
    null,
    "get"
  );

  const { apiData, isLoading, error } = result;

  const deleteItemsFav = (id) => {
    postAction(`favourites/${id}`, {}, null, "delete");
  };

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
        <Button>FAVOURITES</Button>
      </div>
      <BounceLoader
        color={"var(--main)"}
        loading={isLoading}
        cssOverride={{ marginTop: "5vw" }}
        size={50}
        speedMultiplier={1.5}
      ></BounceLoader>
      <Grid items={apiData} onDelete={deleteItemsFav}></Grid>
      <UserLog log={apiData} favPage={true} />
    </div>
  );
};

export default FavouritesPage;
