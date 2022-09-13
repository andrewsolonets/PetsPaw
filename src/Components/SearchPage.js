import classes from "./FavouritesPage.module.css";
import Button from "./UI/Button";
import CardButton from "./UI/CardButton";
import { useEffect } from "react";
import Grid from "./UI/GridLikes";
import { ReactComponent as Back } from "../assets/back.svg";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { MainContentContainer } from "./styles/globalstyles.styles";

import BounceLoader from "react-spinners/BounceLoader";

const SearchPage = (props) => {
  const params = useParams();

  console.log(params.searchItem);

  const {
    apiData: searchItems,
    isLoading,
    fetchData,
  } = useFetch(
    `breeds/search/?q=${params.searchItem}`,
    {},
    null,
    "get",
    "search"
  );

  useEffect(() => {
    fetchData();
  }, [params.searchItem]);

  let navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  };

  const singleSearch = () => {
    props.onClick({ results: searchItems, breed: true, search: true });
  };

  return (
    <MainContentContainer>
      <div className={classes["nav-content"]}>
        <CardButton onClick={backHandler}>
          <Back className={classes.back} />
        </CardButton>
        <Button>{props.text}</Button>
      </div>
      <p className={classes.searchP}>
        Search results for:<b>{` ${params.searchItem}`}</b>
      </p>
      <BounceLoader
        color={"var(--main)"}
        loading={isLoading}
        cssOverride={{ marginTop: "5vw" }}
        size={50}
        speedMultiplier={1.5}
      ></BounceLoader>
      {!isLoading && searchItems && (
        <Grid
          onSingle={singleSearch}
          items={[searchItems]}
          isLoading={isLoading}
          searchPage={true}
        ></Grid>
      )}
    </MainContentContainer>
  );
};

export default SearchPage;
