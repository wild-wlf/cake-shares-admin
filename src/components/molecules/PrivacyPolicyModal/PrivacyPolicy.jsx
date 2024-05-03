import React from "react";
import styled from "styled-components";

const PrivacyPolicy = () => {
  return (
    <Container>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
        luctus nunc. Vestibulum eleifend ullamcorper ante commodo posuere. Donec
        ac metus magna. Praesent justo velit, facilisis ac ligula in, porta
        ultricies metus. Phasellus elementum, nibh ut tincidunt posuere, quam
        velit mollis mauris, a lacinia dui dui eu justo. Maecenas a tortor sit
        amet ex congue rhoncus. Donec et feugiat elit.
      </p>
      <div className="count">
        <span>1.</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
          luctus nunc. Vestibulum eleifend ullamcorper ante commodo posuere.
          Donec ac metus magna. Praesent justo velit, facilisis ac ligula in,
          porta ultricies metus. Phasellus elementum, nibh ut tincidunt posuere,
          quam velit mollis mauris, a lacinia dui dui eu justo. Maecenas a
          tortor sit amet ex congue rhoncus. Donec et feugiat elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Fusce vitae luctus nunc.
          Vestibulum eleifend ullamcorper.
        </p>
      </div>
      <div className="count">
        <span>2.</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
          luctus nunc. Vestibulum eleifend ullamcorper ante commodo posuere.
          Donec ac metus magna. Praesent justo velit, facilisis ac ligula in,
          porta ultricies metus. Phasellus elementum, nibh ut tincidunt posuere,
          quam velit mollis mauris, a lacinia dui dui eu justo. Maecenas a
          tortor sit amet ex congue rhoncus. Donec et feugiat elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Fusce vitae luctus nunc.
          Vestibulum eleifend ullamcorper.
        </p>
      </div>
      <div className="count">
        <span>3.</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
          luctus nunc. Vestibulum eleifend ullamcorper ante commodo posuere.
          Donec ac metus magna. Praesent justo velit, facilisis ac ligula in,
          porta ultricies metus. Phasellus elementum, nibh ut tincidunt posuere,
          quam velit mollis mauris, a lacinia dui dui eu justo. Maecenas a
          tortor sit amet ex congue rhoncus. Donec et feugiat elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Fusce vitae luctus nunc.
          Vestibulum eleifend ullamcorper.
        </p>
      </div>
      <div className="count">
        <span>4.</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
          luctus nunc. Vestibulum eleifend ullamcorper ante commodo posuere.
          Donec ac metus magna. Praesent justo velit, facilisis ac ligula in,
          porta ultricies metus.
        </p>
      </div>
      <div className="count">
        <span>5.</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
          luctus nunc. Vestibulum eleifend ullamcorper ante commodo posuere.
          Donec ac metus magna.
        </p>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
        luctus nunc. Vestibulum eleifend ullamcorper ante commodo posuere. Donec
        ac metus magna. Praesent justo velit, facilisis ac ligula in, porta
        ultricies metus. Phasellus elementum, nibh ut tincidunt posuere, quam
        velit mollis mauris, a lacinia dui dui eu justo. Maecenas a tortor sit
        amet ex congue rhoncus. Donec et feugiat elit.
      </p>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 26px;
  p {
    padding-bottom: 16px;
  }
  .count {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    justify-content: flex-start;
  }
`;

export default PrivacyPolicy;
