import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 15px;
  font-size: 20px;
`;
const TitleDiv = styled.div`
  position: relative;

  width: fit-content;
`;
const HeightLightDiv = styled.div`
    z-index: 0;
    content: '';
    position: absolute;
    padding: 0 5px;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 7px;
    background-color: ${(props) => props.backgroundColor || '#ff7c5a'};
    opacity: 0.5;
  }
`;
function Title({ content, fontSize, backgroundColor }) {
  return (
    <Container>
      <TitleDiv style={{ fontSize }}>
        {content}
        <HeightLightDiv style={{ backgroundColor }} />
      </TitleDiv>
    </Container>
  );
}

export default Title;
