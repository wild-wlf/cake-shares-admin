import Button from "@/components/atoms/Button";
import Field from "@/components/molecules/Field";
import React, { useEffect, useState } from "react";
import { StyledEditForm } from "./EditForm.styles";
import Form from "@/components/molecules/Form/Form";
import { useForm } from "@/components/molecules/Form";
// import { countries } from "@/components/Constant";
import Image from "next/image";
import Select from "@/components/atoms/Select";
import ModalContainer from "@/components/molecules/ModalContainer";
import { MdModeEdit } from "react-icons/md";
import Password from "../../../../../_assets/changePassword.svg";
import ChangePassword from "../ChangePassword";
import CenterModal from "@/components/molecules/Modal/CenterModal";
const EditProfile = () => {
  // const [arr, setArr] = useState(countries);
  const [changePassword, setChangePassword] = useState(false);
  const [form] = useForm();

  function handelChange(value = "PK") {
    const newArr = arr.map((elem, index) => ({
      ...elem,
      label: (
        <div key={index} className="countrySelect">
          <figure>
            <Image
              src={`https://flagsapi.com/${elem.value}/shiny/48.png`}
              width={48}
              height={48}
              alt={`Flag of ${elem.value}`}
            />
          </figure>
          {elem.label}
        </div>
      ),
    }));
    setArr(newArr);
  }
  useEffect(() => {
    handelChange();
  }, []);

  function handelSubmit(e) {
    console.log(e);
  }
  useEffect(() => {
    form.setFieldsValue({
      // full_name: "hamza",
      //  email: admin?.email,
      //  roles: roles?.filter(({ value }) =>
      //    admin?.roles?.find(({ id }) => id === value)
      //  ),
    });
  }, []);
  return (
    <>
      <CenterModal
        open={changePassword}
        setOpen={setChangePassword}
        width={663}
        title="Change Password"
      >
        <ChangePassword />
      </CenterModal>
      <StyledEditForm>
        <Form form={form} onSubmit={handelSubmit}>
          <div className="combine-fields">
            <Form.Item
              type="text"
              label="Full Name"
              name="full_name"
              sm
              rounded
              placeholder="Alex Mertiz"
              rules={[
                { required: true },
                {
                  pattern: /^.{0,40}$/,
                  message: "Maximum Character Length is 256",
                },
              ]}
            >
              <Field />
            </Form.Item>
            <Form.Item
              type="text"
              label="Username"
              name="user_name"
              sm
              rounded
              placeholder="alex123"
              rules={[
                { required: true },
                {
                  pattern: /^.{0,40}$/,
                  message: "Maximum Character Length is 256",
                },
              ]}
            >
              <Field />
            </Form.Item>
            <Form.Item
              type="text"
              label="Email Address"
              name="email_address"
              sm
              rounded
              placeholder="alex123@gmail.com"
              rules={[
                { required: true },

                {
                  pattern: /^.{0,40}$/,
                  message: "Maximum Character Length is 256",
                },
              ]}
            >
              <Field />
            </Form.Item>
            {/* <Form.Item
              type="text"
              label="Country"
              name="country"
              sm
              rounded
              placeholder="Select"
              rules={[
                { required: true },
                {
                  pattern: /^.{0,40}$/,
                  message: "Maximum Character Length is 256",
                },
              ]}
            >
              <Select options={arr} />
            </Form.Item> */}
            <Form.Item
              type="text"
              label="Birthdate (D.O.B)"
              name="dob"
              sm
              rounded
              placeholder="03/05/2001"
              rules={[
                { required: true },

                {
                  pattern: /^.{0,40}$/,
                  message: "Maximum Character Length is 256",
                },
              ]}
            >
              <Field />
            </Form.Item>
          </div>

          <strong
            className="fake-label"
            onClick={() => setChangePassword(!changePassword)}
          >
            Change Password!
            <Image src={Password} alt="changePassword" />
          </strong>

          <Form.Item
            type="password"
            label="Current Password"
            name="current_password"
            sm
            rounded
            placeholder="**********"
            rules={[
              { required: true },
              {
                pattern: /^.{0,40}$/,
                message: "Maximum Character Length is 256",
              },
            ]}
          >
            <Field />
          </Form.Item>
          <Button rounded md btntype="primary" width="170" htmlType="submit">
            Save Changes
          </Button>
        </Form>
      </StyledEditForm>
    </>
  );
};

export default EditProfile;
