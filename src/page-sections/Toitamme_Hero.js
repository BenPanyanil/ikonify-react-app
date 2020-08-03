import React from 'react';
import styled from 'styled-components';

import ButtonRed from '../components/ButtonRed';
import ButtonTransparent from '../components/ButtonTransparent';

export default function Toitamme_Hero() {
  return (
    <Wrapper>
      <h2>KX-TREESHEARS.COM</h2>
      <div>
        <h3>Kimmo Tossavainen</h3>
        <p>
          A certain king had a beautiful garden, and in the garden stood a tree
          which bore golden apples. These apples were always counted, and about
          the time when they began to grow ripe it was gone
        </p>
        <div class='flex-container'>
          <ButtonRed link='Lue lisää' />
          <ButtonTransparent link='Käy verkkosivulla' />
        </div>
      </div>
      <div class='portfolio-img'></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: var(--main-white);
  background: var(--main-dark-blue);

  .flex-container {
    display: flex;
  }
`;
