import { MainContentContainer } from "./styles/globalstyles.styles";
import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import Grid from "./UI/Grid";

import BounceLoader from "react-spinners/BounceLoader";

import UserLog from "../pages/UserLog";
import { PageNavBar } from "./PageNavBar/PageNavBar";

const FavouritesPage = (props) => {
  console.log("render");

  const { apiData, isLoading, postAction, fetchData } = useFetch(
    `favourites/?`,
    { order: "DESC", limit: 10 },
    null,
    "get"
  );

  useEffect(() => {
    fetchData();
  }, []);

  const deleteItemsFav = (id) => {
    postAction(`favourites/${id}`, {}, null, "delete");
  };

  return (
    <MainContentContainer>
      <PageNavBar title={"FAVOURITES"} />

      <BounceLoader
        color={"var(--main)"}
        loading={isLoading}
        cssOverride={{ marginTop: "5vw" }}
        size={50}
        speedMultiplier={1.5}
      ></BounceLoader>
      <Grid items={apiData} onAction={deleteItemsFav} page={"fav"}></Grid>
      <UserLog log={apiData} favPage={true} />
    </MainContentContainer>
  );
};

export default FavouritesPage;
