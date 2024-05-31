import React, {useContext, useState} from "react";
import {Step, StepWrapper, StepWrapperContainar, StyledKycBuyer} from "../KYCBuyer/KycBuyer.styles";
import UploadFile from "@/components/molecules/UploadFile";
import Button from "../../Button";
import {useForm} from "@/components/molecules/Form";
import Form from "@/components/molecules/Form/Form";
import Select from "../../Select";
import Field from "@/components/molecules/Field";
import Toast from "@/components/molecules/Toast";
import {KycContext} from "@/context/KycContext";

const KycBuyerLevelTwo = ({setOpen, setKycLevel}) => {
    const [form] = useForm();
    const {setKyc3} = useContext(KycContext);

    const optionData = [{label: "Buyer Level Two", value: "Buyer Level Two"}];
    const [bill, setBill] = useState(null);
    function handelKycLevel() {
        if (!bill) return Toast({type: "error", message: "Statement is Reqiured"});
        setOpen(false);
        setKyc3(true);
    }

    return (
        <StyledKycBuyer>
            <div className="twoCol">
                <span className="kycdiscreption">Verification required. Please provide some details.</span>
            </div>
            <Form form={form} onSubmit={handelKycLevel}>
                <Form.Item
                    label="Bank Name"
                    name="Bank Name"
                    rules={[
                        {required: true},
                        {
                            message: "Maximum Character Length is 256",
                        },
                    ]}>
                    <Select options={optionData} />
                </Form.Item>
                <div className="combineFields">
                    <Form.Item
                        type="text"
                        label="Account Holder Name"
                        name="AccountHolderName"
                        placeholder="Alex Mertiz"
                        rules={[
                            {required: true},
                            {
                                message: "Maximum Character Length is 256",
                            },
                        ]}>
                        <Field />
                    </Form.Item>
                    <Form.Item
                        type="num"
                        label="Account no"
                        name="accountNo"
                        placeholder="35402755003895"
                        rules={[
                            {required: true},
                            {
                                message: "Maximum Character Length is 256",
                            },
                        ]}>
                        <Field />
                    </Form.Item>
                </div>

                <label htmlFor="" className="fakelabel">
                    Residence Proof
                </label>
                {/* <Form.Item
                  rules={[
                      {required: true},
                      {
                          pattern: /^.{0,256}$/,
                          message: "Maximum Character Length is 256",
                      },
                  ]}> */}
                <UploadFile
                    uploadTitle="Upload a copy of bills, bank statement"
                    name="bank statement"
                    onChange={e => setBill(e)}
                />
                {/* </Form.Item> */}

                <Button rounded md btntype="primary" width="214" htmlType="submit">
                    Continue
                </Button>
            </Form>
        </StyledKycBuyer>
    );
};

export default KycBuyerLevelTwo;
