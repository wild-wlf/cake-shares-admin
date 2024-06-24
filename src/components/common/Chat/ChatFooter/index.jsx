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

const ChatFooter = () => {
  return (
    <ChatFooterWrapper>
      <div className="input-wrapper">
        <div className="input-div">
          <Image src={MicIcon} alt="PollIcon" width={14} height={14} />
          <input placeholder="Type your message..." />
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
      <div className="send-icon">
        <Image src={SendIcon} alt="sendIcon" width={19} height={19} />
      </div>
    </ChatFooterWrapper>
  );
};

export default ChatFooter;
