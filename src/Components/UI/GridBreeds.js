import React from "react";
import "./GridBreeds.css";

import { useState } from "react";
import Carousel from "./Slider";
import { useCallback } from "react";
import { ReactComponent as Heart } from "../../assets/heart.svg";

export default function Grid(props) {
  const gridItems = [
    "frst",
    "sec",
    "thrd",
    "fourth",
    "s1",
    "s2",
    "s3",
    "m1",
    "b2",
    "sl",
    "frst2",
    "sec2",
    "thrd2",
    "fourh2",
    "s11",
    "s22",
    "s33",
    "m11",
    "b22",
    "sll",
    "frst3",
    "sec3",
    "thrd3",
    "foruth3",
    "s111",
  ];

  const [windowcat, setWindowCat] = useState(false);
  const [index, setIndex] = useState();
  const [images, setImages] = useState();

  const getImages = useCallback(
    async (index) => {
      if (!props.items[index].url) {
        console.log(props.items);
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search/?` +
            new URLSearchParams({
              limit: 5,
              breed_ids: props.items[index].id,
            }),
          {
            headers: {
              "x-api-key": "4072d7cf-ded4-47a3-bf51-39851c2428b8",
            },
          }
        );
        const data = await response.json();
        console.log(data);
        setImages(data);
      } else {
        setImages(props.items);
      }
    },
    [props.items]
  );

  const openCatHandler = (el) => {
    props.onAction(
      props.breed
        ? props.items[el.target.dataset.index].breeds[0].id
        : props.items[el.target.dataset.index].id
    );
    getImages(el.target.dataset.index);
    setIndex(el.target.dataset.index);
    setWindowCat(true);
  };

  const favHandler = (id) => {
    props.onFav(id);
  };

  let contentPage = "";

  if (windowcat && !props?.isLoading && props.items[index] && images) {
    contentPage = (
      <div className="singleCat">
        <div className="parentImg">
          <div className="containerImg">
            <Carousel images={images}></Carousel>
          </div>
        </div>
        <div className="ContentContainer">
          <div className="headingCat">
            {props.breed
              ? props.items[index].breeds[0].name
              : props.items[index].name}
          </div>

          <div className="catDesc">
            <div className="mainDescr">
              {props.breed
                ? props.items[index].breeds[0].description
                : props.items[index].description}
            </div>
            <div className="propsContainer">
              <div className="textDescr">
                <p>
                  <b>Temperament:</b>
                  <br></br>
                  {props.breed
                    ? props.items[index].breeds[0].temperament
                    : props.items[index].temperament}
                </p>
              </div>

              <div className="textDescr">
                <p>
                  <b>Origin:</b>{" "}
                  {props.breed
                    ? props.items[index].breeds[0].origin
                    : props.items[index].origin}
                  <br></br>
                  <b>Weight:</b>{" "}
                  {`${
                    props.breed
                      ? props.items[index].breeds[0].weight.metric
                      : props.items[index].weight.metric
                  } kgs`}
                  <br></br>
                  <b>Life span:</b>{" "}
                  {`${
                    props.breed
                      ? props.items[index].breeds[0].life_span
                      : props.items[index].life_span
                  } years`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    contentPage = (
      <div className={`${props.limit > 10 ? "container1" : "container"}`}>
        {props?.items.map((el, i) => {
          if (
            (!props?.isLoading && el?.image?.url) ||
            (!props?.isLoading && el?.url)
          ) {
            return (
              <div
                className={gridItems[i]}
                key={el.id}
                onClick={
                  props.onPage ? favHandler.bind(null, el.id) : openCatHandler
                }
              >
                {!props.isLoading ? (
                  <img
                    src={props.breed ? el.url : el.image.url}
                    alt="asda"
                  ></img>
                ) : (
                  ""
                )}
                {props.onPage ? (
                  <div className="overlay" data-index={i}>
                    <div id="heart">
                      <Heart className="heartSvg"></Heart>
                    </div>
                  </div>
                ) : (
                  <div className="overlay1" data-index={i}>
                    <div className="label1">
                      <p>{props.breed ? el?.breeds[0]?.name : el.name}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          }
          return "";
        })}
      </div>
    );
  }

  return <React.Fragment>{contentPage}</React.Fragment>;
}
