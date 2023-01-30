import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { color } from '../styles/themes';

const MainContainer = styled.main`
  margin: 0 auto 200px;
  width: 90%;
  max-width: 1200px;
  @media (max-width: 900px) {
    margin: 0 auto 100px;
  }
`;

const DivLine = styled.div`
  border-top: 4px solid ${color.main[100]};
  width: ${({ width }) => width || '20%'};
  min-width: ${({ minWidth }) => minWidth || '200px'};
  margin: 0 auto;
  @media (max-width: 900px) {
    border-top: 2px solid ${color.main[100]};
  }
`;

const VerticalLine = styled.div`
  border-left: 1px solid ${color.main[100]};
  height: 100px;
  width: 0;
  margin: 0 auto;
`;

export default function Dashboard() {
  return (
    <>
      {/* <Header /> */}
      <MainContainer>

      </MainContainer>
    </>
  );
}