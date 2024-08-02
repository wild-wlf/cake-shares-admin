import React from 'react';
import styled from 'styled-components';

const Index = ({ setReaction, setActive }) => {
  const addReaction = emoji => {
    setReaction(emoji);
    // setActive(false);
  };

  return (
    <Container>
      {['❤️', '😮', '😂', '😢', '🙏'].map((emoji, index) => (
        <span
          key={index}
          onClick={() => {
            addReaction(emoji);
          }}>
          {emoji}
        </span>
      ))}
    </Container>
  );
};

export default Index;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  span {
    font-size: 19px;
    cursor: pointer;
    transition: font-size 0.1s ease-in-out;
    &:hover {
      font-size: 24px;
    }
  }
`;
