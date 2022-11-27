import { MainContentContainer } from "../components/styles/globalstyles.styles";
import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import Grid from "../components/Grid/Grid";

import BounceLoader from "react-spinners/BounceLoader";

import UserLog from "../components/UserLog/UserLog";
import { PageNavBar } from "../components/PageNavBar/PageNavBar";

const FavouritesPage = (props) => {
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
        color={"#FF868E"}
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
