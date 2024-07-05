import { useState, useMemo } from 'react';
import { StyledCreateNewProduct } from './CreateNewProduct.styles';
import Field from '@/components/molecules/Field';
import Select from '@/components/atoms/Select';
import Button from '@/components/atoms/Button';
import { IoAdd } from 'react-icons/io5';
import { RxCrossCircled } from 'react-icons/rx';
import Form, { useForm } from '@/components/molecules/Form';
import productService from '@/services/productService';
import Toast from '@/components/molecules/Toast';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import categoryService from '@/services/categoryService';
import UploadField from '../../../atoms/Field';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import { validateAmenity } from '@/helpers/common';
import UploadImg from '@/components/molecules/UploadImg';

const CreateNewProduct = ({ handleCreateProduct }) => {
  const [media, setmedia] = useState([]);
  const [amenities, setAmenities] = useState(['']);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user, refetch, fetch } = useContextHook(AuthContext, v => ({
    refetch: v.refetch,
    user: v.user,
    fetch: v.fetch,
  }));

  const { categories_data } = categoryService.GetAllCategories(
    {
      itemsPerPage: 10,
    },
    fetch,
  );

  const categoriesOptions = useMemo(() => {
    return categories_data?.items
      ?.filter(item => item?.status !== 'Inactive')
      ?.map(ele => ({
        value: ele?._id,
        label: ele?.name,
      }));
  }, [categories_data?.items]);

  const addAmenities = () => setAmenities([...amenities, '']);

  const removeAmenity = index => setAmenities(prev => prev.filter((_, i) => i !== index));

  const [form] = useForm();
  const handleFileChange = (e, index) => {
    const file = e;
    setImages(prev => {
      const updatedImages = [...prev];
      updatedImages[index] = file;
      return updatedImages;
    });
  };

  const handleSubmit = async e => {
    const obj = {
      userId: user._id,
      productName: e.productName,
      investmentType: e.investmentType.value,
      address: e.address,
      deadline: e.deadline,
      kycLevel: e.kycLevel.value,
      description: e.productDescription,
      investmentReason: e.whyInvest,
      amenities: amenities,
      media,
      ...(images?.length > 0 && { images }),
      minimumBackers: e.minBackers,
      maximumBackers: e.maxBackers,
      assetValue: e.assetValue,
      minimumInvestment: e.minInvestment,
    };

    const formDataToSend = new FormData();
    Object.keys(obj).forEach(key => {
      if (key === 'images') {
        obj.images.forEach((file, index) => {
          formDataToSend.append(`images[${index}]`, file);
        });
      } else if (
        key === 'media' ||
        (key === 'amenities' && (Array.isArray(obj[key]) || typeof obj[key] === 'object'))
      ) {
        formDataToSend.append(key, JSON.stringify(obj[key]));
      } else {
        formDataToSend.append(key, obj[key]);
      }
    });
    setLoading(true);
    try {
      await productService.addProduct(formDataToSend);
      refetch();
      setLoading(false);
      handleCreateProduct();
    } catch (error) {
      Toast({
        type: 'error',
        message: error.message,
      });
      setLoading(false);
    }
  };

  const loadInvestmentTypeOptions = async searchText => {
    try {
      let options = [];
      const response = await categoryService.getAllCategories({
        searchText,
      });
      options = response?.items?.map(_ => ({ value: _?._id, label: _?.name }));
      return options;
    } catch (error) {
      return [];
    }
  };
  const [searchValue, setSearchValue] = useState('');
  const libraries = ['places'];
  const handlePlaceSelect = place => {
    if (place.geometry && place.geometry.location) {
      setSearchValue(place.name?.concat(` ${place.formatted_address}`));
      form.setFieldsValue({
        address: place.name?.concat(` ${place.formatted_address}`),
      });
    }
  };
  return (
    <StyledCreateNewProduct>
      <Form form={form} onSubmit={handleSubmit}>
        <span className="heading">Product Info:</span>
        <div className="input-grid">
          <Form.Item
            type="text"
            label="Product Name"
            name="productName"
            sm
            rounded
            placeholder="Product Name"
            rules={[
              {
                required: true,
                message: 'Please enter Product Name',
              },
              {
                pattern: /^.{3,40}$/,
                message: 'Minimum character length of product name is 3',
              },
            ]}>
            <Field maxLength={40} />
          </Form.Item>
          <Form.Item
            label="Investment Type"
            name="investmentType"
            defaultOptions={categoriesOptions}
            sm
            rounded
            isSearchable
            placeholder="Investment Type"
            rules={[
              {
                required: true,
                message: 'Please enter Investment Type',
              },
            ]}>
            <Select async loadOptions={loadInvestmentTypeOptions} />
          </Form.Item>
          <div>
            <LoadScript googleMapsApiKey={'AIzaSyB0gq-rFU2D-URzDgIQOkqa_fL6fBAz9qI'} libraries={libraries}>
              <Autocomplete
                className="map-list"
                onLoad={autocomplete =>
                  autocomplete.addListener('place_changed', () => {
                    handlePlaceSelect(autocomplete.getPlace());
                    // console.log(autocomplete.getPlace());
                  })
                }>
                <Form.Item
                  type="text"
                  label="Address"
                  name="address"
                  sm
                  rounded
                  placeholder="Please enter address"
                  value={searchValue}
                  onChange={e => {
                    form.setFieldsValue({
                      address: e.target.value,
                    });
                    setSearchValue(e.target.value);
                  }}
                  rules={[
                    {
                      required: true,
                      message: 'Please enter Address',
                    },
                    {
                      pattern: /^.{0,256}$/,
                      message: 'Please enter a valid Address',
                    },
                  ]}>
                  <Field />
                </Form.Item>
              </Autocomplete>
            </LoadScript>
          </div>
          <Form.Item
            type="date"
            label="Deadline"
            name="deadline"
            sm
            rounded
            rules={[
              {
                required: true,
                message: 'Please enter Deadline',
              },
              {
                transform: value => new Date(value).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0),
                message: 'Deadline Cannot be in the Past!',
              },
            ]}>
            <Field />
          </Form.Item>
          <Form.Item
            type="text"
            label="KYC/KYB Level"
            name="kycLevel"
            sm
            rounded
            placeholder="KYC Level"
            rules={[
              {
                required: true,
                message: 'Please enter KYC Level',
              },
              {
                transform: value => value > user?.kycLevel,
                message: 'Your KYC level must be upgraded to create a product of a higher KYC level.',
              },
            ]}>
            <Select
              options={[
                { label: 'Level 0', value: '0' },
                { label: 'Level 1', value: '1' },
                { label: 'Level 2', value: '2' },
              ]}
            />
          </Form.Item>
        </div>
        <div className="product-description">
          <div className="description-holder">
            <Form.Item
              type="textarea"
              label="Product Description"
              name="productDescription"
              sm
              rounded
              placeholder="Enter Text"
              rules={[
                {
                  required: true,
                  message: 'Please enter Product Description',
                },
                {
                  pattern: /^.{10,1000}$/,
                  message: 'Minimum character length of product description is 10',
                },
              ]}>
              <Field maxLength={1000} />
            </Form.Item>
          </div>
          <div className="description-holder">
            <Form.Item
              type="textarea"
              label="Why Invest in it?"
              name="whyInvest"
              sm
              rounded
              placeholder="Enter Text"
              rules={[
                {
                  required: true,
                  message: 'Please enter Description',
                },
                {
                  pattern: /^.{10,1000}$/,
                  message: 'Minimum character length of description is 10',
                },
              ]}>
              <Field maxLength={1000} />
            </Form.Item>
          </div>
        </div>
        <span className="heading">Upload Media:</span>

        <div className="upload-image">
          {Array.from({ length: 3 }).map((_, index) => {
            return (
              <div className="upload" key={index}>
                <Form.Item
                  type="img"
                  sm
                  rounded
                  placeholder="Enter Text"
                  rules={[
                    {
                      required: true,
                      message: 'Please Upload Product Media!',
                    },
                  ]}
                  id={`media${index}`}
                  name={`media${index}`}
                  uploadTitle={index === 0 ? 'Upload Image/Video' : 'Upload Image'}
                  accept={
                    index === 0 ? 'image/jpeg, image/jpg, image/png, video/mp4' : 'image/jpeg, image/jpg, image/png'
                  }
                  noMargin
                  disc={
                    index === 0
                      ? 'File size must be less than 1MB in JPG, JPEG, PNG or MP4 format.'
                      : 'File size must be less than 1MB in JPG, JPEG, PNG '
                  }
                  onChange={e => {
                    form.setFieldsValue({
                      [`media${index}`]: e,
                    });
                    setImages(prev => {
                      const updatedImages = [...prev];
                      updatedImages[index] = e.target.file;
                      return updatedImages;
                    });
                  }}>
                  <Field />
                </Form.Item>
              </div>
            );
          })}
        </div>
        <div className="add-amenities-holder">
          <span className="heading">Amenities:</span>
          {amenities && amenities?.length < 10 && (
            <div className="add-amenities">
              <span>You can add up to 10 amenities only!</span>
              <div className="add-more" onClick={addAmenities}>
                <IoAdd />
                <span>Add more</span>
              </div>
            </div>
          )}
          <div className="amenities">
            {amenities?.map((elem, ind) => (
              <>
                <Form.Item
                  type="text"
                  name={`amentity${ind}`}
                  sm
                  rounded
                  placeholder="Enter text"
                  value={amenities[ind]}
                  noMargin
                  suffix={<RxCrossCircled size={14} />}
                  onClickSuffix={() => removeAmenity(ind)}
                  onChange={e => {
                    form.setFieldsValue({
                      [`amentity${ind}`]: e.target.value,
                    });
                    setAmenities(prev => prev.map((item, i) => (i === ind ? e.target.value : item)));
                  }}
                  rules={[
                    {
                      required: true,
                      message: 'Please enter Amentity',
                    },
                    {
                      pattern: /^.{3,20}$/,
                      message: 'Please enter a valid amenity',
                    },
                    {
                      transform: value => validateAmenity(value, amenities) === true,
                      message: 'Amenity already added!',
                    },
                  ]}>
                  <Field noMargin maxLength={20} />
                </Form.Item>
              </>
            ))}
          </div>
        </div>
        <span className="heading">Investment Info:</span>
        <div className="input-grid">
          <Form.Item
            type="number"
            label="Minimum Backers"
            name="minBackers"
            sm
            rounded
            placeholder="09"
            rules={[
              {
                required: true,
                message: 'Please enter Minimum Backers Limit',
              },
              {
                pattern: /^[1-9][0-9]{0,3}$/,
                message: 'Please enter a valid limit between 1 and 1000',
              },
            ]}>
            <Field maxLength={4} />
          </Form.Item>
          <Form.Item
            type="number"
            label="Maximum Backers"
            name="maxBackers"
            sm
            rounded
            placeholder="01"
            rules={[
              {
                required: true,
                message: 'Please enter Maximum Backers Limit',
              },
              // {
              //   pattern: /^(0?[1-9]|[1-9][0-9])$/,
              //   message: 'Please enter a valid limit between 1 and 99',
              // },
              {
                pattern: /^[1-9][0-9]{0,3}$/,
                message: 'Please enter a valid limit between 1 and 1000',
              },
              {
                transform: value => value < +form.getFieldValue('minBackers'),
                message: 'Maximun backers cannot be less than minimum backers!',
              },
            ]}>
            <Field maxLength={4} />
          </Form.Item>
          <Form.Item
            type="number"
            label="Total Asset Value"
            name="assetValue"
            sm
            rounded
            placeholder="10"
            rules={[
              {
                required: true,
                message: 'Please enter Total Asset Value',
              },
              {
                pattern: /^[1-9][0-9]{0,3}$/,
                message: 'Please enter a valid value up to 4 digits',
              },
              {
                pattern: /^[1-9]\d*$/,
                message: 'Asset value must be whole number (greater than zero)',
              },
            ]}>
            <Field />
          </Form.Item>
          <Form.Item
            type="number"
            label="Min Investment"
            name="minInvestment"
            sm
            rounded
            placeholder="10"
            rules={[
              {
                required: true,
                message: 'Please enter Minimum Investment Value',
              },
              {
                pattern: /^[1-9][0-9]{0,3}$/,
                message: 'Please enter a valid value up to 4 digits',
              },
              {
                pattern: /^[1-9]\d*$/,
                message: 'Minimum investment must be whole number (greater than zero)',
              },
              {
                transform: value => value > +form.getFieldValue('assetValue'),
                message: 'Minimum investment cannot be greater than asset value!',
              },
            ]}>
            <Field />
          </Form.Item>
        </div>
        <Button type="primary" width="150px" sm rounded htmlType="submit" loader={loading} disabled={loading}>
          Create Product
        </Button>
      </Form>
    </StyledCreateNewProduct>
  );
};

export default CreateNewProduct;
