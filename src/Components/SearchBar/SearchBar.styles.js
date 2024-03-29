import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CardButton } from "../Button/Button.styles";

export const SearchWrapper = styled.div`
  @media (max-width: 37.5em) {
    width: 100%;
  }

  @media (min-width: 37.5em) and (max-width: 75em) {
    width: fit-content;
    left: 8rem;
    right: 2rem;
    position: absolute;
  }
`;

export const SearchBarForm = styled.form`
  position: relative;
  @media (max-width: 75em) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  font-size: 1.8rem;
  font-weight: 400;
  width: 35vw;
  padding: 1.3rem 2.8rem;

  background: ${({ theme }) => theme.backgroundBlock};
  border: 2px solid transparent;
  border-radius: 2rem;
  color: #8c8c8c;

  &:focus {
    outline-width: 0;
    border: 2px solid ${({ theme }) => theme.btnColor};
  }

  &:active {
    border-color: ${({ theme }) => theme.main};
  }
  @media (min-width: 37.5em) and (max-width: 42em) {
    width: 59vw;
    padding: 1.3rem 2rem;
  }
  @media (min-width: 42em) and (max-width: 50em) {
    width: 62vw;
    padding: 1.3rem 2rem;
  }
  @media (min-width: 50em) and (max-width: 60em) {
    width: 70vw;
    padding: 1.3rem 2rem;
  }
  @media (min-width: 60em) and (max-width: 75em) {
    width: 75vw;
    padding: 1.3rem 2rem;
  }
  @media (max-width: 22.5em) {
    width: 88%;
    padding: 1.3rem 2rem;
  }
  @media (min-width: 22.5em) and (max-width: 28.5em) {
    width: 92%;
    padding: 1.3rem 2rem;
  }
  @media (min-width: 28.5em) and (max-width: 37.5em) {
    width: 90vw;
    padding: 1.3rem 2rem;
  }

  ${(props) => (props.styleChange ? `border-color: #FF868E` : "")}
`;

export const SearchButtonLink = styled(NavLink)`
  position: absolute;
  bottom: 13%;
  right: 1vw;

  img {
    width: 1.39vw;
    height: 1.39vw;
  }

  svg {
    width: 1.85rem;
    height: 1.85rem;
  }

  @media (max-width: 75em) {
    position: absolute;

    bottom: 16%;
    right: 2.5vw;

    svg {
      width: 1.9rem;
      height: 1.9rem;
    }
    ${CardButton} {
      padding: 1rem;
    }
  }
`;
