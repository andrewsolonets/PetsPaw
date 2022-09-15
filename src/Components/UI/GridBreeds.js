import React from "react";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import {
  BreedsSingleCatLink,
  GridContainer,
  GridItemWrapper,
  LabelBreed,
  OverlayWrapper,
} from "./Grid.styles";

export default function Grid(props) {
  console.log(props.items);

  const favHandler = (id) => {
    props.onFav(id);
  };

  let contentPage = "";

  contentPage = (
    <GridContainer>
      {props?.items.map((el, i) => {
        if (
          (!props?.isLoading && el?.image?.url) ||
          (!props?.isLoading && el?.url)
        ) {
          return (
            <GridItemWrapper
              key={el.id}
              onClick={props.onPage ? favHandler.bind(null, el.id) : null}
            >
              {!props.isLoading ? (
                <img src={props.breed ? el.url : el.image.url} alt="asda"></img>
              ) : (
                ""
              )}
              {props.onPage ? (
                <OverlayWrapper data-index={i}>
                  <div id="heart">
                    <Heart></Heart>
                  </div>
                </OverlayWrapper>
              ) : (
                <BreedsSingleCatLink
                  data-index={i}
                  onClick={props.onCat}
                  to={`${el.id}/${i}`}
                >
                  <LabelBreed>
                    <p>{props.breed ? el?.breeds[0]?.name : el.name}</p>
                  </LabelBreed>
                </BreedsSingleCatLink>
              )}
            </GridItemWrapper>
          );
        }
      })}
    </GridContainer>
  );

  return <React.Fragment>{contentPage}</React.Fragment>;
}
