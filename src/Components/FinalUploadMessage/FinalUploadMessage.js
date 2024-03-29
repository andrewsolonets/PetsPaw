import imgSuccess from "../../assets/success.png";
import imgFailure from "../../assets/failure.png";
import { UploadBtn, UploadImageButton } from "../Button/Button.styles";
import {
  FinalMessageWrapper,
  LoaderSpinner,
} from "./FinalUploadMessage.styles";

export const FinalUploadMessage = ({ img, status, uploadingHandler }) => {
  let finalMessage;

  if (
    img &&
    status !== "success" &&
    status !== "failure" &&
    status !== "loading"
  ) {
    finalMessage = (
      <UploadImageButton onClick={uploadingHandler}>
        UPLOAD PHOTO
      </UploadImageButton>
    );
  }

  if (status === "loading") {
    finalMessage = (
      <UploadBtn onClick={uploadingHandler}>
        {" "}
        <LoaderSpinner></LoaderSpinner>
        UPLOAD PHOTO
      </UploadBtn>
    );
  }

  if (status === "success") {
    finalMessage = (
      <FinalMessageWrapper>
        <img src={imgSuccess} alt="asd"></img>
        <p>Thanks for the Upload - Cat found!</p>
      </FinalMessageWrapper>
    );
  }
  if (status === "failure") {
    finalMessage = (
      <FinalMessageWrapper>
        <img src={imgFailure} alt="asd"></img>
        <p>No Cat found - try a different one</p>
      </FinalMessageWrapper>
    );
  }
  return finalMessage;
};
