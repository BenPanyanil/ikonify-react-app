import React from 'react';
import styled from 'styled-components';

export default function HeaderText({ text, dark }) {
  const textArray = text.split('');
  const lastCharacter = textArray.pop();

  const newText = textArray.join('');

  return (
    <Wrapper>
      <h2
        style={{
          color: dark ? 'var(--main-dark-blue)' : 'var(--main-white)',
        }}
      >
        {newText}
        <span style={{ color: 'var(--main-turquoise)' }}>{lastCharacter}</span>
      </h2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h2 {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 1280px) {
    h2 {
      font-size: 2.1rem;
    }
  }
`;
