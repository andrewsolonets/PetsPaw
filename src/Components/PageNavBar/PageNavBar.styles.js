import styled from "styled-components";
import { ReactComponent as Back } from "../../assets/back.svg";
import Button from "../UI/Button";

export const NavWrapper = styled.div`
  align-self: flex-start;
  display: flex;
  gap: 0.8vw;

  @media (max-width: 425px) {
    gap: 2vw;
  }
`;

export const NavTitle = styled(Button)`
  color: var(--textWhite);
  background: var(--main);
  padding-left: 3vw;
  padding-right: 3vw;
  font-size: 1.389vw;

  &:hover {
    color: var(--textWhite);
    background: var(--main);
  }

  @media (max-width: 425px) {
    color: var(--textWhite);
    background: var(--main);
    padding-left: 6vw;
    padding-right: 6vw;
    padding-top: 2vw;
    padding-bottom: 2vw;
    font-size: 5vw;
    border-radius: 10px;
    letter-spacing: 2px;
  }

  @media (min-width: 430px) and (max-width: 860px) {
    color: var(--textWhite);
    background: var(--main);
    padding-left: 3vw;
    padding-right: 3vw;
    font-size: 3vw;
  }
`;

export const NavButton = styled(Back)`
  width: 0.833vw;
  height: 1.389vw;
  padding-left: 0.2vw;
  padding-right: 0.3vw;

  @media (max-width: 425px) {
    width: 2.933vw;
    height: 6vw;
    padding-left: 2vw;
    padding-right: 2vw;
    padding-top: 0.8vw;
    padding-bottom: 0.8vw;
  }

  @media (min-width: 430px) and (max-width: 860px) {
    width: 2.833vw;
    height: 2.3890000000000002vw;
    padding-left: 0.2vw;
    padding-right: 0.3vw;
  }
`;
