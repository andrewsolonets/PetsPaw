import styled from "styled-components";

import TextLogo from "./assets/PetsPaw.svg";

export const MainContainer = styled.div`
  display: flex;
  @media (max-width: 37.5em) {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const FixedMainContainer = styled.div`
  position: fixed;
  top: 13rem;
  left: 7rem;
  @media (max-width: 37.5em) {
    position: initial;
    width: 100%;
    top: 8rem;
    left: 3rem;
  }
`;

export const LogoSwitchContainer = styled.div`
  display: flex;
  gap: 0.5vw;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: auto;
  left: 7rem;
  top: 2.8rem;
  @media (max-width: 37.5em) {
    left: 2.2rem;
    width: 25vw;
    top: 1.7rem;
  }
`;

export const LogoContainerLink = styled(Link)`
  svg:first-child {
    width: 2.4rem;
  }

  display: flex;
  gap: 0.5vw;
  justify-content: center;
  align-items: center;

  @media (max-width: 37.5em) {
    gap: 0.5rem;
  }
`;

export const TextLogoContainer = styled(TextLogo)`
  width: 7.5rem;
  path {
    fill: ${({ theme }) => theme.textMain};
  }
`;

export const SwitchContainer = styled.label`
  position: fixed;
  left: 40%;
  display: inline-block;
  width: 4.4rem;
  height: 2.4rem;

  @media (max-width: 62em) {
    left: 80%;
  }

  input {
    opacity: 0;
    width: 4.4rem;
    &:checked ~ span {
      background-color: ${({ theme }) => theme.btnColor};
    }
    &:checked ~ span:before {
      -webkit-transform: translateX(2rem);
      -ms-transform: translateX(2rem);
      transform: translateX(2rem);
    }
    &:focus ~ span {
      box-shadow: 0 0 1px ${({ theme }) => theme.btnColor};
    }
  }
  span {
    border-radius: 3.4rem;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.btnColor};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    &:before {
      position: absolute;
      content: "";
      height: 1.6rem;
      width: 1.6rem;
      left: 0.4rem;
      bottom: 0.4rem;
      background-color: ${({ theme }) => theme.main};
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }
  }
`;

export const SearchParagraph = styled.p`
  margin-left: 1vw;
  align-self: flex-start;
`;
