import React, { useRef } from 'react';
import styled from 'styled-components';
import loading from '@/asset/loading.gif';

const LoadingDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  img {
    width: 100%;
  }
`;

function Loading() {
  return (
    <>
      <LoadingDiv>
        <img src={loading} />
      </LoadingDiv>
    </>
  );
}
export default Loading;
