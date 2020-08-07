import React from 'react';
import styled from 'styled-components';

export default function ItemCard({ title, img }) {
  return (
    <Wrapper>
      <img alt='prosessi-img' src={img}></img>
      <p className='title'>{title}</p>

      <div className='element'></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-width: 480px;
  max-width: 480px;
  height: 100%;
  position: relative;
  margin-right: 60px;

  img {
    width: 75%;
    height: 60%;
    object-fit: cover;
    margin-top: 10%;
    margin-left: 50%;
    transform: translateX(-50%);
  }

  .title {
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    margin-top: 30px;
  }

  .element {
    position: absolute;
    right: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 3px;
    height: 25px;
    background: var(--main-dark-blue);
  }
`;
