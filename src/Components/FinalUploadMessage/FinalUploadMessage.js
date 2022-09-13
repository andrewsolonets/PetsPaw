import imgSuccess from "../assets/success.png";
import imgFailure from "../assets/failure.png";

export const FinalUploadMessage = ({ img, status, uploadingHandler }) => {
  let finalMessage; // separate this logic to its own component

  if (
    img &&
    status !== "success" &&
    status !== "failure" &&
    status !== "loading"
  ) {
    finalMessage = <button onClick={uploadingHandler}>UPLOAD PHOTO</button>;
  }

  if (status === "loading") {
    finalMessage = (
      <button onClick={uploadingHandler} className={classes.uploadBtnloading}>
        {" "}
        <div class="loader"></div>
        UPLOAD PHOTO
      </button>
    );
  }

  if (status === "success") {
    finalMessage = (
      <div className={classes.finalMessage}>
        <img src={imgSuccess} alt="asd"></img>
        <p>Thanks for the Upload - Cat found!</p>
      </div>
    );
  }
  if (status === "failure") {
    finalMessage = (
      <div className={classes.finalMessage}>
        <img src={imgFailure} alt="asd"></img>
        <p>No Cat found - try a different one</p>
      </div>
    );
  }
  return { finalMessage };
};
