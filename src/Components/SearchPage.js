import classes from "./FavouritesPage.module.css";
import Button from "./UI/Button";
import CardButton from "./UI/CardButton";
import backArrow from "../assets/backArrow.png";
import { useCallback, useEffect, useState } from "react";
import Grid from "./UI/GridLikes";
import { ReactComponent as Back } from "../assets/back.svg";

import BounceLoader from "react-spinners/BounceLoader";

const SearchPage = (props) => {
  console.log(props.query);
  const [isLoading, setIsLoading] = useState(true);
  const [searchItems, setSearchItems] = useState();

  const getSearchResults = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/breeds/search/?q=${props.query}`,
        {
          headers: {
            "x-api-key": "4072d7cf-ded4-47a3-bf51-39851c2428b8",
          },
        }
      );
      console.log(response);
      const data = await response.json();
      console.log(data[0]);
      if (!data[0]) {
        setSearchItems();
        setIsLoading(false);
        return;
      }

      const getImgs = async () => {
        const response2 = await fetch(
          `https://api.thecatapi.com/v1/images/${data[0].reference_image_id}`,
          {
            headers: {
              "x-api-key": "4072d7cf-ded4-47a3-bf51-39851c2428b8",
            },
          }
        );
        console.log(response2);
        if (!response2.ok) {
          console.log("errr");
        }
        const data2 = await response2.json();
        setSearchItems(data2);
        console.log(data2);
        setIsLoading(false);
      };
      getImgs();
    } catch (err) {
      console.log(err);
    }
  }, [props.query]);

  useEffect(() => {
    getSearchResults();
  }, [getSearchResults]);

  return (
    <div className={classes.containerMain}>
      <div className={classes["nav-content"]}>
        <CardButton onClick={props.onBack}>
          <Back className={classes.back} />
        </CardButton>
        <Button>{props.text}</Button>
      </div>
      <p className={classes.searchP}>
        Search results for:<b>{` ${props.query}`}</b>
      </p>
      <BounceLoader
        color={"#FF868E"}
        loading={isLoading}
        cssOverride={{ marginTop: "5vw" }}
        size={50}
        speedMultiplier={1.5}
      ></BounceLoader>
      {!isLoading && searchItems && (
        <Grid
          items={[searchItems]}
          isLoading={isLoading}
          searchPage={true}
        ></Grid>
      )}
    </div>
  );
};

export default SearchPage;
