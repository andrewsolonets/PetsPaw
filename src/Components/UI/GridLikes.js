import React from "react";
import { NavLink } from "react-router-dom";
import "./Grid.css";

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
      console.log(el);
      return (
        <div
          className={gridItems[i]}
          key={el.id}
          // onClick={favHandler.bind(null, el.id)}
        >
          <img src={el.url} alt="asda"></img>

          <NavLink
            className="overlay1"
            onClick={props.onSingle}
            data-index={i}
            to={`/breeds/${el.breeds[0].id}/${i}`}
          >
            <div className="label1">
              <p>{el.breeds[0].name}</p>
            </div>
          </NavLink>
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
