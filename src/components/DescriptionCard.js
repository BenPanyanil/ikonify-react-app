import React, { useState } from 'react';
import styled from 'styled-components';

import ButtonBasic from './ButtonBasic';
import ButtonBasicLong from './ButtonBasicLong';

export default function DescriptionCard({ id, title, description }) {
  const [buttonState, setButtonState] = useState(0);

  const btnSet_1 = (
    <>
      <ButtonBasicLong text='Paina nähdäksesi prosessimme!' red={true} />
    </>
  );

  const btnSet_2 = (
    <>
      <ButtonBasic text='Edellinen' red={false} />
      <ButtonBasic text='Seuraava' red={true} />
    </>
  );

  const btnSet_3 = (
    <>
      <ButtonBasic text='Edellinen' red={false} />
      <ButtonBasic text='Alkuun' red={true} />
    </>
  );

  function whichState() {
    if (buttonState === 0) {
      return btnSet_1;
    } else if (buttonState >= 1) {
      return btnSet_2;
    }
  }

  return (
    <Wrapper>
      <div className='title-container'>
        <p>
          <span className='id'>{id}.</span> {title}
        </p>
      </div>
      <p>{description}</p>
      <div className='button-container'>{whichState()}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 480px;
  height: 100%;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  background: var(--main-white);

  position: relative;

  p {
    padding: 20px 40px;
    line-height: 1.8rem;
  }

  .title-container {
    width: 100%;
    display: flex;
    background: var(--main-blue);
    color: var(--main-white);

    p {
      padding: 0px 40px;
    }

    .id {
      margin-right: 8px;
    }
  }

  .button-container {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 76%;
    display: flex;
    justify-content: space-between;
  }
`;
