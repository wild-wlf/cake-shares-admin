import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import userProfile from '../../../_assets/userProfile.png';

const ReactionListModal = ({ reactionData }) => {
  return (
    <Container>
      {reactionData && reactionData.length > 0
        ? reactionData.map((data, index) => {
            return (
              <Wrapper key={index}>
                <div className="userDets">
                  <Image
                    src={data?.senderId?._id?.profilePicture || userProfile}
                    height={50}
                    width={50}
                    alt="profile"
                  />
                  <span>{data?.senderId?._id?.fullName || data?.senderId?._id?.username}</span>
                </div>
                <div className="reaction">
                  <span>{data?.reaction}</span>
                </div>
              </Wrapper>
            );
          })
        : 'No Reactions Available'}
    </Container>
  );
};

export default ReactionListModal;

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
      border-radius: 50%;
    }
    span {
      white-space: nowrap;
    }
  }
  .reaction {
    span {
      font-size: 18px;
    }
  }
`;
