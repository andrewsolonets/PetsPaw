import React, { useState } from "react";

import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as Heart1 } from "../../assets/heart1.svg";
import {
  BreedsSingleCatLink,
  GridContainer,
  GridItemWrapper,
  HeartWrapper,
  LabelBreed,
  OverlayWrapper,
} from "./Grid.styles";

export default function Grid({
  onAction,
  items,
  page,
  onSingle,
  isLoading,
  onPage,
  breed,
  onCat,
}) {
  const [liked, setLiked] = useState([]);
  const actionHandler = (id) => {
    onAction(id);
    if (page === "gallery" || page === "fav") {
      setLiked((prevState) => [...prevState, id]);
    }
  };

  let content;
  if (page === "search") {
    content = items.map((el, i) => {
      return (
        <GridItemWrapper key={el.id}>
          <img src={el.url} alt="asda"></img>

          <BreedsSingleCatLink
            onClick={onSingle}
            data-index={i}
            to={`/breeds/${el.breeds[0].id}/${i}`}
          >
            <LabelBreed>
              <p>{el.breeds[0].name}</p>
            </LabelBreed>
          </BreedsSingleCatLink>
        </GridItemWrapper>
      );
    });
  }

  if (page === "liked") {
    content = items.map((el, i) => {
      return (
        <GridItemWrapper key={el.id}>
          <img src={el.url} alt="asda"></img>
        </GridItemWrapper>
      );
    });
  }

  if (page === "breeds" || page === "gallery") {
    content = items?.map((el, i) => {
      if ((!isLoading && el?.image?.url) || (!isLoading && el?.url)) {
        return (
          <GridItemWrapper
            key={el.id}
            onClick={onPage ? actionHandler.bind(null, el.id) : null}
          >
            {!isLoading ? (
              <img src={breed ? el.url : el.image.url} alt="asda"></img>
            ) : (
              ""
            )}
            {onPage ? (
              <OverlayWrapper data-index={i}>
                <HeartWrapper>
                  {liked.includes(el.id) ? <Heart1 /> : <Heart />}
                </HeartWrapper>
              </OverlayWrapper>
            ) : (
              <BreedsSingleCatLink
                data-index={i}
                onClick={onCat}
                to={`${el.id}/${i}`}
              >
                <LabelBreed>
                  <p>{breed ? el?.breeds[0]?.name : el.name}</p>
                </LabelBreed>
              </BreedsSingleCatLink>
            )}
          </GridItemWrapper>
        );
      }
      return "";
    });
  }

  if (page === "fav") {
    content = items.map((el, i) => {
      return (
        <GridItemWrapper key={el.id} onClick={actionHandler.bind(null, el.id)}>
          <img src={el.image.url} alt="asda"></img>
          <OverlayWrapper>
            <HeartWrapper>
              {liked.includes(el.id) ? <Heart /> : <Heart1 />}
            </HeartWrapper>
          </OverlayWrapper>
        </GridItemWrapper>
      );
    });
  }
  return <GridContainer>{content}</GridContainer>;
}
