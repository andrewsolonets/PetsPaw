import classes from "./ModalUpload.module.css";
import "./loader.css";
import classes1 from "./Backdrop.module.css";
import imgSuccess from "../assets/success.png";
import imgFailure from "../assets/failure.png";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import { useState } from "react";
import DragDrop from "./DragDrop";
import { ReactComponent as Close } from "../assets/cross.svg";
import { useCallback } from "react";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

const Backdrop = (props) => {
  return <div className={classes1.backdrop} onClick={props.onClose}></div>;
};

const ModalUpload = (props) => {
  console.log(props.subId);
  const [img, setImg] = useState();
  // const [status, setStatus] = useState("");

  const {
    additional: status,
    fetchData,
    setAdditional,
  } = useFetch(`images/upload/`, {}, img, "post", "upload");

  const uploadingHandler = () => {
    console.log("START");
    fetchData(`images/upload/`, {}, img, "post", "upload");
  };

  const imgUploadedHandler = (e) => {
    let formData = new FormData();
    formData.append("file", e);
    formData.append("sub_id", "ys1ebn");
    console.log(formData);
    setImg(formData);
    setAdditional("");
  };

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

  return (
    <div className={classes.containerBack}>
      <div className={classes.closeDiv}>
        <Close className={classes.close} onClick={props.onClose} />
      </div>

      <h2>Upload a .jpg or .png Cat Image</h2>
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
        <ModalUpload subId={props.subId} onClose={props.onClose}>
          {props.children}
        </ModalUpload>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
