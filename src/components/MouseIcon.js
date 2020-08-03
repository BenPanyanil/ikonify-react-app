import React from 'react';
import styled from 'styled-components';

export default function MouseIcon() {
  return (
    <Wrapper>
      <div class='mouse-shell'>
        <div class='mouse-wheel'></div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .mouse-shell {
    height: 44px;
    width: 24px;
    border: 2px solid var(--main-white);
    border-radius: 12px;
    position: relative;

    .mouse-wheel {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      height: 6px;
      width: 3px;
      border-radius: 4px;
      background: var(--main-white);
    }
  }
`;
