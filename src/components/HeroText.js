import React from 'react';
import styled from 'styled-components';

export default function HeroText({ text }) {
  const textArray = text.split('');
  const lastCharacter = textArray.pop();

  const newText = textArray.join('');

  return (
    <Wrapper className='hero-text'>
      <h1>
        {newText}
        <span style={{ color: 'var(--main-turquoise)' }}>{lastCharacter}</span>
      </h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: var(--main-white);
  font-size: 3.4rem;
  width: 70%;
  min-width: 1000px;

  @media only screen and (max-width: 1440px) {
    font-size: 2.6rem;
    width: 70%;
    min-width: 800px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1.3rem;
    line-height: 2.3rem;
    width: 100%;
    min-width: 50px;
  }
`;
