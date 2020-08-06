import React from 'react';
import styled from 'styled-components';

import HeroSection from '../page-sections/HeroSection';
import Section2 from '../page-sections/Section2_Hero';
import Section3 from '../page-sections/Section3_Hero';
import Toitamme from '../page-sections/Toitamme_Hero';
import Prosessimme from '../page-sections/ProsessimmeSection';

export default function HomePage() {
  return (
    <Wrapper>
      <HeroSection />
      <Section2 />
      <Section3 />
      <Toitamme />
      <Prosessimme />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
