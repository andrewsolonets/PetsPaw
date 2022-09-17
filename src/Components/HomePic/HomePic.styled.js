import styled from "styled-components";

export const HomePicWrapper = styled.div`
  display: none;
  position: absolute;
  left: 45vw;

  div {
    position: absolute;
    left: 50px;
    top: 40px;
    width: 47.222vw;
    height: 58.333vw;
    background: var(--btnColor);
    border-radius: 20px;
  }

  img {
    position: relative;
    width: 53.7vw;
    height: 62.5vw;
  }

  @media (min-width: 36.5em) {
    position: absolute;
    left: 45vw;
  }
  @media (min-width: 1024px) {
    display: block;
    position: absolute;
    left: 45vw;
  }
`;
