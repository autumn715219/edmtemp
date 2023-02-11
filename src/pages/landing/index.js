// import React, { useState, useEffect } from 'react';
import React from 'react';
import styled from 'styled-components/macro';
import LandingHeader from '@/components/header';
import BN from '@/asset/BN.png';

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
  background-color: '#ccc';
  @media (max-width: 768px) {
    border-top: 2px solid #ccc;
  }
`;
export default function Landing() {
  return (
    <>
      <WRAPPER>
        <LandingHeader />
        <DivHeight>
          <div className='landingBN'>
            <a href='/dashboard'>
              <img src={BN} alt='BN' />
            </a>
          </div>
        </DivHeight>
      </WRAPPER>
    </>
  );
}
