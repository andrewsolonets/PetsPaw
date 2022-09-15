import React from "react";
import "./Grid.css";
import {
  BreedsSingleCatLink,
  GridContainer,
  GridItemWrapper,
} from "./Grid.styles";

export default function Grid(props) {
  console.log(props.items);

  // const favHandler = (id) => {
  //   props.onDelete(id);
  // };

  let content;

  if (props.searchPage) {
    content = props.items.map((el, i) => {
      console.log(el);
      return (
        <GridItemWrapper
          key={el.id}
          // onClick={favHandler.bind(null, el.id)}
        >
          <img src={el.url} alt="asda"></img>

          <BreedsSingleCatLink
            onClick={props.onSingle}
            data-index={i}
            to={`/breeds/${el.breeds[0].id}/${i}`}
          >
            <div className="label1">
              <p>{el.breeds[0].name}</p>
            </div>
          </BreedsSingleCatLink>
        </GridItemWrapper>
      );
    });
  }

  if (!props.searchPage) {
    content = props.items.map((el, i) => {
      return (
        <GridItemWrapper
          key={el.id}
          // onClick={favHandler.bind(null, el.id)}
        >
          <img src={el.url} alt="asda"></img>
        </GridItemWrapper>
      );
    });
  }
  return <GridContainer>{content}</GridContainer>;
}
