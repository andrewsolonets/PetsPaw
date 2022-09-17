import styled from "styled-components";

export const AppContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  top: 1.8rem;
  gap: 0.8vw;

  position: relative;
  left: 45vw;
  height: auto;

  @media (max-width: 56.25em) {
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-direction: column;
    top: 0;
    padding: 1rem;
    gap: 2vw;
    /* margin-left: 3.6vw;
    margin-right: 3.6vw; */
    position: absolute;
    left: 0;
    right: 0;
    height: auto;
    background: var(--background);
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  @media (max-width: 56.25em) {
    align-self: center;
    justify-self: flex-start;
    display: block;
  }
`;
