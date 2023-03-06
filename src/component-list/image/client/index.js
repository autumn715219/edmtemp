import React from 'react';
import styled from 'styled-components';

const ImageContent = styled.div`
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  img {
    display: block;
    width: 100%;
  }
`;

const modeMap = {};

function Image({ onClick, imgUrl }) {
  return (
    <div onClick={onClick}>
      <ImageContent>
        <img src={imgUrl} />
      </ImageContent>
    </div>
  );
}

export default Image;
