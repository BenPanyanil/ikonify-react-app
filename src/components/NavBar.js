import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';

export default function NavBar() {
  return (
    <Wrapper>
      <Link to='/'>
        <Logo />
      </Link>
      <ul className='nav-links'>
        <Link to='/palvelut'>
          <li>Palvelut</li>
        </Link>
        <Link to='/toitamme'>
          <li>Töitämme</li>
        </Link>
        <Link to='/meista'>
          <li>Meistä</li>
        </Link>
        <Link to='/yhteydenotto'>
          <li>Yhteydenotto</li>
        </Link>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  padding: 60px 8vw;
  box-sizing: border-box;
  position: absolute;
  z-index: 9999;

  ul {
    float: right;
    display: flex;
  }

  a {
    text-decoration: none;
  }

  li {
    color: var(--main-white);
    padding-bottom: 2px;
    margin: 0 24px;
    font-size: 0.9rem;
    list-style-type: none;
    position: relative;
  }

  li:before {
    content: '';
    position: absolute;
    width: 0;
    height: 100%;
    border-bottom: 2px solid var(--main-turquoise);
    transition: 250ms;
  }

  li:hover:before {
    width: 100%;
  }

  @media only screen and (max-width: 800px) {
    .nav-links {
      display: none;
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 6vw 7vw;
  }
`;
