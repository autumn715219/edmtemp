import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import Header from '../componets/landingPage/Header';
import { color } from '../styles/themes';
import BN from '../asset/BN.png';

const MainContainer = styled.main`
  margin: 0 auto 200px;
  width: 90%;
  max-width: 1200px;
  @media (max-width: 900px) {
    margin: 0 auto 100px;
  }
`;

const DivHeight = styled.div`
  height: 500px;
  margin: 0px auto 100VH;
  background-image:linear-gradient(120deg, #fe7c5a, #fcd100);
  background-color: ${color.gray};
  @media (max-width: 768px) {
    border-top: 2px solid ${color.gray};
  }
`;

export default function Landing() {
  return (
    <>
      <Header />
      <MainContainer>
      <DivHeight>
          <div className="landingBN">
            <img src={BN} alt='BN'/>
          </div>
        </DivHeight>
      </MainContainer>
    </>
  );
}