import React from 'react';
import styled from 'styled-components';

export default function HeroText() {
  return (
    <Wrapper class='hero-text'>
      <h1>
        Lisää asiakkaita sekä räätälöityjä digitaalisia palveluita yrityksellesi
        <span style={{ color: 'var(--main-turquoise)' }}>.</span>
      </h1>
    </Wrapper>
  );
}

const Wrapper = styled.h1`
  color: var(--main-white);
  font-size: 3.4rem;
  width: 70%;
  min-width: 1000px;
`;
