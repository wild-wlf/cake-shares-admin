import React, { useState, useEffect } from 'react';
import { useCSVReader, formatFileSize } from 'react-papaparse';
import {
  StyledUploadFile,
  StyledBtn,
  FileUploadBox,
  FileInfo,
  FileSize,
  FileName,
  ProgressBarHolder,
  RemoveBtn,
} from './UploadFile.styles';
import UploadImg from '../../../_assets/uploadFile.svg';
import Image from 'next/image';
import Toast from '../Toast';

const UploadFile = ({
  bg,
  onChange,
  disc = 'File size must be less than 5MB in PDF, JPG, or PNG format.',
  title,
  uploadTitle = 'Upload Image or PDF',
  label = true,
  fileSize = 5,
  accept = 'image/jpeg, image/jpg, image/png, application/pdf',
  type = 'img',
  csv,
  document = false,
  icon,
  img = '',
  id = 'upload',
  noMargin,
  ...props
}) => {
  const { CSVReader } = useCSVReader();
  const [uploaded, setUploaded] = useState('');

  function handelChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const acceptableExtensions = accept.split(',').map(ext => ext.trim());
    if (!acceptableExtensions?.includes(file?.type)) {
      const extensions = acceptableExtensions
        .map(ext => ext.split('/')[1].toUpperCase())
        .join(', ')
        .replace(/,(?=[^,]*$)/, ' and');

      Toast({
        type: 'error',
        message: `File Must be in ${extensions} format!`,
      });
      return;
    }

    if (file) {
      const fileLength = file.size / (1024 * 1024);
      if (fileLength <= fileSize) {
        setUploaded(e.target.files[0]);
        onChange({ target: { file } });
      } else {
        Toast({
          type: 'error',
          message: 'File Size Exceeded!',
        });
      }
    }
  }

  const getFileExtension = () => {
    if (uploaded) {
      const fileNameParts = uploaded.name.split('.');
      if (fileNameParts.length > 1) {
        return fileNameParts[fileNameParts.length - 1];
      }
    }
    return '';
  };

  const getFileName = () => {
    if (uploaded) {
      const fileNameParts = uploaded.name.split('.');
      let fileName = fileNameParts.length > 1 ? fileNameParts.slice(0, -1).join('.') : uploaded.name;

      // Truncate the file name if it's greater than 10 characters
      if (fileName.length > 20) {
        fileName = `${fileName.slice(0, 20)}...`;
      }

      return fileName;
    }
    return '';
  };

  useEffect(() => {
    if (img) {
      setUploaded(img);
    }
  }, [img]);

  function getFileNameIfPdf(url) {
    const fileName = url.substring(url.lastIndexOf('/') + 1);
    const extension = fileName.split('.').pop();

    if (extension === 'pdf') {
      return fileName;
    }
    return null;
  }

  return (
    <StyledUploadFile $bg={bg} $noMargin={noMargin}>
      {label && <span className="label-text">{title}</span>}
      {type === 'img' && !document && (
        <label htmlFor={id} className="labelButton">
          {!uploaded && (
            <span className="upload-text">
              <Image className="icon-img" src={UploadImg} alt="icon" />
              <span className="text-lg">{uploadTitle}</span>
              <span className="text">{disc}</span>
            </span>
          )}
          {uploaded && typeof uploaded === 'string' ? (
            uploaded.endsWith('.mp4') ? (
              <video width={319} height={191} autoPlay>
                <source src={uploaded} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div>
                <span className="pdf-file-name">{getFileNameIfPdf(uploaded)}</span>
                <Image src={uploaded} alt="img" width={250} height={300} />
              </div>
            )
          ) : (
            uploaded &&
            (uploaded.type === 'application/pdf' ? (
              <div>
                <span>
                  {getFileName()}.{getFileExtension()}
                </span>
                {/* <span>(PDF File)</span> */}
              </div>
            ) : uploaded.type.startsWith('video/') ? (
              <video width={319} height={191} autoPlay>
                <source src={URL.createObjectURL(uploaded)} type={uploaded.type} />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image src={URL.createObjectURL(uploaded)} alt="img" width={250} height={300} />
            ))
          )}
        </label>
      )}
      {document && (
        <label htmlFor={id} className="labelButton">
          <span className="upload-text">
            <Image className="icon-img" src={UploadImg} alt="icon" />

            <span className="text-lg">{uploadTitle}</span>
            <span className="text">{disc}</span>
            {uploaded && (
              <span className="uploaded-file-name">
                {getFileName()}.{getFileExtension()}
              </span>
            )}
          </span>
        </label>
      )}
      <input type="file" id={id} accept={accept} onChange={e => handelChange(e)} />
      {type === 'csv' && (
        <CSVReader
          // onUploadRejected={(file) => {
          //   Toast({
          //     type: `error`,
          //     message: file[0].errors[0].message || "invalid file formate",
          //   });
          // }}
          onDragOver={event => {
            event.preventDefault();
          }}
          onDragLeave={event => {
            event.preventDefault();
          }}
          {...props}>
          {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps, Remove }) => (
            <StyledBtn
              as="div"
              {...getRootProps()}
              css={`
                padding: 38px;
              `}
              className="labelButton">
              <div>
                {acceptedFile ? (
                  <FileUploadBox>
                    <FileInfo>
                      <FileSize>{formatFileSize(acceptedFile.size)}</FileSize>
                      <FileName>{acceptedFile.name}</FileName>
                    </FileInfo>
                    <ProgressBarHolder>
                      <ProgressBar />
                    </ProgressBarHolder>
                    <RemoveBtn
                      {...getRemoveFileProps()}
                      onMouseOver={event => {
                        event.preventDefault();
                      }}
                      onMouseOut={event => {
                        event.preventDefault();
                      }}>
                      <Remove />
                    </RemoveBtn>
                  </FileUploadBox>
                ) : (
                  <div className="upload-text">
                    {icon && <Image className="icon-img" src={UploadImg} alt="icon" />}
                    <span className="text-lg">{uploadTitle}</span>
                    <span className="text">{disc}</span>
                  </div>
                )}
              </div>
            </StyledBtn>
          )}
        </CSVReader>
      )}
    </StyledUploadFile>
  );
};

export default UploadFile;
