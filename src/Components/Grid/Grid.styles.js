import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const OverlayWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  opacity: 0;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 1rem;
    background-color: white;

    img {
      width: 2vw;
      padding: 1vw;
    }
  }

  @media (max-width: 1023px) {
    div img {
      width: 8vw;
      padding: 2vw;
    }
  }
`;

export const HeartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 1rem;
  background-color: white;
`;

export const BreedsSingleCatLink = styled(NavLink)`
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  opacity: 0;

  div {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 1vw;
    background: var(--textWhite);
    border-radius: 5px;
  }

  p {
    font-size: 1.4vw;
    text-align: center;
    padding-top: 0.2vw;
    padding-bottom: 0.2vw;

    padding-left: 2vw;
    padding-right: 2vw;
    color: var(--main);
  }
`;

export const GridItemWrapper = styled.div`
  position: relative;
  width: auto;
  min-height: 14rem;
  border-radius: 2rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    /* object-position: */
  }
  cursor: pointer;
  border-radius: 2rem;
  &:hover ${OverlayWrapper} {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    opacity: 1;
    border-radius: 20px;
    background: rgba(255, 134, 142, 0.6);
  }

  &:hover ${BreedsSingleCatLink} {
    display: flex;
    justify-content: center;
    color: white;
    opacity: 1;
    border-radius: 20px;
    background: rgba(255, 134, 142, 0.6);
    align-items: flex-end;
  }
`;

export const GridContainer = styled.div`
  width: 68rem;
  display: grid;
  height: auto;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(6, 14rem);
  grid-auto-rows: 14rem;

  @media (max-width: 37.5em) {
    grid-template-columns: 1fr;
    width: 100%;
    grid-template-rows: repeat(6, 20rem);
    grid-auto-rows: 20rem;
  }

  @media (min-width: 37.5em) and (max-width: 75em) {
    grid-template-columns: 1fr;
    width: 100%;
    grid-template-rows: repeat(6, 30rem);
    grid-auto-rows: 30rem;
  }

  @media (min-width: 56.26em) {
    ${GridItemWrapper}:nth-of-type(10n + 1) {
      grid-row-start: span 2;
    }

    ${GridItemWrapper}:nth-of-type(10n + 4) {
      grid-column-start: span 2;
      grid-row-start: span 2;
    }

    ${GridItemWrapper}:nth-of-type(10n + 8) {
      grid-row-start: span 2;
    }
    ${GridItemWrapper}:nth-of-type(10n + 9) {
      grid-column-start: span 2;
      grid-row-start: span 2;
    }
  }
`;

export const LabelBreed = styled.div`
  p {
    cursor: pointer;
    border-radius: 10px;
  }
`;
