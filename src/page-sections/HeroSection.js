import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ChatSystem from '../components/ChatSystem';
import HeroText from '../components/HeroText';
import ButtonTransparent from '../components/ButtonTransparent';
import ButtonRed from '../components/ButtonRed';
import MouseIcon from '../components/MouseIcon';

export default function HeroSection() {
  return (
    <Wrapper>
      <section className='hero-section'>
        <HeroText text='Lisää asiakkaita sekä räätälöityjä digitaalisia palveluita yrityksellesi.' />
        <div className='flex-container'>
          <MouseIcon />
          <Link to='/palvelut'>
            <ButtonRed link='Palvelut' />
          </Link>
          <Link to='/toitamme'>
            <ButtonTransparent link='Töitämme' />
          </Link>
        </div>
        <ChatSystem />
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: var(--main-white);

  h2 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8rem;
  }

  a {
    text-decoration: none;
  }

  .hero-section {
    height: 100vh;
    background: var(--main-dark-blue);
    padding: 23vh 11vw 0 11vw;

    .flex-container {
      display: flex;
      margin-top: 150px;
      width: 480px;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
