import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

export default function ButtonRed(props) {
  const [size, setSize] = useState(false);
  const [position, setPosition] = useState(false);

  const animateOn = () => {
    setSize(true);
    setPosition(true);
  };

  const animateOff = () => {
    setSize(false);
    setPosition(false);
  };

  return (
    <Wrapper onMouseEnter={() => animateOn()} onMouseLeave={() => animateOff()}>
      <div className={`circle ${size ? 'animate' : null}`}></div>
      <div className='arrow-container'>
        <FaArrowRight className={position ? 'animate' : null} />
      </div>
      <p>{props.link}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  color: var(--main-white);
  cursor: pointer;
  align-items: center;
  height: 61px;

  .circle {
    width: 46px;
    height: 46px;

    border-radius: 50%;
    background: var(--main-red);
    border: 1px solid var(--main-red);
  }

  @keyframes animate {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.34);
    }
    100% {
      transform: scale(1.2);
    }
  }

  .circle.animate {
    animation-name: animate;
    animation-duration: 400ms;
    animation-fill-mode: forwards;
  }

  .arrow-container {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 48px;
    heigth: 48px;

    svg {
      transition-duration: 250ms;
      transform: translateX(0);
    }

    svg.animate {
      transform: translateX(13px);
    }
  }

  p {
    margin-left: 25px;
  }
`;
