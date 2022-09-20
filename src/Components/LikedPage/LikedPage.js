import { useEffect } from "react";
import Grid from "../Grid/Grid";
import { useFetch } from "../../hooks/useFetch";
import BounceLoader from "react-spinners/BounceLoader";
import { MainContentContainer } from "../styles/globalstyles.styles";
import { PageNavBar } from "../PageNavBar/PageNavBar";
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
        color={"#FF868E"}
        loading={isLoading}
        cssOverride={{ marginTop: "5vw" }}
        size={50}
        speedMultiplier={1.5}
      ></BounceLoader>

      {apiData ? (
        <Grid items={apiData} page={"liked"}></Grid>
      ) : (
        <DefaultMessageWrapper>No items found</DefaultMessageWrapper>
      )}
    </MainContentContainer>
  );
};

export default LikedPage;
