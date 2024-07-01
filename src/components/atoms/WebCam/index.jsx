/* eslint-disable react/display-name */
import React, { useCallback, useEffect, useRef, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { StyledWebCam, WebCamHolder, CaptureButton, RefreshButton, ImgPreview, ImageWrapper } from './WebCam.styles';
// import Alert from "../Alert";
// import Tooltip from "../../atoms/Tooltip";
import { Error } from '../../molecules/Field/Field.styles';
import { StyledFormGroup } from '../../../styles/helpers.styles';
import Button from '../Button';
import Image from 'next/image';
import { FaRedoAlt } from 'react-icons/fa';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
const propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
  flash: PropTypes.bool,
  setSelfie: PropTypes.func,
  setFlash: PropTypes.func,
  noMargin: PropTypes.bool,
  onChange: PropTypes.func,
  error: PropTypes.string,
  success: PropTypes.bool,
};
const videoConstraints = {
  width: 300,
  facingMode: 'environment',
};
const WebCam = ({ handelKycLevel, isLoading, setIsLoading, bas64toFile, setKycData, kycData, setKyc4, setOpen }) => {
  const webcamRef = useRef(null);
  const { user } = useContextHook(AuthContext, v => ({
    user: v.user,
  }));

  const [url, setUrl] = useState(kycData?.personalImgUrl);

  const capturePhoto = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);

    // console.log("here");
  }, [webcamRef]);

  const onUserMedia = e => {
    // console.log(e);
  };

  const handleEvent = async () => {
    setIsLoading(true);
    try {
      const personalImage = await bas64toFile(url, `${user?.fullName}_personalImage`);

      if (personalImage) {
        setKycData(prev => ({
          ...prev,
          personalImage,
          personalImgUrl: url,
        }));

        if (!isLoading) {
          setKyc4(true);
          setOpen(false);
        }
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
 
  return (
    <StyledFormGroup>
      {/* <Alert
        type="info"
        message="Please place your face inside the frame and take photo."
        css="margin-bottom: 20px;"
      /> */}
      <WebCamHolder $preview={url}>
        {url == null && (
          <>
            <StyledWebCam
              mirrored
              ref={webcamRef}
              audio={false}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              onUserMedia={onUserMedia}
            />
            <Button rounded sm btntype="primary" width="214" onClick={capturePhoto}>
              {user?.sellerType === 'Individual' ? 'Submit' : 'Continue'}
            </Button>
          </>
        )}
        {url && (
          <>
            <div className="previewWrapper">
              <ImageWrapper>
                <Image src={url} width={200} height={200} alt="user" />
              </ImageWrapper>
            </div>

            <Button className={'undoButton'} rounded sm btntype="primary" onClick={() => setUrl(null)}>
              <FaRedoAlt />
            </Button>
          </>
        )}
      </WebCamHolder>
      {url &&
        (user?.sellerType === 'Individual' ? (
          <Button rounded sm loader={isLoading} btntype="primary" width="214" onClick={() => handelKycLevel(url)}>
            Save
          </Button>
        ) : (
          <Button rounded sm loader={isLoading} btntype="primary" width="214" onClick={handleEvent}>
            Save 
          </Button>
        ))}

      {/* {error && <Error role="alert">{error}</Error>} */}
    </StyledFormGroup>
  );
};

export default WebCam;
