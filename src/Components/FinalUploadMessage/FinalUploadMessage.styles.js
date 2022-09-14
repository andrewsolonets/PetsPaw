import styled from "styled-components";

export const FinalMessageWrapper = styled.div`
  width: 97%;
  padding: 1vw;
  gap: 1vw;
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 10px;

  @media (max-width: 860px) {
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
