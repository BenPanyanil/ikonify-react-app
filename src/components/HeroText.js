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
`;
