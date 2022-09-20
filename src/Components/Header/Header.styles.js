import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  @media (max-width: 37.5em) {
    flex-direction: row;
  }

  @media (max-width: 75em) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 2vw;

    width: 100%;
  }
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 75em) {
    align-self: flex-end;
    width: 100%;
    justify-content: space-between;
    gap: 0;
  }
`;

export const BurgerWrapper = styled.div`
  @media (max-width: 75em) {
    display: flex;
    background: ${({ theme }) => theme.backgroundBlock};
    border-radius: 2rem;
    cursor: pointer;
    justify-self: flex-start;
    padding: 1.3rem;
  }
`;

export const NavLinksWrapperSecondary = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NavLinkHeader = styled(NavLink)`
  display: flex;
  background: ${({ theme }) => theme.backgroundBlock};
  border-radius: 2rem;
  cursor: pointer;

  padding: 1.3rem;
  align-items: center;
  justify-content: center;

  svg {
    width: 3rem;
    align-items: center;
    justify-content: center;

    path {
      fill: ${({ theme }) => theme.main};
    }
  }

  &:hover {
    background: ${({ theme }) => theme.btnColor};
  }

  &:active {
    background: ${({ theme }) => theme.main};
  }
  &:active svg path {
    fill: ${({ theme }) => theme.textWhite};
  }

  &.active {
    background: ${({ theme }) => theme.main};
    svg path {
      fill: ${({ theme }) => theme.textWhite};
    }
  }
`;
