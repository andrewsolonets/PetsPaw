import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import "./dragdrop.css";
import imgUpload from "../assets/imgUpload.png";

function DragDrop(props) {
  const [file, setFile] = useState(null);

  const [img, setImg] = useState("");

  const handleChange = (file) => {
    setFile(file);
    const imgURL = URL.createObjectURL(file);
    setImg(imgURL);
    props.onChange(file);
  };
  console.log(file);
  console.log(props.onStatus);

  return (
    <FileUploader
      handleChange={handleChange}
      name="file"
      children={
        <div
          className={`draganddrop ${
            props.onStatus === "failure" ? "errorState" : ""
          } `}
        >
          {file ? (
            <img className="uploadedImage" src={img} alt="dsds"></img>
          ) : (
            <>
              <p>
                <b>Drag here</b> your file or <b>Click here</b> to upload
              </p>
              <img className="placeImage" src={imgUpload} alt="asd"></img>
            </>
          )}
          <p className="fileText">{`${
            file && props.onStatus !== "success"
              ? `Image File Name: ${file.name}`
              : "No file selected"
          } `}</p>
        </div>
      }
    />
  );
}

export default DragDrop;
