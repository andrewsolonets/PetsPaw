import classes from "./FavouritesPage.module.css";
import Button from "./UI/Button";
import CardButton from "./UI/CardButton";
import { useEffect } from "react";
import Grid from "./UI/GridLikes";
import { ReactComponent as Back } from "../assets/back.svg";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import BounceLoader from "react-spinners/BounceLoader";
import { MainContentContainer } from "./styles/globalstyles.styles";
import { PageNavBar } from "./PageNavBar/PageNavBar";

const LikedPage = (props) => {
  const { apiData, isLoading, fetchData } = useFetch(
    `votes/?`,
    { order: "DESC", limit: 10 },
    null,
    "get",
    "likedFilter",
    props.value
  );

  useEffect(() => {
    fetchData();
  }, [props.value]);

  let navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  };

  return (
    <MainContentContainer>
      <PageNavBar backHandler={backHandler} title={props.text} />

      <BounceLoader
        color={"var(--main)"}
        loading={isLoading}
        cssOverride={{ marginTop: "5vw" }}
        size={50}
        speedMultiplier={1.5}
      ></BounceLoader>

      <Grid items={apiData}></Grid>
    </MainContentContainer>
  );
};

export default LikedPage;
