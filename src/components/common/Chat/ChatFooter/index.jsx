import React from 'react';
import { ChatFooterWrapper } from './ChatFooter.style';
import Image from 'next/image';
import SendIcon from '../../../../_assets/send-icon.svg';
import LinkIcon from '../../../../_assets/link-icon.svg';
import MicIcon from '../../../../_assets/mic-icon.svg';
import PollIcon from '../../../../_assets/poll-icon.svg';
import GalleryIcon from '../../../../_assets/gallery-icon.svg';
import ModalContainer from '@/components/molecules/ModalContainer';
import CreatePollModal from '../CreatePollModal';
import Form, { useForm } from '@/components/molecules/Form';
import Button from '@/components/atoms/Button';
import Field from '@/components/atoms/Field';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import { sendDirectMessage } from '@/helpers/socketConnection';

const ChatFooter = ({ chosenChatDetails }) => {
  const [form] = useForm();
  const { user } = useContextHook(AuthContext, v => ({
    user: v.user,
  }));

  const handleSubmit = ({ message }) => {
    sendDirectMessage({
      author: user?._id,
      receiver: chosenChatDetails?.receiver,
      content: message,
    });
    form.setFieldsValue({ message: '' });
    form.setFieldsError({ message: { message: '' } });
  };

  return (
    <Form form={form} onSubmit={handleSubmit}>
      <ChatFooterWrapper>
        <div className="input-wrapper">
          <div className="input-div">
            <Image src={MicIcon} alt="PollIcon" width={14} height={14} />
            <Form.Item
              type="text"
              name="message"
              sm
              rules={[{ required: true, message: 'Cannot Send Empty Message' }]}
              placeholder="Enter Message">
              <Field maxLength={256} autocomplete="off" />
            </Form.Item>
          </div>
          <div className="icons-div">
            <ModalContainer
              width={600}
              title="Create Poll"
              btnComponent={({ onClick }) => (
                <Image src={PollIcon} alt="PollIcon" width={14} height={14} onClick={onClick} />
              )}
              content={({ onClose }) => <CreatePollModal />}
            />
            <Image src={LinkIcon} alt="LinkIcon" width={14} height={14} />
            <Image src={GalleryIcon} alt="GalleryIcon" width={14} height={14} />
          </div>
        </div>
        <Button htmlType="submit" className="send-icon" sm>
          <Image src={SendIcon} alt="sendIcon" width={17} height={17} />
        </Button>
      </ChatFooterWrapper>
    </Form>
  );
};

export default ChatFooter;
