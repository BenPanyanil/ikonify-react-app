import React from 'react';
import styled from 'styled-components';
import { MdChatBubbleOutline } from 'react-icons/md';

export default function ChatSystem() {
  return (
    <Wrapper>
      <div className='chatButton'>
        <MdChatBubbleOutline />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 9999;
  bottom: 65px;
  right: 65px;

  .chatButton {
    width: 84px;
    height: 84px;
    background: var(--main-turquoise);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 38px;
    color: var(--main-white);

    cursor: pointer;

    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
  }
`;
