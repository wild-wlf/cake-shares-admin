import React, { useMemo, useState } from 'react';
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
import Toast from '@/components/molecules/Toast';

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
  const { products_data, products_loading } = productService.GetAllProducts(searchQuery, fetch);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async data => {
    try {
      const postData = {
        startDate: data.startDate,
        endDate: data?.endDate,
        ...(data?.choose_product?.value !== 'all' && { productId: data?.choose_product?.value }),
      };
      setIsLoading(true);
      await productService.downloadStatement(postData);
      openNext();
    } catch ({ message }) {
      Toast({
        type: 'error',
        message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const productOptions = useMemo(
    () => [
      { label: 'All', value: 'all' },
      ...(products_data?.items?.map(item => ({ label: item.productName, value: item._id })) || []),
    ],
    [products_data?.items],
  );

  const loadProducts = async searchText => {
    try {
      let options = [];
      const response = await productService.getAllProducts({
        getAll: true,
        searchText,
      });
      options = response?.items?.map(item => ({ label: item.productName, value: item._id }));
      return options;
    } catch (error) {
      return [];
    }
  };

  return (
    <ModalContainer>
      <h3 className="text">Please fill up the details to proceed.</h3>
      <Form form={form} onSubmit={onSubmit}>
        <DateContainer>
          <div className="wrapper">
            <Form.Item
              name="startDate"
              noMargin
              sm
              type="date"
              label="From"
              rules={[
                {
                  required: true,
                  message: 'Start Date is Required',
                },
                {
                  transform: value => new Date(value).setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0),
                  message: 'Start Date cannot be in the Future!',
                },
                {
                  transform: value => new Date(value) > new Date(form.getFieldValue('endDate')),
                  message: `Start Date cannot be greator than end date`,
                },
              ]}>
              <Field />
            </Form.Item>
          </div>
          <div className="wrapper">
            <Form.Item
              name="endDate"
              noMargin
              sm
              type="date"
              label="To"
              rules={[
                {
                  required: true,
                  message: 'End Date is Required',
                },
                {
                  transform: value => new Date(value).setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0),
                  message: 'End Date cannot be in the Future!',
                },
                {
                  transform: value => new Date(value) < new Date(form.getFieldValue('startDate')),
                  message: `End Date cannot be less than start date`,
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
                rounded
                menuPlacement="top"
                sm
                name="choose_product"
                isSearchable
                placeholder="Select Product"
                defaultOptions={productOptions}
                rules={[
                  {
                    required: true,
                    message: 'Please Select Product!',
                  },
                ]}>
                <Select async loadOptions={loadProducts} />
              </Form.Item>
            </div>
          )}
          {/* <div className="wrapper">
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
          </div> */}
        </MailContainer>
        <Button rounded width={'170px'} height={'40px'} sm btntype="green" htmlType="submit" loader={isLoading}>
          Get Records
        </Button>
      </Form>
    </ModalContainer>
  );
};

export default DownloadModal;
