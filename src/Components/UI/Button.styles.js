import styled from "styled-components";

export const ButtonRegular = styled.button`
  background: var(--backgroundBlock);
  border-radius: 0.4vw;
  border: none;
  color: var(--main);
  padding: 0.4vw;
  font-size: 2vw;

  @media (max-width: 425px) {
    padding: 4vw;
    border-radius: 10px;
    font-size: 4vw;
  }

  @media (min-width: 768px) {
    background: var(--backgroundBlock);
    border-radius: 0.694vw;
    border: 0;
    color: var(--main);
    padding: 0.694vw;
    font-size: 1.5vw;
  }

  @media (min-width: 1024px) {
    border: none;
    font-size: 1.2vw;
  }

  &:hover {
    background: var(--btnColor);
  }
`;