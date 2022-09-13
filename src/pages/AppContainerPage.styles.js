import styled from "styled-components";

export const AppContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  top: 2.8rem;
  gap: 0.8vw;
  position: relative;
  left: 45vw;
  height: auto;

  @media (max-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-direction: column;
    top: 0;
    gap: 2vw;
    width: 100%;
    /* margin-left: 3.6vw;
    margin-right: 3.6vw; */
    position: relative;
    left: 0;
    height: auto;
    background: var(--background);
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  @media (max-width: 425px) {
    align-self: center;
    justify-self: flex-start;
    display: block;
  }
`;
