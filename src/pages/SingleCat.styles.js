import styled from "styled-components";

export const SingleCatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4vw;

  @media (max-width: 425px) {
    gap: 13vw;

    width: 100%;
  }
`;

export const ParentImgContainer = styled.div`
  height: 25vw;
  width: 44.444vw;
  align-self: center;
  position: relative;
  border-radius: 20px;

  div {
    align-self: center;
    justify-self: center;
    width: 100%;

    border-radius: 20px;
    img {
      object-fit: contain;
      width: 100%;
      height: 25vw;
    }
  }

  @media (max-width: 425px) {
    height: 60vw;
    width: 100%;
    align-self: center;
    position: relative;
    border-radius: 20px;

    div {
      align-self: center;
      justify-self: center;
      width: 100%;

      border-radius: 20px;
      img {
        height: 60vw;
      }
    }
  }
`;

export const SingleCatContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3vw;
`;

export const SingleCatHeading = styled.div`
  position: absolute;
  top: -12%;
  padding-left: 3.5vw;
  padding-right: 3.5vw;
  padding-top: 0.7vw;
  padding-bottom: 0.7vw;
  color: var(--textBlack);
  background: var(--backgroundBlock);
  border-radius: 20px;
  font-family: "Jost";
  font-style: normal;
  font-weight: 500;
  font-size: 3.4rem;
  line-height: 3.611vw;
  @media (max-width: 425px) {
    top: -4%;
    padding-left: 3.5vw;
    padding-right: 3.5vw;
    padding-top: 0.7vw;
    padding-bottom: 0.7vw;
    color: var(--textBlack);
    background: var(--backgroundBlock);
    border-radius: 20px;
    font-family: "Jost";
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
  }
`;

export const SingleCatDescription = styled.div`
  border: 2px solid var(--btnColor);
  border-radius: 20px;
  width: 44.444vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1vw;

  @media (max-width: 425px) {
    border: 2px solid var(--btnColor);
    border-radius: 20px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 5vw;
    padding-bottom: 5vw;
  }
`;

export const MainDescrWrapper = styled.div`
  margin-top: 3vw;
  margin-left: 1.6vw;
  font-weight: 500;
  font-size: 1.389vw;
  margin-right: 1.6vw;
  /* identical to box height */

  color: #8c8c8c;

  @media (max-width: 425px) {
    margin-top: 8vw;
    margin-left: 5vw;
    margin-right: 5vw;
    font-style: normal;
    font-weight: 500;
    font-size: 4.267vw;
    /* identical to box height */

    color: #8c8c8c;
  }
`;

export const SecondaryDescr = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
  justify-content: center;
  margin-bottom: 2vw;

  @media (max-width: 425px) {
    gap: 3vw;
    justify-content: flex-start;
    margin-bottom: 2vw;
    margin-left: 5vw;
    margin-right: 5vw;
  }
`;

export const SecondaryDescrItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20vw;
  gap: 3vw;
  p {
    font-size: 1.8rem;
    color: #8c8c8c;
  }
  b {
    color: black;
  }
  @media (max-width: 425px) {
    justify-content: flex-start;
    width: 100%;
    gap: 4vw;
  }
`;

export const SingleCatId = styled.div`
  color: var(--textWhite);
  background: var(--main);
  padding-left: 3rem;
  padding-right: 3rem;
  font-size: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
