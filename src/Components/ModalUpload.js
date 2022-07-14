import classes from "./ModalUpload.module.css";
import "./loader.css";
import classes1 from "./Backdrop.module.css";
import imgUpload from "../assets/imgUpload.png";
import imgSuccess from "../assets/success.png";
import imgFailure from "../assets/failure.png";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import { useState } from "react";
import DragDrop from "./DragDrop";
import { ReactComponent as Close } from "../assets/cross.svg";
import { MoonLoader } from "react-spinners";

const Backdrop = (props) => {
  return <div className={classes1.backdrop} onClick={props.onClose}></div>;
};

const ModalUpload = (props) => {
  const [img, setImg] = useState();
  const [status, setStatus] = useState("");

  const uploaderPhoto = async () => {
    setStatus("loading");
    console.log(img);
    const options = {
      method: "POST",
      body: img,
      headers: {
        "x-api-key": "4072d7cf-ded4-47a3-bf51-39851c2428b8",
      },
    };

    delete options.headers["Content-Type"];
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/upload/`,
        options
      );
      if (!response.ok) {
        setStatus("failure");
        throw new Error("Failed");
      }
      console.log(response);
      const data = await response.json();
      let uploadedImg = await data;
      console.log(uploadedImg.id);
      loadImageAnalysis(uploadedImg.id);
      setStatus("success");
    } catch (err) {
      setStatus("failure");
      console.error(err);
    }
  };

  const loadImageAnalysis = async (id) => {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/${id}/analysis`
    );
    const data = await response.json();
    console.log(data[0].labels);
  };

  const uploadingHandler = () => {
    console.log("START");
    uploaderPhoto();
  };

  const imgUploadedHandler = (e) => {
    let formData = new FormData();
    formData.append("file", e);
    setImg(formData);
    setStatus("");
  };

  let finalMessage;

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

  return (
    <div className={classes.containerBack}>
      <div className={classes.closeDiv}>
        <Close className={classes.close} onClick={props.onClose} />
      </div>

      <h1>Upload a .jpg or .png Cat Image</h1>
      <p>
        Any uploads must comply with the upload guidelines or face deletion.
      </p>
      <div>
        <DragDrop onChange={imgUploadedHandler} onStatus={status}></DragDrop>
      </div>
      {finalMessage}
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalUpload onClose={props.onClose}>{props.children}</ModalUpload>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
