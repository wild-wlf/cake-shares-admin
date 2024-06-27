import React, { useState } from 'react';
import { StyledCreatePollModal } from './CreatePollModal.styles';
import Form, { useForm } from '@/components/molecules/Form';
import Button from '@/components/atoms/Button';
import { IoAdd } from 'react-icons/io5';
import { TiDelete } from 'react-icons/ti';
import Field from '@/components/atoms/Field';
import Switch from '@/components/molecules/Switch';
import { sendComMsg } from '@/helpers/socketConnection';
import Toast from '@/components/molecules/Toast';

const CreatePollModal = ({ conversationId, user, onClose }) => {
  const [form] = useForm();
  const [addOption, setAddOption] = useState(['', '']);
  const handleAddOption = () => {
    setAddOption(_ => [..._, ' ']);
  };

  const removeOption = index => setAddOption(prev => prev.filter((_, i) => i !== index));

  const handleSubmit = values => {
    const payload = values;
    const pool = {
      question: payload?.question,
      allow_multiple: payload?.allow_multiple,
    };

    delete payload.question;
    delete payload.allow_multiple;

    pool.options = Object.values(payload).map(_ => ({ option: _ }));

    sendComMsg({
      author: user?._id,
      conversationId,
      pool,
    });
    onClose();
  };

  return (
    <StyledCreatePollModal>
      <Form form={form} onSubmit={handleSubmit}>
        <Form.Item
          type="text"
          label="Question"
          name="question"
          rounded
          placeholder="Enter Question"
          rules={[
            {
              required: true,
              message: 'Question is Required',
            },
          ]}>
          <Field />
        </Form.Item>
        <div className="add-more" onClick={handleAddOption}>
          <IoAdd />
          Add more
        </div>
        <div className="options-holder">
          {addOption &&
            addOption.length > 0 &&
            addOption.map((option, index) => (
              <Form.Item
                key={index}
                type="text"
                label={`Options ${index + 1}`}
                name={`options${index}`}
                value={option}
                rounded
                placeholder="Enter Option"
                suffix={<TiDelete color="red" size={20} />}
                onClickSuffix={() => {
                  if (addOption.length > 1) {
                    removeOption(index);
                  } else {
                    Toast({
                      type: 'error',
                      message: 'Pool Cannot Have One Option',
                    });
                  }
                }}
                onChange={e => {
                  form.setFieldsValue({
                    [`options${index}`]: e.target.value,
                  });
                  setAddOption(prev => {
                    const updateOption = [...prev];
                    updateOption[index] = e.target.value;
                    return updateOption;
                  });
                }}
                rules={[
                  {
                    required: true,
                    message: 'Options is Required',
                  },
                ]}>
                <Field />
              </Form.Item>
            ))}
        </div>
        <div className="switch">
          <Form.Item type="radio" label="Allow Multiple" name="allow_multiple" rounded>
            <Switch />
          </Form.Item>
        </div>
        <Button rounded md type="primary" width="170" htmlType="submit">
          Create Poll
        </Button>
      </Form>
    </StyledCreatePollModal>
  );
};

export default CreatePollModal;
