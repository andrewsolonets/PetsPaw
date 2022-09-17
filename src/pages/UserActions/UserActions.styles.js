import styled from "styled-components";

export const UserActionsWrapper = styled.div`
  position: absolute;
  bottom: -10%;
  left: 30%;
  display: flex;
  background: ${({ theme }) => theme.backgroundBlock};
  border: 4px solid ${({ theme }) => theme.backgroundBlock};
  border-radius: 2rem;
  gap: 0.3vw;

  img {
    filter: brightness(100);
  }

  @media (max-width: 425px) {
    position: absolute;
    bottom: -17%;
    left: 20%;
    display: flex;
    background: ${({ theme }) => theme.backgroundBlock};
    border: 4px solid ${({ theme }) => theme.backgroundBlock};
    border-radius: 20px;
    gap: 0.3vw;

    @media (min-width: 37.5em) and (max-width: 75em) {
      position: absolute;
      bottom: -10%;
      left: 23%;
      display: flex;
      gap: 0.3vw;
    }
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.736vw;
  cursor: pointer;
  svg {
    width: 3rem;
  }
  background-color: ${(props) => props.element};
  ${(props) =>
    props.element === "#97eab9"
      ? `
      border-top-left-radius: 2rem;
      border-bottom-left-radius: 2rem;
      &:hover {
        background: rgba(151, 234, 185, 0.3);
      }
      
      &:hover svg path {
        fill: #97eab9;
      }
  `
      : ""}

  ${(props) =>
    props.element === "${({ theme }) => theme.main}"
      ? `
      &:hover {
        background: rgba(255, 134, 142, 0.3);
      }
      
      &:hover svg path {
        fill: ${({ theme }) => theme.main}
      }
  `
      : ""}

  ${(props) =>
    props.element === "#ffd280"
      ? `
      border-top-right-radius: 2rem;
      border-bottom-right-radius: 2rem;
      &:hover {
        background: rgba(255, 210, 128, 0.3);
      }
      
      &:hover svg path {
        fill: #ffd280;
      }
      `
      : ""}
  @media (max-width: 37.5em) {
    height: 13vw;
    width: 13vw;
  }
`;
