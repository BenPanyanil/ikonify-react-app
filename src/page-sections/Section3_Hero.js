import React from 'react';
import styled from 'styled-components';

import HeaderText from '../components/HeaderText';

export default function Section3_Hero() {
  return (
    <Wrapper>
      <div class='img-container'></div>
      <div class='text-container'>
        <HeaderText text='Helppoutta yrittäjyyteen.' dark={true} />
        <p>
          Olemme toteuttaneet useita projekteja sekä suomalaisille, että
          ulkomaisille yrityksille. Ymmärrämme että verkkosivujen teettäminen
          voi tuntua suurelta haasteelta. Siksi teemme siitä mahdollisimman
          helppoa!
          <br />
          <br />
          Verkkosivun tekeminen hoidetaan meillä alusta loppuun ammattitaidolla
          ja ohjaamme prosessin kokemuksella vaiheittain valmiiksi asti.
          Ymmärrämme, että digitaalinen maailma ei ole kaikille täysin tuttu,
          joten puhumme nettisivuasioista selkokielellä.
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  padding-bottom: 120px;
  display: flex;
  align-items: center;
  color: var(--main-dark-blue);

  .img-container {
    width: 52vw;
    height: 660px;
    fill: #eeeeee;
    box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.15);
  }

  .text-container {
    padding: 0 0 0 90px;

    h2 {
      transform: translateX(-25%);
    }

    p {
      width: 27vw;
      font-size: 1.1rem;
      line-height: 1.8rem;
      color: var(--main-dark-blue);
      margin-top: 50px;
    }
  }
`;
