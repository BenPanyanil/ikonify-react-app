import React, { useState } from 'react';
import styled from 'styled-components';

import prosessimmeData from '../data/prosessimmeItems';

import DescriptionCard from './DescriptionCard';
import ItemCard from './ItemCard';
import playIcon from '../img/play-icon.svg';

export default function ProsessimmeContainer() {
  const [prosessimmeState, setProsessimmeState] = useState(0);
  const prosessimmeItems = prosessimmeData;

  let descriptionCardValues = prosessimmeItems.find(item => {
    return prosessimmeItems.indexOf(item) === prosessimmeState;
  });

  return (
    <Wrapper>
      <div className='description-container'>
        <DescriptionCard
          id={prosessimmeState}
          title={descriptionCardValues.title}
          description={descriptionCardValues.description}
          prosessimmeState={prosessimmeState}
          setProsessimmeState={setProsessimmeState}
          prosessimmeItems={prosessimmeItems}
        />
      </div>

      <div className='item-container'>
        <div
          className='item-slider'
          style={{ left: `-${prosessimmeState * 540}px` }}
        >
          {prosessimmeItems.map(item => {
            return (
              <ItemCard
                key={prosessimmeItems.indexOf(item)}
                title={item.title}
                img={item.img}
              />
            );
          })}
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
      transition-duration: 500ms;
      transition-timing-function: ease-in-out;
    }

    .playIcon {
      position: absolute;
      bottom: 0;
      transform: translateY(18.5px);
      width: 30px;
    }
  }
`;
