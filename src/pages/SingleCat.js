import Carousel from "../Components/UI/Slider";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import classes from "./BreedsPage.module.css";
import CardButton from "../Components/UI/CardButton";
import Button from "../Components/UI/Button";
import { ReactComponent as Back } from "../assets/back.svg";
import { useNavigate } from "react-router-dom";

const SingleCat = (props) => {
  const params = useParams();
  const [images, setImages] = useState();
  let navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  };

  const getImages = useCallback(async () => {
    if (!props.items[params.id].url) {
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search/?` +
            new URLSearchParams({
              limit: 5,
              breed_ids: props.items[params.id].id,
            }),
          {
            headers: {
              "x-api-key": "4072d7cf-ded4-47a3-bf51-39851c2428b8",
            },
          }
        );
        const data = await response.json();
        setImages(data);
      } catch (err) {
        console.error(err);
      }
    } else {
      setImages(props.items);
    }
  }, [props.items, params.id]);

  useEffect(() => {
    getImages();
  }, [getImages]);

  return (
    <div className={classes.containerMain}>
      <div className={classes["nav-content"]}>
        <CardButton onClick={backHandler}>
          <Back className={classes.back} />
        </CardButton>
        <Button style={{ background: "var(--textBlack)" }}>BREEDS</Button>
        <div className={classes.catId}>{params.cat}</div>
      </div>
      <div className="singleCat">
        <div className="parentImg">
          <div className="containerImg">
            <Carousel images={images}></Carousel>
          </div>
        </div>
        <div className="ContentContainer">
          <div className="headingCat">
            {props.breed
              ? props.items[params.id].breeds[0].name
              : props.items[params.id].name}
          </div>

          <div className="catDesc">
            <div className="mainDescr">
              {props.breed
                ? props.items[params.id].breeds[0].description
                : props.items[params.id].description}
            </div>
            <div className="propsContainer">
              <div className="textDescr">
                <p>
                  <b>Temperament:</b>
                  <br></br>
                  {props.breed
                    ? props.items[params.id].breeds[0].temperament
                    : props.items[params.id].temperament}
                </p>
              </div>

              <div className="textDescr">
                <p>
                  <b>Origin:</b>{" "}
                  {props.breed
                    ? props.items[params.id].breeds[0].origin
                    : props.items[params.id].origin}
                  <br></br>
                  <b>Weight:</b>{" "}
                  {`${
                    props.breed
                      ? props.items[params.id].breeds[0].weight.metric
                      : props.items[params.id].weight.metric
                  } kgs`}
                  <br></br>
                  <b>Life span:</b>{" "}
                  {`${
                    props.breed
                      ? props.items[params.id].breeds[0].life_span
                      : props.items[params.id].life_span
                  } years`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCat;
