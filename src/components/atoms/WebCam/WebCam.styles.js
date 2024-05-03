import styled, { keyframes, css } from "styled-components";
import Webcam from "react-webcam";
import Button from "../../atoms/Button";
// import SelfieFrame from "../../../_assets/selfie-frame.png";

const cameraFlash = keyframes`
  from {box-shadow: 0;}
  to {box-shadow: inset 0 0 0 200px var(--white);}
`;

export const WebCamHolder = styled.div`
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    inset: 5px 5px ${({ $preview }) => ($preview ? "22px" : "60px")} 5px;
    z-index: 1;
    /* background: url(${SelfieFrame.src}) no-repeat; */
    background-size: contain;
    background-position: center center;
  }
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 4;
    pointer-events: none;

    ${({ flash }) =>
      flash &&
      css`
        animation: ${cameraFlash} 0.8s ease-in-out 0.2s alternate-reverse 1;
      `};
  }
  .previewWrapper {
    background: black;
    border-radius: 25px;
    margin-bottom: 20px;
  }
  .undoButton {
    position: absolute;
    z-index: 10;
    right: 10px;
    top: 10px;
    min-width: 50px;
  }
`;

export const StyledWebCam = styled(Webcam)`
  width: 100%;
  height: 202px;
  border-radius: 25px;
  display: block;
  overflow: hidden;
  background: black;

  /* border: ${({ error, success }) =>
    error
      ? "2px dashed var(--danger)"
      : success
      ? "2px dashed var(--success)"
      : "2px dashed #D9D9D9"}; */
  margin-bottom: 20px;
  /* clip-path: ellipse(25% 25% at 50% 50%); */
`;

export const CaptureButton = styled(Button)`
  border: 13px solid var(--white);
  z-index: 2;
`;

export const ImageWrapper = styled.div`
  max-width: 250px;
  margin: 0 auto;
  border-radius: 25px;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
