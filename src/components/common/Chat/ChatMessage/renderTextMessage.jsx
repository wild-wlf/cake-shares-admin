import React from 'react';

const RenderTextMessage = ({ text }) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  const renderedText = parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a key={index} href={part} target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      );
    } else {
      return part;
    }
  });

  return renderedText;
};

export default RenderTextMessage;
