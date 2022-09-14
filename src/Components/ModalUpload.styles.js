import styled from "styled-components";
import { CardButton } from "./UI/Button.styles";

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
`;

export const CloseButton = styled(CardButton)`
  align-self: flex-end;
  cursor: pointer;
  position: relative;
  right: 0%;
  background: var(--backgroundBlock);
  svg {
    width: 1.7rem;
    height: 1.7rem;
  }
`;
