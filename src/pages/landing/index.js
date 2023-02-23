// import React, { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import CustomHeader from '@/components/customHeader';
import BN from '@/asset/BN.png';

const WRAPPER = styled.main`
  margin: 0 auto 200px;
  width: 100%;
  @media (max-width: 768px) {
    margin: 0 auto 100px;
  }
`;

const DivLandingBn = styled.div`
  width: 100%;
  margin: 0px auto;
  padding: 50px 50px;
  background-image: linear-gradient(120deg, #fe7c5a, #fcd100);

  @media (max-width: 768px) {
    padding: 2vw 2vw 2vw 0;
  }
`;
const ImgLandingBn = styled.img`
  display: block;
  margin: 0 auto;
  vertical-align: middle !important;
  width: 100%;
  max-width: 1100px;
`;
export default function Landing() {
  return (
    <>
      <WRAPPER>
        <CustomHeader />
        <DivLandingBn>
          <Link to='/'>
            <ImgLandingBn src={BN} alt='BN' />
          </Link>
        </DivLandingBn>
      </WRAPPER>
    </>
  );
}
