import React from 'react';
import styled from 'styled-components';

export default function ItemCard({ id, title, img }) {
  return (
    <Wrapper>
      <img alt='joo' src={img}></img>
      <p className='title'>
        <span className='id'>{id}.</span> {title}
      </p>

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
    margin-top: 12%;
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
    height: 30px;
    background: var(--main-dark-blue);
  }
`;
