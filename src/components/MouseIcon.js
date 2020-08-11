import React from 'react';
import styled from 'styled-components';

import arrowDown from '../img/arrow-down.svg';

export default function MouseIcon() {
  return (
    <Wrapper>
      <div className='mouse-shell'>
        <div className='mouse-wheel'></div>
      </div>
      <div className='overlay'></div>
      <div className='arrow-down'>
        <div className='arrow-stem'></div>
        <img className='arrow-head' alt='arrow-head' src={arrowDown} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media only screen and (max-width: 800px) {
    display: none;
  }

  position: relative;

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

  .overlay {
    animation-name: animate-overlay;
    animation-duration: 4.5s;
    animation-iteration-count: infinite;
    animation-delay: 3s;

    position: absolute;
    top: 55px;
    width: 26px;
    height: 17px;
    background: var(--main-dark-blue);
    z-index: 10;
  }

  .arrow-down {
    position: absolute;
    top: 55px;
    width: 26px;

    .arrow-stem {
      animation-name: animate-stem;
      animation-duration: 4.5s;
      animation-iteration-count: infinite;
      animation-delay: 3s;

      height: 2px;
      width: 2px;
      margin: 0 auto;
      background: var(--main-white);
    }

    .arrow-head {
      transform: translateY(-2px);
    }
  }

  @keyframes animate-stem {
    0% {
      height: 2px;
    }
    30% {
      height: 68px;
    }
    60% {
      height: 68px;
    }
    100% {
      height: 68px;
    }
  }

  @keyframes animate-overlay {
    0% {
      height: 17px;
    }
    30% {
      height: 17px;
    }
    60% {
      height: 88px;
    }
    100% {
      height: 88px;
    }
  }
`;
