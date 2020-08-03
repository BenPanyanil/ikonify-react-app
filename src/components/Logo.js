import React from 'react';
import styled from 'styled-components';

export default function Logo() {
  return (
    <Wrapper>
      <h1>LOGO</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: white;
  position: fixed;

  h1 {
    margin: 0;
  }
`;
