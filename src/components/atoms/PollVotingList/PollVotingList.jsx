import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const PollVotingList = ({ users, user, userAvatar, Pic }) => {
  return (
    <Container>
      {users && users.length > 0
        ? users.map((_, index) => {
            return (
              <Wrapper key={index}>
                <div className="userDets">
                  <Image
                    src={_?.isAnonymous && _?._id !== user?._id ? userAvatar : _?._id?.profilePicture || Pic}
                    height={100}
                    width={100}
                    alt="profile"
                  />
                  <div className="info">
                    <h6>
                      {_?.isAnonymous && _?._id !== user?._id ? 'Anonymous' : _?._id?.fullName || _?._id?.username}
                    </h6>
                    <span>{_?.isAnonymous && _?._id !== user?._id ? 'Anonymous' : _?._id?.type || 'admin'}</span>
                  </div>
                </div>
              </Wrapper>
            );
          })
        : 'No Vote Available'}
    </Container>
  );
};

export default PollVotingList;

const Container = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between !important;
  .userDets {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50px;
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 6px;

      h6 {
        white-space: nowrap;
        font-size: 18px;
        font-weight: 500;
      }
      span {
        white-space: nowrap;
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
`;
