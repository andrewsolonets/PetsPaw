import classes from "./FavouritesPage.module.css";
import Button from "./UI/Button";
import CardButton from "./UI/CardButton";
import backArrow from "../assets/backArrow.png";
import UserLogItem from "./UserLogItem";
import { useEffect, useState } from "react";
import Grid from "./UI/Grid";

const FavouritesPage = (props) => {
  const [favItems, setFavItems] = useState([]);

  const getFavourites = async () => {
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
          <img src={backArrow} alt="back arrow"></img>
        </CardButton>
        <Button>FAVOURITES</Button>
      </div>
      <Grid items={favItems} onDelete={deleteItemsFav}></Grid>
      {/* <div className={classes.itemsParent}>
        <div className={classes.item}></div>
        <div className={classes.item2}></div>
        <div className={classes.item2}></div>
      </div> */}
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
