import React from "react";
import "./Grid.css";
import heartFav1 from "../../assets/hearFav.png";
import { GridContainer, GridItemWrapper, OverlayWrapper } from "./Grid.styles";

export default function Grid(props) {
  const favHandler = (id) => {
    props.onDelete(id);
  };

  return (
    <GridContainer>
      {props.items.map((el, i) => {
        return (
          <GridItemWrapper key={el.id} onClick={favHandler.bind(null, el.id)}>
            <img src={el.image.url} alt="asda"></img>
            <OverlayWrapper>
              <div>
                <img src={heartFav1} alt="sds"></img>
              </div>
            </OverlayWrapper>
          </GridItemWrapper>
        );
      })}
    </GridContainer>
  );
}
