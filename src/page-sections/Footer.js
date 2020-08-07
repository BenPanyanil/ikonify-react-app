import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import video from '../img/footer-img.mp4';
import LogoBasic from '../img/ikonifyBasicWhite.svg';

import ButtonBasic from '../components/ButtonBasic';
import HeaderText from '../components/HeaderText';

export default function Footer() {
  return (
    <Wrapper>
      <div className='video-container'>
        <video autoPlay='autoplay' loop='loop'>
          <source src={video} type='video/mp4'></source>
        </video>
        <div className='overlay'></div>
        <div className='link-container'>
          <HeaderText text='Aloitetaanko yhdessä projekti?' dark={false} />
          <Link to='/palvelut'>
            <ButtonBasic text='Katso palvelumme' red={false} />
          </Link>
          <Link to='/yhteydenotto'>
            <ButtonBasic text='Ota yhteyttä' red={true} />
          </Link>
        </div>
      </div>
      <div className='footer-container'>
        <img alt='ikonify logo' src={LogoBasic}></img>
        <div className='flex-container'>
          <ul>
            <h4>Yhteystiedot</h4>
            <li>info@ikonify.fi</li>
            <li>045 666 6666</li>
          </ul>
          <ul>
            <h4>Sivukartta</h4>
            <li>
              <Link to='/'>Etusivu</Link>
            </li>
            <li>
              <Link to='/palvelut'>Palvelumme</Link>
            </li>
            <li>
              <Link to='/toitamme'>Töitämme</Link>
            </li>
            <li>
              <Link to='/meista'>Meistä</Link>
            </li>
            <li>
              <Link to='/yhteydenotto'>Yhteydenotto</Link>
            </li>
          </ul>
          <ul>
            <h4>Oikeudet</h4>
            <li>&copy; Ikonify 2020</li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 400px;
  min-height: 600px;
  width: 100vw;
  background: var(--main-dark-blue);

  .video-container {
    position: relative;
    width: 55vw;
    margin: 0 auto;
    transform: translateY(-15%);
    text-align: center;

    video {
      width: 100%;
      position: relative;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
    }

    .link-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .link-container > a > div {
      margin: 8px 25px;
    }
  }

  .footer-container {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-top: 1px solid var(--main-blue);
    padding: 30px 0;
    margin: 0 auto;

    img {
      width: 140px;
    }

    .flex-container {
      display: flex;

      a {
        text-decoration: none;
        color: var(--main-white);
      }

      ul {
        list-style-type: none;
        color: var(--main-white);
        margin-left: 40px;

        h4 {
          margin: 0 0 40px 0;
        }

        li {
          margin: 20px 0;
          font-size: 0.9rem;
        }
      }
    }
  }
`;
