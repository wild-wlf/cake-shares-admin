import React, { useState } from 'react';
import { StyledCreatePollModal } from './CreatePollModal.styles';
import Field from '@/components/molecules/Field';
import Form, { useForm } from '@/components/molecules/Form';
import Button from '@/components/atoms/Button';
import { IoAdd } from 'react-icons/io5';
import { TiDelete } from 'react-icons/ti';
import Switch from '@/components/molecules/Switch';

const CreatePollModal = () => {
  const [form] = useForm();
  const [addOption, setAddOption] = useState(['']);
  const [question, setQuestion] = useState('');
  const [allowMultiple, setAllowMultiple] = useState(false);
  const handleAddOption = () => {
    setAddOption([...addOption, ' ']);
  };
  const removeOption = index => setAddOption(prev => prev.filter((_, i) => i !== index));
  return (
    <StyledCreatePollModal>
      <Form form={form}>
        <Form.Item
          type="text"
          label="Question"
          name="question"
          value={question}
          rounded
          placeholder="Ask Question"
          onChange={e => setQuestion(e.target.value)}
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
                placeholder="+Add"
                suffix={<TiDelete color="red" size={20} />}
                onClickSuffix={() => removeOption(index)}
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
          <Switch
            label="Allow Multiple Answers"
            value={allowMultiple}
            onChange={({ target: { value } }) => {
              setAllowMultiple(value);
            }}
          />
        </div>
        <Button rounded md type="primary" width="170" htmlType="submit">
          Create Poll
        </Button>
      </Form>
    </StyledCreatePollModal>
  );
};

export default CreatePollModal;
