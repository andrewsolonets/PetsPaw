import classes from "./FavouritesPage.module.css";
import Button from "./UI/Button";
import CardButton from "./UI/CardButton";
import backArrow from "../assets/backArrow.png";
import { useCallback, useEffect, useState } from "react";
import Grid from "./UI/GridLikes";

const LikedPage = (props) => {
  const [likedItems, setLikedItems] = useState([]);
  const [dislikedItems, setDislikedItems] = useState([]);

  const getLikes = useCallback(async () => {
    const imgsGet = async (id) => {
      const response2 = await fetch(
        `https://api.thecatapi.com/v1/images/${id}`,
        {
          headers: {
            "x-api-key": "4072d7cf-ded4-47a3-bf51-39851c2428b8",
          },
        }
      );
      const data2 = await response2.json();
      if (props.value === 1) {
        setLikedItems((prevSt) => {
          return [...prevSt, data2];
        });
      }
      if (props.value === 0) {
        setDislikedItems((prevSt) => {
          return [...prevSt, data2];
        });
      }
    };

    const response = await fetch(
      "https://api.thecatapi.com/v1/votes/?" +
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

    const boolArray = await Promise.all(
      data.map((el) => el.value === props.value)
    );

    const final = data.filter((el, i) => boolArray[i]);

    final.forEach(async (el) => {
      const data = await imgsGet(el.image_id);
      return data;
    });

    // setLikedItems(final);
  }, [props.value]);

  useEffect(() => {
    setLikedItems([]);
    setDislikedItems([]);
    getLikes();
  }, [getLikes]);

  console.log(likedItems);

  return (
    <div className={classes.containerMain}>
      <div className={classes["nav-content"]}>
        <CardButton onClick={props.onBack}>
          <img src={backArrow} alt="back arrow"></img>
        </CardButton>
        <Button>{props.text}</Button>
      </div>
      <Grid items={props.value === 1 ? likedItems : dislikedItems}></Grid>
      {/* <div className={classes.itemsParent}>
        <div className={classes.item}></div>
        <div className={classes.item2}></div>
        <div className={classes.item2}></div>
      </div> */}
    </div>
  );
};

export default LikedPage;
