import styled from "styled-components";

export const DragDropWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 47vw;
  height: 40vh;
  background: var(--backgroundBlock);
  border: 2px dashed var(--btnColor);
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 4vw;
  padding: 1vw;

  ${(props) =>
    props.onStatus === "failure"
      ? `background: var(--btnColor);
  border: 2px dashed var(--main);`
      : ""}

  p {
    position: absolute;
  }

  @media (max-width: 75em) {
    width: 90vw;
    height: 40vh;

    p {
      width: 60%;
      text-align: center;
    }
  }
`;

export const PlaceholderWrapper = styled.img`
  width: 15vw;
`;

export const UploadedImg = styled.img`
  width: 100%;
  height: inherit;
  object-fit: scale-down;
`;

export const FileText = styled.p`
  position: absolute;
  bottom: -15%;

  @media (max-width: 75em) {
    position: absolute;
    text-align: center;
    width: 100% !important;
  }
`;
