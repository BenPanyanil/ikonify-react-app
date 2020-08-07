import React from 'react';
import styled from 'styled-components';

export default function ButtonBasic({ text, red }) {
  return (
    <Wrapper
      style={{
        background: red ? 'var(--main-red)' : 'var(--main-white',
        color: red ? 'var(--main-white)' : 'var(--main-blue)',
        border: `1px solid ${red ? 'var(--main-red)' : 'var(--main-blue)'}`,
      }}
    >
      {text}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  font-weight: 500;
  min-width: 80px;
  display: inline-block;
  padding: 12px 50px;
  border-radius: 100px;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
