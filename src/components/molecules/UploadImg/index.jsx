import Image from "next/image";
import React, { useState } from "react";
import { StyledUploadImage } from "./UploadImg.style";
import Camera from "../../../_assets/camera.svg";
import ProfilePic from "../../../_assets/profilepic.svg";

const UploadImg = ({ id = "upload", fileSize = 2, accept = ".png , .jpg" }) => {
  const [uploaded, setUploaded] = useState("");

  function handelChange(e) {
    const file = e.target.files[0];
    if (file) {
      const fileLength = file.size / (1024 * 1024);
      if (fileLength <= fileSize) {
        setUploaded(e.target.files[0]);
        // onChange(e.target.files[0]);
      } else {
        alert("file size exceeded");
      }
    }
  }
  return (
    <StyledUploadImage>
      <label htmlFor={id} className="labelButton">
        {!uploaded && (
          <span className="upload-text">
            <Image className="icon-img" src={ProfilePic} alt="icon" />
          </span>
        )}
        {uploaded && typeof uploaded === "string" ? (
          <Image src={uploaded} alt="img" width={250} height={300} />
        ) : (
          uploaded && (
            <Image
              src={URL.createObjectURL(uploaded)}
              alt="img"
              width={250}
              height={300}
            />
          )
        )}
        <input
          type="file"
          id={id}
          accept={accept}
          onChange={(e) => handelChange(e)}
        />
        <Image src={Camera} alt="Camera" className="camera" />
      </label>
    </StyledUploadImage>
  );
};

export default UploadImg;
