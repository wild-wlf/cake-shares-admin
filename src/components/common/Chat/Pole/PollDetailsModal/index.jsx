import React from 'react';
import { StyledPollDetailsModal } from './PollDetailsModal.styles';
import { HiMiniStar } from 'react-icons/hi2';
import Pic from '@/_assets/SellerProfile.png';
import Image from 'next/image';
import userAvatar from '@/_assets/user_avatar.png';
import { TbExternalLink } from 'react-icons/tb';
import ModalContainer from '@/components/molecules/ModalContainer';
import PollVotingList from '@/components/atoms/PollVotingList/PollVotingList';

const PollDetailsModal = ({ poolOptions, question, user }) => {
  return (
    <StyledPollDetailsModal>
      <div className="question">
        <span className="heading">Question:</span>
        <span>{question}</span>
      </div>
      <div className="options-holder">
        <span className="heading">Options:</span>
        {poolOptions?.map((item, index) => {
          return (
            <div className="options" key={index}>
              <div className="total-votes">
                <span className="heading vote-option">{item?.option}</span>
                <div className="votes-holder">
                  {item?.users?.length} {item?.users?.length > 1 ? 'Votes' : 'Vote'}
                  {item?.users?.some(u => u?._id === user?._id) && <HiMiniStar color="#FFB800" size={20} />}
                </div>
              </div>

              <div className="user-holder">
                <div className="container">
                  {item?.users?.length > 4
                    ? item?.users?.slice(0, 4).map((_, __) => {
                        return (
                          <div key={__}>
                            <div className="img-holders">
                              <Image
                                src={
                                  _?.isAnonymous && _?._id !== user?._id ? userAvatar : _?._id?.profilePicture || Pic
                                }
                                alt="userImg"
                                width={50}
                                height={50}
                              />
                            </div>
                            <span className="user-name">
                              {_?.isAnonymous && _?._id !== user?._id
                                ? 'Anonymous'
                                : _?._id?.fullName || _?._id?.username}
                            </span>
                            <span className="user-name">
                              {_?.isAnonymous && _?._id !== user?._id ? 'Anonymous' : _?._id?.type || 'admin'}
                            </span>
                          </div>
                        );
                      })
                    : item?.users?.map((_, __) => {
                        return (
                          <div key={__}>
                            <div className="img-holders">
                              <Image
                                src={
                                  _?.isAnonymous && _?._id !== user?._id ? userAvatar : _?._id?.profilePicture || Pic
                                }
                                alt="userImg"
                                width={50}
                                height={50}
                              />
                            </div>
                            <span className="user-name">
                              {_?.isAnonymous && _?._id !== user?._id
                                ? 'Anonymous'
                                : _?._id?.fullName || _?._id?.username}
                            </span>
                            <span className="user-name">
                              {_?.isAnonymous && _?._id !== user?._id ? 'Anonymous' : _?._id?.type || 'admin'}
                            </span>
                          </div>
                        );
                      })}
                </div>
                {item?.users?.length > 4 && (
                  <div className="container">
                    <span className="view-all length">+{item?.users?.length - 1}</span>
                    <ModalContainer
                      width={400}
                      title="Voting List"
                      btnComponent={({ onClick }) => (
                        <span className="view-all" onClick={onClick}>
                          View All <TbExternalLink fontSize={18} />
                        </span>
                      )}
                      content={({ onClose }) => (
                        <PollVotingList
                          Pic={Pic}
                          userAvatar={userAvatar}
                          onClose={onClose}
                          user={user}
                          users={item?.users}
                        />
                      )}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </StyledPollDetailsModal>
  );
};

export default PollDetailsModal;
