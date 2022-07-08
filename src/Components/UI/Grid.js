import React from "react";
import "./Grid.css";
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
  ];

  const favHandler = (id) => {
    props.onDelete(id);
  };

  return (
    <div className="container">
      {props.items.map((el, i) => {
        return (
          <div
            className={gridItems[i]}
            key={el.id}
            onClick={favHandler.bind(null, el.id)}
          >
            <img src={el.image.url} alt="asda"></img>
            <div className="overlay">
              <div>
                <img src={heartFav1} alt="sds"></img>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
