import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import imgUpload from "../../assets/imgUpload.png";
import { useEffect } from "react";
import {
  DragDropWrapper,
  FileText,
  PlaceholderWrapper,
  UploadedImg,
} from "./DragDrop.styles";

function DragDrop(props) {
  const [file, setFile] = useState(null);

  const [img, setImg] = useState("");

  const handleChange = (file) => {
    setFile(file);
    const imgURL = URL.createObjectURL(file);
    console.log(imgURL);
    setImg(imgURL);
    props.onChange(file);
  };

  useEffect(() => {
    if (props.onStatus === "success") {
      setFile(null);
    }
  }, [props.onStatus]);
  console.log(file);
  console.log(props.onStatus);

  return (
    <FileUploader
      handleChange={handleChange}
      name="file"
      children={
        <DragDropWrapper onStatus={props.onStatus}>
          {file ? (
            <UploadedImg src={img} alt="dsds"></UploadedImg>
          ) : (
            <>
              <p>
                <b>Drag here</b> your file or <b>Click here</b> to upload
              </p>
              <PlaceholderWrapper
                src={imgUpload}
                alt="asd"
              ></PlaceholderWrapper>
            </>
          )}
          <FileText>{`${
            file && props.onStatus !== "success"
              ? `Image File Name: ${file.name}`
              : "No file selected"
          } `}</FileText>
        </DragDropWrapper>
      }
    />
  );
}

export default DragDrop;
