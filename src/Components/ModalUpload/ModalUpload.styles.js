import styled from "styled-components";
import { CardButton } from "../Button/Button.styles";

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 30;
  position: fixed;
  top: 2%;
  right: 2%;
  gap: 1vw;
  width: 50%;
  /* height: 40vw; */
  bottom: 2%;
  padding: 2vw;

  background: var(--background);
  border-radius: 20px;

  @media (max-width: 37.5em) {
    top: 0%;
    right: 0%;
    gap: 6vw;
    width: 96%;
    height: 100%;

    bottom: 0%;
    padding: 2vw;
  }
`;

export const CloseButton = styled(CardButton)`
  align-self: flex-end;
  cursor: pointer;
  position: relative;
  right: 0%;
  background: var(--backgroundBlock);

  @media (max-width: 37.5em) {
    padding: 1.7rem;
  }
`;

export const BackdropWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background: rgba(29, 29, 29, 0.6);
`;
