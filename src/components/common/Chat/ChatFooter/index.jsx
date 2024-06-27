import React, { useState } from 'react';
import { ChatFooterWrapper } from './ChatFooter.style';
import Image from 'next/image';
import SendIcon from '../../../../_assets/send-icon.svg';
import LinkIcon from '../../../../_assets/link-icon.svg';
import MicIcon from '../../../../_assets/mic-icon.svg';
import PollIcon from '../../../../_assets/poll-icon.svg';
import GalleryIcon from '../../../../_assets/gallery-icon.svg';
import CreatePollModal from '../CreatePollModal';
import Form, { useForm } from '@/components/molecules/Form';
import Button from '@/components/atoms/Button';
import Field from '@/components/atoms/Field';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import { sendDirectMessage, sendComMsg } from '@/helpers/socketConnection';
import CenterModal from '@/components/molecules/Modal/CenterModal';

const ChatFooter = ({ chosenChatDetails, chosenComDetails, type }) => {
  const [form] = useForm();
  const { user } = useContextHook(AuthContext, v => ({
    user: v.user,
  }));
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = ({ message }) => {
    if (type === 'private') {
      sendDirectMessage({
        author: user?._id,
        receiver: chosenChatDetails?.receiver,
        content: message,
      });
    }

    if (type === 'community') {
      sendComMsg({
        author: user?._id,
        content: message,
        conversationId: chosenComDetails?.conversationId,
      });
    }
    form.setFieldsValue({ message: '' });
    form.setFieldsError({ message: { message: '' } });
  };

  return (
    <>
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
              {type === 'community' && (
                <Image src={PollIcon} alt="PollIcon" width={14} height={14} onClick={() => setOpenModal(true)} />
              )}
              <Image src={LinkIcon} alt="LinkIcon" width={14} height={14} />
              <Image src={GalleryIcon} alt="GalleryIcon" width={14} height={14} />
            </div>
          </div>
          <Button htmlType="submit" className="send-icon" sm>
            <Image src={SendIcon} alt="sendIcon" width={17} height={17} />
          </Button>
        </ChatFooterWrapper>
      </Form>

      <CenterModal zIndex={9999} open={openModal} setOpen={setOpenModal} width="688" title="Create Pool">
        <CreatePollModal
          onClose={() => setOpenModal(false)}
          conversationId={chosenComDetails?.conversationId}
          user={user}
        />
      </CenterModal>
    </>
  );
};

export default ChatFooter;
