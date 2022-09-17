import styled from "styled-components";
import { ReactComponent as Back } from "../../assets/back.svg";
import Button from "../UI/Button";

export const NavWrapper = styled.div`
  align-self: flex-start;
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 37.5em) {
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

export const MainNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  display: flex;
  gap: 0.8vw;

  @media (max-width: 56.5em) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: flex-start;
  }
`;

export const BackButton = styled(Back)`
  height: 2rem;
  padding-left: 0.2rem;
  padding-right: 0.25rem;
`;

export const NavTitle = styled.div`
  display: flex;
  align-items: center;
  color: var(--textWhite);
  background: var(--main);
  border-radius: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
  font-size: 2rem;
  line-height: auto;
`;
