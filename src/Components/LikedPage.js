import Button from "./UI/Button";
import { useEffect } from "react";
import Grid from "./UI/GridLikes";
import { ReactComponent as Back } from "../assets/back.svg";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import BounceLoader from "react-spinners/BounceLoader";
import { MainContentContainer } from "./styles/globalstyles.styles";
import { PageNavBar } from "./PageNavBar/PageNavBar";
import { DefaultMessageWrapper } from "./LikedPage.styles";

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

  return (
    <MainContentContainer>
      <PageNavBar title={props.text} />

      <BounceLoader
        color={"var(--main)"}
        loading={isLoading}
        cssOverride={{ marginTop: "5vw" }}
        size={50}
        speedMultiplier={1.5}
      ></BounceLoader>

      {apiData ? (
        <Grid items={apiData}></Grid>
      ) : (
        <DefaultMessageWrapper>No items found</DefaultMessageWrapper>
      )}
    </MainContentContainer>
  );
};

export default LikedPage;
