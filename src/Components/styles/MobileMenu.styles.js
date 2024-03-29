import styled from "styled-components";

export const BurgerLine = styled.div`
  width: 3.2rem;
  height: 0.4rem;
  background: ${({ theme }) => theme.main};
  border-radius: 1rem;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
`;

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${({ theme }) => theme.bg};
  height: 100vh;
  padding: 1rem;
  gap: 5vw;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  svg {
    width: 2.6rem;
  }

  ${(props) =>
    props.state ? `transform:translateX(0)` : "transform:translateX(-100%)"}
`;
