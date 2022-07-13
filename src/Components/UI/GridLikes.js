import React from "react";
import "./Grid.css";
import testImg from "../../assets/testImg.png";
import heartFav1 from "../../assets/hearFav.png";

export default function Grid(props) {
  console.log(props.items);
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

  // const favHandler = (id) => {
  //   props.onDelete(id);
  // };

  let content;

  if (props.searchPage) {
    content = props.items.map((el, i) => {
      return (
        <div
          className={gridItems[i]}
          key={el.id}
          // onClick={favHandler.bind(null, el.id)}
        >
          <img src={el.url} alt="asda"></img>

          <div className="overlay1" data-index={i}>
            <div className="label1">
              <p>{el.breeds[0].name}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  if (!props.searchPage) {
    content = props.items.map((el, i) => {
      return (
        <div
          className={gridItems[i]}
          key={el.id}
          // onClick={favHandler.bind(null, el.id)}
        >
          <img src={el.url} alt="asda"></img>
        </div>
      );
    });
  }
  return <div className="container">{content}</div>;
}
