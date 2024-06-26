import React from 'react';
import { StyledEditForm } from '../EditBank/EditForm.styles';
import Form from '@/components/molecules/Form/Form';
import { useForm } from '@/components/molecules/Form';
import Button from '@/components/atoms/Button';
import Field from '@/components/molecules/Field';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import userService from '@/services/userService';
import Toast from '@/components/molecules/Toast';

const ChangePassword = ({ setOpen }) => {
  const { user, onLogout } = useContextHook(AuthContext, v => ({
    user: v.user,
    onLogout: v.onLogout,
  }));
  const [form] = useForm();
  async function handelSubmit(e) {
    try {
      let obj = {
        currentPassword: e.current_Password,
        newPassword: e.new_Password,
      };
      await userService.updatePassword(obj, user?._id);
      onLogout();
      Toast({ type: 'success', message: 'Password Updated!' });
      setOpen(false);
    } catch (error) {
      Toast({ type: 'error', message: error.message });
    }
  }
  return (
    <StyledEditForm form={form} onSubmit={handelSubmit}>
      <Form.Item
        type="password"
        label="Current Password"
        name="current_Password"
        sm
        rounded
        placeholder="Enter Current Password"
        rules={[
          { required: true },
          {
            pattern: /^.{0,40}$/,
            message: 'Maximum Character Length is 256',
          },
        ]}>
        <Field />
      </Form.Item>
      <div className="combine-fields">
        <Form.Item
          type="password"
          label="New Password"
          name="new_Password"
          sm
          rounded
          placeholder="Enter New Password"
          rules={[
            { required: true },
            {
              pattern: /^.{0,40}$/,
              message: 'Maximum Character Length is 256',
            },
          ]}>
          <Field />
        </Form.Item>
        <Form.Item
          type="password"
          label="Confirm Password"
          name="confirm_Password"
          sm
          rounded
          placeholder="confirm password"
          rules={[
            {
              required: true,
            },
            {
              transform: value => value !== form.getFieldValue('new_Password'),
              message: 'The two passwords that you entered do not match!',
            },
          ]}>
          <Field />
        </Form.Item>
      </div>
      <Button rounded md btntype="primary" width="170" htmlType="submit">
        Change Password
      </Button>
    </StyledEditForm>
  );
};

export default ChangePassword;
