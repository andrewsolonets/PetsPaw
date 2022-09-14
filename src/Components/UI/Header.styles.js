import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1vw;

  @media (max-width: 764px) {
    margin-top: 3vw;
    flex-direction: column-reverse;
    justify-content: center;
    gap: 2vw;

    width: 100%;
  }
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  gap: 0.5vw;

  @media (max-width: 860px) {
    align-self: flex-end;
    width: 100%;
    justify-content: space-between;
    gap: 2vw;
  }
`;

export const BurgerWrapper = styled.div`
  @media (max-width: 860px) {
    display: flex;
    background: var(--backgroundBlock);
    border-radius: 20px;
    cursor: pointer;
    justify-self: flex-start;
    padding: 3vw;
  }
`;

export const NavLinksWrapperSecondary = styled.div`
  display: flex;
  gap: 0.5vw;
`;

export const NavLinkHeader = styled(NavLink)`
  display: flex;
  background: var(--backgroundBlock);
  border-radius: 2rem;
  cursor: pointer;

  padding: 1rem;
  align-items: center;
  justify-content: center;

  svg {
    align-items: center;
    justify-content: center;

    path {
      fill: var(--main);
    }
  }

  &:hover {
    background: var(--btnColor);
  }

  &:active {
    background: var(--main);
  }
  &:active svg path {
    fill: var(--textWhite);
  }

  &.active {
    background: var(--main);
    svg path {
      fill: var(--textWhite);
    }
  }
`;
