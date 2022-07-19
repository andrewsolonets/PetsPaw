import classes from "./FavouritesPage.module.css";
import Button from "./UI/Button";
import CardButton from "./UI/CardButton";
import { useCallback, useEffect, useState } from "react";
import Grid from "./UI/GridLikes";
import { ReactComponent as Back } from "../assets/back.svg";
import { useParams, useNavigate } from "react-router-dom";

import BounceLoader from "react-spinners/BounceLoader";

const SearchPage = (props) => {
  const params = useParams();

  console.log(params.searchItem);
  const [isLoading, setIsLoading] = useState(true);
  const [searchItems, setSearchItems] = useState();

  const getSearchResults = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/breeds/search/?q=${params.searchItem}`,
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
  }, [params.searchItem]);

  useEffect(() => {
    getSearchResults();
  }, [getSearchResults]);

  let navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  };

  const singleSearch = () => {
    console.log(searchItems);
    props.onClick({ results: searchItems, breed: true });
  };

  return (
    <div className={classes.containerMain}>
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
    </div>
  );
};

export default SearchPage;
