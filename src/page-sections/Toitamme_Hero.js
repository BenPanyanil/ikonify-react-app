import React, { useContext } from 'react';
import styled from 'styled-components';

import { ToitammeContext } from '../ContextAPI';

import ButtonRed from '../components/ButtonRed';
import ButtonTransparent from '../components/ButtonTransparent';
import ButtonToitamme from '../components/ButtonToitamme';

export default function Toitamme_Hero() {
  const [value] = useContext(ToitammeContext);

  return (
    <Wrapper>
      <div className='buttontoitamme'>
        <ButtonToitamme />
      </div>
      <img
        className='domainName'
        src={value.domainName}
        alt='kx-treeshears'
      ></img>
      <div className='flex-container'>
        <div className='text-container'>
          <h3 className='customerName'>{value.customerName}</h3>
          <p className='description'>{value.description}</p>
          <div className='link-container'>
            <ButtonRed link='Lue lisää' />
            <a target='blank' rel='noopener noreferrer' href={value.url}>
              <ButtonTransparent link='Käy verkkosivulla' />
            </a>
          </div>
        </div>
        <div className='portfolio-img'>
          <img alt='kx-treeshears' src={value.img}></img>
        </div>
      </div>
      <div className='divider'></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: var(--main-white);
  background: var(--main-dark-blue);
  margin: 80px 0;
  min-height: 600px;
  position: relative;

  .buttontoitamme {
    text-align: center;
    transform: translateY(-50%);
    margin-bottom: 120px;
    cursor: pointer;
  }

  .flex-container {
    display: flex;
    justify-content: space-between;
    width: 73vw;
    margin: 0 auto;
  }

  .text-container {
    width: 400px;
  }

  .link-container {
    display: flex;
    width: 400px;
    justify-content: space-between;
  }

  .domainName {
    width: 73vw;
    display: block;
    margin: 0 auto 40px auto;
  }

  .customerName {
    margin: 0 0 40px 0;
    width: 400px;
    text-transform: capitalize;
    font-size: 4rem;
    line-height: 4rem;
  }

  .description {
    line-height: 1.8rem;
    margin-bottom: 80px;
  }

  .portfolio-img {
    width: 45vw;
    height: 640px;
    box-shadow: 0px 10px 12px rgba(0, 0, 0, 0.3);
    margin-left: 60px;
    overflow-y: auto;
    z-index: 10;

    /* width */
    ::-webkit-scrollbar {
      width: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: var(--main-grey);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: var(--main-turquoise);
    }

    img {
      width: 100%;
    }
  }

  a {
    text-decoration: none;
  }

  .divider {
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 60px;
    background: var(--main-white);
  }

  @media only screen and (max-width: 1440px) {
    .customerName {
      font-size: 3rem;
      line-height: 3rem;
      width: 300px;
    }

    .link-container {
      width: 300px;
      flex-wrap: wrap;
    }
  }

  @media only screen and (max-width: 1024px) {
    .flex-container {
      width: 80vw;
    }

    .domainName {
      width: 80vw;
    }
  }
`;
