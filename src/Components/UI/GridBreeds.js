import React from "react";
import "./GridBreeds.css";
import testImg from "../../assets/testImg.png";
import heartFav1 from "../../assets/hearFav.png";

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

  return (
    <div className={`${props.limit > 10 ? "container1" : "container"}`}>
      {props?.items.map((el, i) => {
        return (
          <div className={gridItems[i]} key={el.id}>
            {!props.isLoading ? (
              <img src={props.breed ? el.url : el.image.url} alt="asda"></img>
            ) : (
              ""
            )}
            <div className="overlay1">
              <div className="label1">
                <p>{props.breed ? el?.breeds[0]?.id : el.name}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
