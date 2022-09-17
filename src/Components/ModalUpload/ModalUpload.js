import ReactDOM from "react-dom";
import { Fragment } from "react";
import { useState } from "react";
import DragDrop from "../DragDrop/DragDrop";
import { ReactComponent as Close } from "../../assets/cross.svg";
import { useFetch } from "../../hooks/useFetch";
import { FinalUploadMessage } from "../FinalUploadMessage/FinalUploadMessage";
import {
  BackdropWrapper,
  CloseButton,
  ModalWrapper,
} from "./ModalUpload.styles";

const Backdrop = (props) => {
  return <BackdropWrapper onClick={props.onClose}></BackdropWrapper>;
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

  return (
    <ModalWrapper>
      <CloseButton>
        <Close onClick={props.onClose} />
      </CloseButton>

      <h2>Upload a .jpg or .png Cat Image</h2>
      <p>
        Any uploads must comply with the upload guidelines or face deletion.
      </p>
      <div>
        <DragDrop onChange={imgUploadedHandler} onStatus={status}></DragDrop>
      </div>
      <FinalUploadMessage
        img={img}
        status={status}
        uploadingHandler={uploadingHandler}
      />
    </ModalWrapper>
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
