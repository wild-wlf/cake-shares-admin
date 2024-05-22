import styled from "styled-components";

export const StyledUploadImage = styled.div`
  width: 100%;
  max-width: 100px;
  margin: 0 0 30px;
  position: relative;

  .label-text {
    display: block;
    font-size: 20px;
    line-height: 24px;
    text-transform: capitalize;
    color: var(--matte-black);
    margin: 0 0 8px;
  }
  .labelButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    overflow: hidden;
    cursor: pointer;
    background: ${({ $bg }) => ($bg ? "var(--white)" : "#F1F1F1")};
    border-radius: 50px;
    border: 1px dashed #d9d9d9;

    .upload-text {
      display: block;
      text-align: center;
      font-size: 12px;
      line-height: 16px;
      font-weight: 300;
      color: var(--matte-black);

      .icon-img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }

  .camera {
    width: 35px;
    height: 35px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  input {
    display: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .uploaded-file-name {
    font-weight: 600;
  }
`;
