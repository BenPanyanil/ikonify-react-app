import React from 'react';
import styled from 'styled-components';

import DescriptionCard from './DescriptionCard';
import ItemCard from './ItemCard';
import img from '../img/section2_Hero-img.jpg';
import playIcon from '../img/play-icon.svg';

export default function ProsessimmeContainer() {
  return (
    <Wrapper>
      <div className='description-container'>
        <DescriptionCard
          id='1'
          title='Otsikko'
          description='Kuvaus tekstiä tässä hyvä juttu jee. Kuvaus tekstiä tässä hyvä juttu jee.'
        />
      </div>

      <div className='item-container'>
        <div className='item-slider' style={{ left: `-${0 * 560}px` }}>
          <ItemCard id='1' title='Otsikko' img={img} />
          <ItemCard id='2' title='Otsikko' img={img} />
          <ItemCard id='3' title='Otsikko' img={img} />
          <ItemCard id='4' title='Otsikko' img={img} />
          <ItemCard id='5' title='Otsikko' img={img} />
          <ItemCard id='6' title='Otsikko' img={img} />
        </div>
        <img className='playIcon' alt='play-icon' src={playIcon}></img>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  margin-left: 12vw;
  height: 460px;

  .description-container {
    z-index: 2;
    position: absolute;
    height: 84%;
  }

  .item-container {
    height: 100%;
    position: relative;

    .item-slider {
      height: 100%;
      position: absolute;
      display: flex;
      border-bottom: 3px solid var(--main-blue);
    }

    .playIcon {
      position: absolute;
      bottom: 0;
      transform: translateY(18.5px);
      width: 30px;
    }
  }
`;
