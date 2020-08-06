import React from 'react';
import styled from 'styled-components';

import ProsessimmeContainer from '../components/ProsessimmeContainer';
import HeaderText from '../components/HeaderText';

export default function ProsessimmeSection() {
  return (
    <Wrapper>
      <HeaderText text='Kuinka prosessi etenee?' dark={true} />
      <ProsessimmeContainer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 260px 0;

  h2 {
    text-align: center;
    margin-bottom: 150px;
  }
`;
