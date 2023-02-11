// import React, { useState, useEffect } from 'react';
import React from 'react';
import styled from 'styled-components/macro';
import Header from './componets/header';
import BN from './asset/BN.png';

const WRAPPER = styled.main`
  margin: 0 auto 200px;
  width: 100%;
  @media (max-width: 900px) {
    margin: 0 auto 100px;
  }
`;

const DivHeight = styled.div`
  width: 100%;
  height: 500px;
  margin: 0px auto 100vh;
  background-image: linear-gradient(120deg, #fe7c5a, #fcd100);
  background-color: ${color.gray};
  @media (max-width: 768px) {
    border-top: 2px solid ${color.gray};
  }
`;
export default function Landing() {
  return (
    <>
      <WRAPPER>
        <Header />
        <DivHeight>
          <div className='landingBN'>
            <img src={BN} alt='BN' />
          </div>
        </DivHeight>
      </WRAPPER>
    </>
  );
}
