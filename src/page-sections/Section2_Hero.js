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
          text='Ei pakettiratkaisuja, saat aina tarpeesi mukaisen ratkaisun.'
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

  .img-element {
    width: 100%;
    height: 200px;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .text-container {
    padding: 0 6vw;
    background: var(--main-blue);

    h2 {
      padding: 40px 0;
      margin: 0;
    }

    p {
      font-size: 1rem;
      line-height: 1.7rem;
      color: var(--main-white);
      padding: 0 0 80px 0;
      margin: 0;
    }
  }

  @media only screen and (min-width: 480px) {
    .img-element {
      height: 400px;
    }

    .text-container {
      padding: 0 8vw;

      h2 {
        padding: 60px 0 40px 0;
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    height: 620px;
    position: relative;
    padding-bottom: 150px;

    p {
      font-size: 1.1rem;
      line-height: 1.8rem;
    }

    .img-element {
      display: block;
      width: 60vw;
      height: 580px;
      position: absolute;
      top: -60px;
      z-index: 2;

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
  }
`;
