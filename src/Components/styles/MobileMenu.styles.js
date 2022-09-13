import styled from "styled-components";

export const BurgerLine = styled.div`
  width: 3.2rem;
  height: 0.45rem;
  background: var(--main);
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
  @media (min-width: 768px) {
    width: 3.2rem;
    height: 0.45rem;
    /* height: 0.25rem; */
    background: var(--main);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: var(--background);
  height: 100vh;
  padding: 1rem;
  gap: 5vw;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  ${(props) =>
    props.state ? `transform:translateX(0)` : "transform:translateX(-100%)"}
`;
