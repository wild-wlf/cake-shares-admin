import React, { useState } from 'react';
import { AdvertiseModalWrapper } from './AdvertiseModal.style';
import Button from '../../Button';
import Form, { useForm } from '@/components/molecules/Form';
import Select from '../../Select';
import CenterModal from '@/components/molecules/Modal/CenterModal';
import Image from 'next/image';
import GeneralInfoModal from '@/components/common/GeneralInfoModal';
import InfoIcon from '../../../../_assets/info-icon.svg';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import { formatNumber } from '@/helpers/common';
import productService from '@/services/productService';
import Toast from '@/components/molecules/Toast';

const AdvertiseModal = ({ handleAdvertiseModal, setProductAdvertiseModal, product, setAdvertisedDays }) => {
  const { user, setPermission, refetch } = useContextHook(AuthContext, v => ({
    user: v.user,
    setPermission: v.setPermission,
    refetch: v.refetch,
  }));
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [generalInfoModal, setGeneralInfoModal] = useState(false);
  const [currentValue, setcurrentValue] = useState();
  const [estimatedCost, setEstimatedCost] = useState();
  const arr = [
    { label: '1 Day', value: 1 },
    { label: '2 Days', value: 2 },
    { label: '3 Days', value: 3 },
    { label: '5 Days', value: 5 },
    { label: '7 Days', value: 7 },
  ];

  const onSubmit = async data => {
    const { duration } = data;
    if (parseFloat(user?.wallet) < estimatedCost) {
      setGeneralInfoModal(true);
      return;
    }
    try {
      setIsLoading(false);
      const payload = {
        userId: user?._id,
        product: product?._id,
        startTime: new Date().toISOString(),
        endTime: new Date(new Date().setDate(new Date().getDate() + duration.value)).toISOString(),
        amount: estimatedCost,
        isLive: true,
      };
      await productService.advertiseProduct(payload);
      setAdvertisedDays(duration?.value);
      handleAdvertiseModal();
      setPermission(true);
      refetch();
    } catch ({ message }) {
      Toast({
        type: 'error',
        message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <CenterModal
        iscloseAble={false}
        open={generalInfoModal}
        setOpen={setGeneralInfoModal}
        title={
          <>
            <Image src={InfoIcon} alt="InfoIcon" />
          </>
        }
        width="689">
        <GeneralInfoModal
          title="Insufficient Wallet Balance!"
          description={`You currently do not have sufficient wallet balance to perform this action. The amount required to advertise this product for ${selected} day${
            selected > 1 ? 's' : ''
          } is $${formatNumber(estimatedCost)}, while your current account balance is $${
            formatNumber(parseFloat(user?.wallet)) || '0.00'
          }. Please top up your account.`}
          setOpen={setGeneralInfoModal}
        />
      </CenterModal>
      <AdvertiseModalWrapper>
        <Form form={form} onSubmit={onSubmit}>
          <div>
            <span className="desc">Select the ad duration to begin</span>
          </div>
          <div className="field-div">
            <Form.Item
              label="Select Days"
              name="duration"
              options={arr}
              onChange={e => {
                form.setFieldsValue({
                  duration: e.target.value,
                });
                setEstimatedCost(e.target.value.value * 200);
                setSelected(e.target.value.value);
              }}
              rules={[{ required: true, message: 'Please Select Advertisement Duration!' }]}>
              <Select />
            </Form.Item>
          </div>
          {selected && (
            <div className="budget-desc">
              For a {selected} day{selected > 1 ? 's' : ''} ad campaign, the estimated cost would be{' '}
              <span>${estimatedCost}.00</span>.
            </div>
          )}
          <div className="btnWrapper">
            {selected && (
              <Button
                sm
                rounded
                btntype="white"
                width="170px"
                htmlType={'submit'}
                onClick={() => setProductAdvertiseModal(false)}>
                No
              </Button>
            )}
            <Button
              sm
              rounded
              btntype="green"
              width="170px"
              htmlType="submit"
              loader={isLoading}
              //  onClick={handleAdvertiseModal}
            >
              {selected && 'Yes! '}Continue
            </Button>
          </div>
        </Form>
      </AdvertiseModalWrapper>
    </>
  );
};

export default AdvertiseModal;
