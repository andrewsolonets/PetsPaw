import classes from "./FavouritesPage.module.css";
import Button from "./UI/Button";
import CardButton from "./UI/CardButton";

import UserLogItem from "./UserLogItem";
import { useEffect, useState } from "react";
import Grid from "./UI/Grid";
import { ReactComponent as Back } from "../assets/back.svg";
import BounceLoader from "react-spinners/BounceLoader";

const FavouritesPage = (props) => {
  const [favItems, setFavItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getFavourites = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://api.thecatapi.com/v1/favourites/?" +
        new URLSearchParams({
          order: "DESC",
          limit: 10,
        }),
      {
        headers: {
          "x-api-key": "4072d7cf-ded4-47a3-bf51-39851c2428b8",
        },
      }
    );
    const data = await response.json();
    setFavItems(data);
    console.log(favItems);
    setIsLoading(false);
  };
  const deleteItemsFav = async (id) => {
    const response = await fetch(
      `https://api.thecatapi.com/v1/favourites/${id}`,
      {
        method: "DELETE",
        headers: {
          "x-api-key": "4072d7cf-ded4-47a3-bf51-39851c2428b8",
        },
      }
    );
    console.log(response);
    getFavourites();
    // getFavourites();
  };

  useEffect(() => {
    getFavourites();
  }, []);

  return (
    <div className={classes.containerMain}>
      <div className={classes["nav-content"]}>
        <CardButton>
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
      <Grid items={favItems} onDelete={deleteItemsFav}></Grid>
      <div className={classes.userLog}>
        {favItems.map((el) => {
          return (
            <UserLogItem
              key={el.id}
              catId={el.image_id}
              value={el.value}
              time={el.created_at}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FavouritesPage;
