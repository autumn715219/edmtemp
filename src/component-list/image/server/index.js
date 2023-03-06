import React from 'react';
import styled from 'styled-components';

const ImageContent = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

const modeMap = {};

function Image({ imgUrl }) {
  return (
    <div>
      <ImageContent>
        <img src={imgUrl} />
      </ImageContent>
    </div>
  );
}

export default Image;
