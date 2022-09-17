import styled, { keyframes } from "styled-components";

export const FinalMessageWrapper = styled.div`
  width: 97%;
  padding: 1vw;
  gap: 1vw;
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 10px;

  @media (max-width: 75em) {
    width: 90%;
    margin-left: 2vw;
    padding: 1vw;
    margin-top: 5vw;
    gap: 1vw;
    background-color: white;
    display: flex;
    align-items: center;
    border-radius: 10px;
  }
`;

export const Spin = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

export const LoaderSpinner = styled.div`
  border: 0.3vw solid var(--main);
  border-top: 0.3vw solid var(--backgroundBlock);
  border-radius: 50%;
  width: 1vw;
  margin-right: 0.7vw;
  height: 1vw;
  animation: ${Spin} 1.3s linear infinite;

  @media (max-width: 37.5em) {
    width: 3vw;
    height: 3vw;
    border: 1vw solid var(--main);
    border-top: 1vw solid var(--backgroundBlock);
  }
`;
