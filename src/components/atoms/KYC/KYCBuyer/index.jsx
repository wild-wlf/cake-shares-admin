import React, {useContext, useEffect, useState} from "react";
import {StyledKycBuyer} from "./KycBuyer.styles";
import UploadFile from "@/components/molecules/UploadFile";
import Button from "../../Button";
import Toast from "@/components/molecules/Toast";
import {KycContext} from "@/context/KycContext";

const KycBuyerLevelOne = ({setOpen, setKycLevel}) => {
    const {setKyc2} = useContext(KycContext);
    const [isSelected, setIsSelected] = useState({
        frontside: true,
        backSide: true,
    });
    const [files, setFiles] = useState({
        frontside: null,
        backSide: null,
    });
    function handelKycLevel() {
        if (!isSelected.frontside && !isSelected.backSide) {
            setOpen(false);
            setKyc2(true);
        } else if (isSelected.frontside || isSelected.backSide) {
            Toast({
                type: "error",
                message: "Passport images are required",
            });
        }
    }
    console.log(isSelected, files);
    return (
        <StyledKycBuyer>
            <span className="kycdiscreption">ID Proof Info:</span>
            <label htmlFor="" className="fakelabel">
                Upload ID
            </label>
            <div className="combineField">
                <UploadFile
                    name="front side"
                    uploadTitle="Upload Front Side of Passport"
                    onChange={e => {
                        if (e) {
                            setFiles(prev => ({...prev, frontside: e}));
                            setIsSelected(prev => ({...prev, frontside: false}));
                        }
                    }}
                />
                <UploadFile
                    name="back side"
                    uploadTitle="Upload Back Side of Passport"
                    onChange={e => {
                        if (e) {
                            setFiles(prev => ({...prev, backSide: e}));
                            setIsSelected(prev => ({...prev, backSide: false}));
                        }
                    }}
                    id="back"
                />
            </div>
            <Button rounded md btntype="primary" width="214" htmlType="submit" onClick={handelKycLevel}>
                Complete Verification
            </Button>
        </StyledKycBuyer>
    );
};

export default KycBuyerLevelOne;
