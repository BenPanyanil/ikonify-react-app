import React, { useState } from 'react';
import styled from 'styled-components';

import LogoImg from '../img/ikonifyBasicWhite.svg';
import LogoStandAlone from '../img/ikonifyStandAlone.svg';

export default function Logo() {
  const [logoDisplay, setlogoDisplay] = useState(true);

  window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;

    if (offset > 50) {
      setlogoDisplay(false);
    } else {
      setlogoDisplay(true);
    }
  });

  return (
    <Wrapper>
      <img
        id='basic'
        style={{ opacity: logoDisplay ? '1' : '0' }}
        alt='ikonify logo'
        src={LogoImg}
      />

      <img
        id='standalone'
        style={{ opacity: logoDisplay ? '0' : '1' }}
        alt='ikonify logo'
        src={LogoStandAlone}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;

  #basic {
    width: 120px;

    transition-duration: 200ms;
  }

  #standalone {
    position: absolute;
    top: -20px;
    left: -110px;
    width: 52px;
    height: 52px;
    background: var(--main-dark-blue);
    padding: 16px;

    transition-duration: 200ms;
  }
`;
