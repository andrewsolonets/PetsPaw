import React from "react";
import "./GridBreeds.css";

import { ReactComponent as Heart } from "../../assets/heart.svg";
import { NavLink } from "react-router-dom";

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

  const favHandler = (id) => {
    props.onFav(id);
  };

  let contentPage = "";

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
              onClick={props.onPage ? favHandler.bind(null, el.id) : null}
            >
              {!props.isLoading ? (
                <img src={props.breed ? el.url : el.image.url} alt="asda"></img>
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
                <NavLink
                  className="overlay1"
                  data-index={i}
                  onClick={props.onCat}
                  to={`${el.id}/${i}`}
                >
                  <div className="label1">
                    <p>{props.breed ? el?.breeds[0]?.name : el.name}</p>
                  </div>
                </NavLink>
              )}
            </div>
          );
        }
        return "";
      })}
    </div>
  );

  return <React.Fragment>{contentPage}</React.Fragment>;
}
