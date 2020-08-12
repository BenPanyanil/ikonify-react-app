import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ikonify from '../img/ikonifyStandAloneDark.svg';

export default function MobileMenu() {
  const [active, setActive] = useState(false);

  return (
    <Wrapper>
      <div
        onClick={() => setActive(!active)}
        className={`icon ${active ? 'active' : null}`}
      >
        <div className='hamburger'></div>
      </div>
      <div className={`nav-container ${active ? 'active' : null}`}>
        <ul className={`nav-links ${active ? 'active' : null}`}>
          <Link onClick={() => setActive(!active)} to='/'>
            <li style={{ transitionDelay: '0ms' }}>Etusivu</li>
          </Link>
          <Link onClick={() => setActive(!active)} to='/palvelut'>
            <li style={{ transitionDelay: '100ms' }}>Palvelut</li>
          </Link>
          <Link onClick={() => setActive(!active)} to='/toitamme'>
            <li style={{ transitionDelay: '200ms' }}>Töitämme</li>
          </Link>
          <Link onClick={() => setActive(!active)} to='/meista'>
            <li style={{ transitionDelay: '300ms' }}>Meistä</li>
          </Link>
          <Link onClick={() => setActive(!active)} to='/yhteydenotto'>
            <li style={{ transitionDelay: '400ms' }}>Yhteydenotto</li>
          </Link>
          <li style={{ transitionDelay: '500ms' }}>
            <img alt='ikonify' src={ikonify} />
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .icon {
    z-index: 10001;
    position: absolute;
    top: 5vw;
    right: 6vw;
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hamburger {
    position: relative;
    width: 25px;
    height: 3px;
  }

  .hamburger:before,
  .hamburger:after {
    content: '';
    position: absolute;
    width: 25px;
    height: 3px;
    background: var(--main-white);
    transition: 0.3s;
  }

  .hamburger:before {
    top: -5px;
  }

  .hamburger:after {
    top: 5px;
  }

  .icon.active .hamburger:before {
    top: 0;
    width: 25px;
    transform: rotate(45deg);
    background: var(--main-dark-blue);
  }

  .icon.active .hamburger:after {
    top: 0;
    width: 25px;
    transform: rotate(-45deg);
    background: var(--main-dark-blue);
  }

  .nav-container {
    position: fixed;
    top: 0;
    z-index: 10000;
    width: 100vw;
    height: 100vh;
    visibility: hidden;
    opacity: 0;
    transition: 350ms;
  }

  .nav-container.active {
    visibility: visible;
    background: var(--main-white);
    opacity: 1;
  }

  .nav-links {
    list-style-type: none;
    margin-top: 20vh;
    text-align: center;
    padding: 0;

    li {
      transform: translateY(40px);
      transition-duration: 350ms;
      margin: 30px;
      opacity: 0;
    }

    img {
      width: 6vw;
      margin-top: 40px;
      max-width: 30px;
    }
  }

  .nav-links.active {
    li {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  a {
    text-decoration: none;
    color: var(--main-dark-blue);
    font-weight: 500;
  }

  @media only screen and (min-width: 800px) {
    visibility: hidden;
  }
`;
