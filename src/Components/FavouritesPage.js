import classes from "./FavouritesPage.module.css";
import Button from "./UI/Button";
import CardButton from "./UI/CardButton";
import backArrow from "../assets/backArrow.png";
import UserLogItem from "./UserLogItem";
import { useEffect } from "react";

const FavouritesPage = (props) => {
  const getFavourites = async () => {
    const response = await fetch(
      "https://api.thecatapi.com/v1/favourites/?" +
        new URLSearchParams({
          order: "DESC",
        }),
      {
        headers: {
          "x-api-key": "4072d7cf-ded4-47a3-bf51-39851c2428b8",
        },
      }
    );
    const data = await response.json();
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
      <div className={classes.itemsParent}>
        <div className={classes.item}></div>
        <div className={classes.item2}></div>
        <div className={classes.item2}></div>
      </div>
      <div className={classes.userLog}>
        <UserLogItem />
        {/* {userLog.map((el) => {
          return (
            <UserLogItem
              key={el.id}
              catId={el.image_id}
              value={el.value}
              time={el.created_at}
            />
          );
        })} */}
      </div>
    </div>
  );
};

export default FavouritesPage;
