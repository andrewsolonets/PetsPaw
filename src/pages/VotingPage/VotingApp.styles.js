import styled from "styled-components";

export const ContainerImg = styled.div`
  height: 25vw;
  width: 43vw;
  align-self: center;
  position: relative;
  border-radius: 20px;
  margin-bottom: 3vw;

  @media (max-width: 75em) {
    height: 50vw;
    width: 100%;
    align-self: center;
    position: relative;
    border-radius: 20px;
    margin-bottom: 10vw;
  }
`;

export const ImgWrapper = styled.div`
  align-self: center;
  justify-self: center;
  width: 100%;
  height: 25vw;

  border-radius: 20px;

  img {
    object-fit: contain;
    width: 100%;
    height: 25vw;
    border-radius: 20px;
  }

  @media (max-width: 75em) {
    align-self: center;
    justify-self: center;
    width: 100%;
    height: 50vw;

    border-radius: 20px;

    img {
      object-fit: contain;
      width: 100%;
      height: 50vw;
      border-radius: 20px;
    }
  }
`;
