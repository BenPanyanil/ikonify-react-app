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
            <h5>Yhteystiedot</h5>
            <li>info@ikonify.fi</li>
            <li>045 666 6666</li>
          </ul>
          <ul>
            <h5>Sivukartta</h5>
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
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 200px;
  width: 100vw;
  background: var(--main-dark-blue);

  .video-container {
    position: relative;
    width: 100vw;
    height: 500px;
    margin: 0 auto;
    text-align: center;

    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
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
      width: 80%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .link-container > a > div {
      margin: 8px;
    }
  }

  .footer-container {
    width: 80%;
    padding: 50px 0;
    margin: 0 auto;

    img {
      width: 100px;
      margin-bottom: 40px;
    }

    .flex-container {
      display: flex;
      justify-content: space-around;

      a {
        text-decoration: none;
        color: var(--main-white);
      }

      ul {
        list-style-type: none;
        color: var(--main-white);
        padding: 0;

        h5 {
          margin: 0 0 30px 0;
        }

        li {
          margin: 20px 0;
          font-size: 0.9rem;
        }
      }
    }
  }

  @media only screen and (max-width: 800px) {
    .footer-container {
      
      img {
        margin-left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  @media only screen and (min-width: 480px) {
    .video-container {
      width: 85%;
      top: -60px;
    }

    .footer-container {
      width: 60%;
      
      img {
        width: 140px;
        margin-bottom: 20px;
      }
  
      .flex-container {
  
        ul {
          margin-left: 0px;
      }
    }
  }


  @media only screen and (min-width: 800px) {
    margin-top: 400px;

    .video-container {
      width: 64vw;

      .link-container > a > div {
        margin: 10px 20px;
      }
    }

    .footer-container {
      width: 64vw;
      border-top: 1px solid var(--main-blue);
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      img {
        width: 140px;
      }

      .flex-container {
        display: flex;
        justify-content: space-between;
        width: 40%;
        max-width: 280px;
      }
    }

  @media only screen and (min-width: 1441px) {
    .video-container {
      width: 55vw;
    }

    .footer-container {
      width: 55vw; 
    }
  }
`;
