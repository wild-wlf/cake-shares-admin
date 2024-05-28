import React, { useEffect, useState } from "react";
import { StyledEditProductModal } from "./EditProductModal.styles";
import Field from "@/components/molecules/Field";
import Select from "@/components/atoms/Select";
import productImg1 from "../../../../_assets/product-img-1.png";
import productImg2 from "../../../../_assets/product-img-2.png";
import productImg3 from "../../../../_assets/product-img-3.png";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import { IoAdd } from "react-icons/io5";
import UploadFile from "@/components/molecules/UploadFile";
import Form, { useForm } from "@/components/molecules/Form";
import { format } from "date-fns";
import { StyledCreateNewProduct } from "../CreateNewProduct/CreateNewProduct.styles";
import productService from "@/services/productService";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "@/context/authContext";
import Toast from "@/components/molecules/Toast";

const EditProductModal = ({ product, setEditProductModal }) => {
 const {user, refetch, fetch} = useContextHook(AuthContext, v => ({
     refetch: v.refetch,
     user: v.user,
     fetch: v.fetch,
 }));
 const {products_data, products_loading} = productService.GetAllProducts(fetch);

 const [form] = useForm();
 const [media, setMedia] = useState([]);
 const [images, setImages] = useState([]);

 const [amenities, setAmenities] = useState(product.amenities);
 const handleSubmit = async e => {
     const payload = {
         ...e,
         investmentType: e?.investmentType?.value,
         kycLevel: e?.kycLevel.value,
         media,
         ...(images?.length > 0 && {images}),
         amenities,
     };
     console.log(payload);
     const formDataToSend = new FormData();

     Object.keys(payload).forEach(key => {
         if (key === "images") {
             payload.images.forEach((file, index) => {
                 formDataToSend.append(`images[${index}]`, file);
             });
         } else if (
             key === "media" ||
             (key === "amenities" && (Array.isArray(payload[key]) || typeof payload[key] === "object"))
         ) {
             formDataToSend.append(key, JSON.stringify(payload[key]));
         } else {
             formDataToSend.append(key, payload[key]);
         }
     });
     try {
         await productService.updateProduct(product._id, formDataToSend);
         Toast({
             type: "success",
             message: "Product updated successfully",
         });
         refetch();
         setEditProductModal(false);
     } catch (error) {
         Toast({
             type: "error",
             message: error.message,
         });
     }
 };
  const kycOptions = [
    { label: "Level 0", value: "0" },
    { label: "Level 1", value: "1" },
    { label: "Level 2", value: "2" },
  ];
  const investmentOptions = [
    { label: "Properties", value: "properties" },
    { label: "Vehicles", value: "vehicles" },
  ];

  const addAmenity = () => {
    setAmenities([...amenities, ""]);
  };
  const handleFileChange = (e, index) => {
    const file = e.target.file;
    setImages((prev) => {
      const updatedImages = [...prev];
      updatedImages[index] = file;
      return updatedImages;
    });
  };
  // console.log(product.investmentType);
  useEffect(() => {
    form.setFieldsValue({
      productName: product?.productName,
      // investmentType: product?.investmentType,
      investmentType: investmentOptions.find(
        (ele) => ele.value === product.investmentType
      ),
      address: product?.address,
      deadline: format(product?.deadline, "yyyy-MM-dd"),
      kycLevel: kycOptions.find(
        (ele) => ele.value === product.kycLevel.toString()
      ),
      description: product.description,
      investmentReason: product.investmentReason,
      minBackers: product.minimumBackers,
      maxBackers: product.maximumBackers,
      assetValue: product.assetValue,
      minimumInvestment: product.minimumInvestment,
    });
    setMedia(product?.media);
    product?.media.map((field, index) => {
      form.setFieldsValue({
        [`media${index}`]: field,
      });
      return field;
    });
    setAmenities(product?.amenities);
    product?.amenities.map((field, index) => {
      form.setFieldsValue({
        [`amenity${index}`]: field,
      });
      return field;
    });
  }, [product]);

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
                message: "Please enter Product Name",
              },
              {
                pattern: /^.{0,40}$/,
                message: "Please enter a valid Product Name",
              },
            ]}
          >
            <Field />
          </Form.Item>
          <Form.Item
            type="text"
            label="Investment Type"
            name="investmentType"
            sm
            rounded
            placeholder="Investment Type"
            rules={[
              {
                required: true,
                message: "Please enter Investment Type",
              },
            ]}
          >
            <Select options={investmentOptions} />
          </Form.Item>

          <Form.Item
            type="text"
            label="Address"
            name="address"
            sm
            rounded
            placeholder="Please enter address"
            rules={[
              {
                required: true,
                message: "Please enter Address",
              },
              {
                pattern: /^.{0,256}$/,
                message: "Please enter a valid Address",
              },
            ]}
          >
            <Field label="Address" />
          </Form.Item>
          <Form.Item
            type="date"
            label="Deadline"
            name="deadline"
            sm
            rounded
            rules={[
              {
                required: true,
                message: "Please enter Deadline",
              },
            ]}
          >
            <Field />
          </Form.Item>
          <Form.Item
            type="text"
            label="KYC Level"
            name="kycLevel"
            sm
            rounded
            placeholder="KYC Level"
            rules={[
              {
                required: true,
                message: "Please enter KYC Level",
              },
            ]}
          >
            <Select options={kycOptions} />
          </Form.Item>
        </div>
        <div className="product-description">
          <div className="description-holder">
            <Form.Item
              type="textarea"
              label="Product Description"
              name="description"
              sm
              placeholder="Enter Text"
              rules={[
                {
                  required: true,
                  message: "Please enter Product Description",
                },
                {
                  pattern: /^.{0,256}$/,
                  message: "Product Description must be between 0 to 256",
                },
              ]}
            >
              <Field />
            </Form.Item>
          </div>
          <div className="description-holder">
            <Form.Item
              type="textarea"
              label="Why Invest in it?"
              name="investmentReason"
              sm
              rounded
              placeholder="Enter Text"
              rules={[
                {
                  required: true,
                  message: "Please enter Description",
                },
                {
                  pattern: /^.{0,256}$/,
                  message: "Description must be between 0 to 256",
                },
              ]}
            >
              <Field />
            </Form.Item>
          </div>
        </div>
        <span className="heading">Upload Media</span>
        <div className="upload-image">
          {Array.from({ length: 3 }).map((_, index) => {
            return (
              <div key={index} className="upload">
                <UploadFile
                  id={`media${index}`}
                  name={`media${index}`}
                  bg
                  img={media[index]}
                  noMargin
                  disc="image should be up to 1mb only"
                  onChange={(e) => handleFileChange(e, index)}
                />
              </div>
            );
          })}
        </div>
        <div className="add-amenities-holder">
          <span className="heading">Amenities</span>
          <div className="add-amenities">
            <span>You can add up to 10 amenities only!</span>
            <div onClick={addAmenity} className="add-more">
              <IoAdd />
              <span>Add more</span>
            </div>
          </div>
          <div className="amenities">
            {amenities &&
              amenities.length > 0 &&
              amenities.map((amenity, index) => (
                <Form.Item
                  key={index}
                  type="text"
                  name={`amenity${index}`}
                  sm
                  rounded
                  value={amenity}
                  placeholder="Enter text"
                  onChange={(e) => {
                    form.setFieldsValue({
                      [`amenity${index}`]: e.target.value,
                    });
                    setAmenities((prev) => {
                      const updatedAmenities = [...prev];
                      updatedAmenities[index] = e.target.value;
                      return updatedAmenities;
                    });
                  }}
                  rules={[
                    {
                      required: true,
                      message: "Please enter Amentity",
                    },
                    {
                      pattern: /^.{0,40}$/,
                      message: "Please enter a valid Amentity",
                    },
                  ]}
                >
                  <Field noMargin />
                </Form.Item>
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
            placeholder="01"
            rules={[
              {
                required: true,
                message: "Please enter Minimum Backers Limit",
              },
              {
                pattern: /^.{0,2}$/,
                message: "Please enter a valid Backers Limit",
              },
            ]}
          >
            <Field />
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
                message: "Please enter Maximum Backers Limit",
              },
              {
                pattern: /^.{0,2}$/,
                message: "Please enter a valid Backers Limit",
              },
            ]}
          >
            <Field />
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
                message: "Please enter Total Asset Value",
              },
              {
                pattern: /^.{0,8}$/,
                message: "Please enter a valid Backers Limit",
              },
            ]}
          >
            <Field />
          </Form.Item>
          <Form.Item
            type="number"
            label="Min Investment"
            name="minimumInvestment"
            sm
            rounded
            placeholder="10"
            rules={[
              {
                required: true,
                message: "Please enter Minimum Investment Value",
              },
              {
                pattern: /^.{0,8}$/,
                message: "Please enter a valid Minimum Investment",
              },
            ]}
          >
            <Field />
          </Form.Item>
        </div>
        <Button width="150px" rounded htmlType="submit" type="green" md>
          Save Changes
        </Button>
      </Form>
    </StyledCreateNewProduct>
  );
};

export default EditProductModal;
