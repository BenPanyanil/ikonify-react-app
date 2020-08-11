import React from 'react';
import styled from 'styled-components';

import HeaderText from '../components/HeaderText';
import img from '../img/section2_Hero-img.jpg';

export default function Section2_Hero() {
  return (
    <Wrapper>
      <div className='img-element'>
        <img src={img} alt='ikonify about' />
        <div className='overlay'></div>
      </div>

      <div className='text-container'>
        <HeaderText
          text='Saat aina tarpeesi mukaiset ratkaisut ja omalle budjetille parasta vastinetta.'
          dark={false}
        />
        <p>
          Meiltä saat räätälöityä palvelua digitaalisten haasteiden
          ratkaisemiseksi, oli kyseessä sitten verkkosivut, digitaalinen
          mainonta tai markkinoinnin automatisaatio. Nopealla toimituksella
          ilman suurta vaivaa yrittäjältä.
          <br />
          <br />
          Tavoitteemme on ymmärtää sinua ja yritystäsi mahdollisimman hyvin,
          jotta voimme ratkaista juuri sinun yritykseesi kohdistuvia
          digitaalisia haasteita. Palvelumme on kohdistettu uusille, pienille ja
          keskikokoisille yrityksille.
          <br />
          <br />
          Kanssamme toimiminen on helppoa ja saat aina tarpeesi mukaisen
          ratkaisun.
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 620px;
  position: relative;
  padding-bottom: 150px;

  p {
    font-size: 1.1rem;
    line-height: 1.8rem;
    color: var(--main-white);
  }

  .img-element {
    display: block;
    width: 60vw;
    height: 580px;
    position: absolute;
    top: -60px;
    z-index: 2;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    .overlay {
      display: block;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0)
      );
      z-index: 10;
    }
  }

  .text-container {
    position: relative;
    width: 1200px;
    min-height: 590px;
    float: right;
    padding-right: 6vw;
    background: var(--main-blue);

    h2 {
      width: 600px;
      position: absolute;
      right: 13vw;
      z-index: 10;
      top: -160px;
    }

    p {
      width: 27vw;
      margin: 100px 0;
      float: right;
    }
  }

  @media only screen and (max-width: 1440px) {
    p {
      font-size: 1rem;
      line-height: 1.6rem;
    }

    .text-container {
      h2 {
        right: 7vw;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .img-element {
      width: 50vw;
    }
    .text-container {
      h2 {
        right: 0;
      }

      p {
        width: 37vw;
        margin: 100px 0;
        float: right;
      }
    }
  }
`;
