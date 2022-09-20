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
    background-color: ${({ theme }) => theme.bg};

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
    background: ${({ theme }) => theme.backgroundBlock};
    border-radius: 5px;
  }

  p {
    font-size: 1.8rem;
    text-align: center;
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.main};
  }

  @media (min-width: 37.5em) and (max-width: 75em) {
    p {
      font-size: 4rem;
      padding: 2rem;
    }
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
    color: ${({ theme }) => theme.textWhite};
    opacity: 1;
    border-radius: 20px;
    background: rgba(255, 134, 142, 0.6);
  }

  &:hover ${BreedsSingleCatLink} {
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.bg};
    opacity: 1;
    border-radius: 20px;
    background: rgba(255, 134, 142, 0.6);
    align-items: flex-end;
  }
`;

export const GridContainer = styled.div`
  width: 70rem;
  display: grid;
  height: auto;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(6, 14rem);
  grid-auto-rows: 14rem;

  @media (max-width: 27.5em) {
    grid-template-columns: 1fr;
    width: 100%;
    grid-template-rows: repeat(6, 30rem);
    grid-auto-rows: 30rem;
  }

  @media (min-width: 27.5em) and (max-width: 37.5em) {
    grid-template-columns: 1fr;
    width: 100%;
    grid-template-rows: repeat(6, 35rem);
    grid-auto-rows: 35rem;
  }

  @media (min-width: 37.5em) and (max-width: 75em) {
    grid-template-columns: 1fr;
    width: 100%;
    grid-template-rows: repeat(6, 50rem);
    grid-auto-rows: 50rem;
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
