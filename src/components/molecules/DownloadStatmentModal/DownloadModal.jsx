import React, { useState } from 'react';
import { ModalContainer, DateContainer, MailContainer } from './DownloadModalStyle';
import Field from '../Field';
import Form, { useForm } from '../Form';
import { MdDateRange } from 'react-icons/md';
import Button from '@/components/atoms/Button';
import Select from '@/components/atoms/Select';
import { useContext } from 'react';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import productService from '@/services/productService';

const DownloadModal = ({ openNext }) => {
  const { fetch, user } = useContextHook(AuthContext, v => ({
    user: v.user,
    fetch: v.fetch,
  }));
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    itemsPerPage: 10,
    searchText: '',
    type: 'all',
    startDate: '',
    endDate: '',
  });
  const [form] = useForm();
  const [date1, setDate1] = useState();
  const [date2, setDate2] = useState();

  const { products_data, products_loading } = productService.GetAllProducts(searchQuery, fetch);

  return (
    <ModalContainer>
      <h3 className="text">Please fill up the details to proceed.</h3>
      <Form form={form}>
        <DateContainer>
          <div className="wrapper">
            <Field
              noMargin
              selected={date1}
              onChange={({ target: { value } }) => {
                setDate1(value);
              }}
              suffix={<MdDateRange />}
              placeholderText="Select Date"
              type="datepicker"
              label="From"
              rules={[
                {
                  required: true,
                  message: 'Email is Required',
                },
              ]}
            />
          </div>
          <div className="wrapper">
            <Form.Item
              minWidth
              noMargin
              selected={date2}
              onChange={({ target: { value } }) => {
                setDate2(value);
              }}
              suffix={<MdDateRange />}
              placeholderText="Select Date"
              type="datepicker"
              label="To"
              rules={[
                {
                  required: true,
                  message: 'Email is Required',
                },
              ]}>
              <Field />
            </Form.Item>
          </div>
        </DateContainer>
        <MailContainer>
          {user?.type === 'Seller' && (
            <div className="wrapper">
              <Form.Item
                label="Choose Product"
                type="email"
                rounded
                sm
                name="choose_product"
                rules={[
                  {
                    required: true,
                    // message: 'Email is Required',
                  },
                ]}>
                <Select
                  options={
                    user?.isVerified
                      ? products_data?.items?.map(item => ({ label: item.productName, value: item.productName }))
                      : []
                  }
                />
              </Form.Item>
            </div>
          )}
          <div className="wrapper">
            <Form.Item
              label="Email Address"
              type="email"
              rounded
              sm
              name="email"
              placeholder="michelgredes@gmail.com"
              rules={[
                {
                  required: true,
                  message: 'Email is Required',
                },
              ]}>
              <Field />
            </Form.Item>
          </div>
        </MailContainer>
        <Button rounded width={'170px'} height={'40px'} sm btntype="green" onClick={openNext}>
          Send Mail
        </Button>
      </Form>
    </ModalContainer>
  );
};

export default DownloadModal;
