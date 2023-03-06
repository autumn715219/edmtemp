import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 15px 5px;
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
    height: 5px;
    background-color: ${(props) => props.backgroundColor || '#ff7c5a'};
    opacity: 0.3;
  }
`;
function Title({ content, onClick, fontSize, backgroundColor }) {
  return (
    <Container onClick={onClick}>
      <TitleDiv style={{ fontSize }}>
        {content}
        <HeightLightDiv style={{ backgroundColor }} />
      </TitleDiv>
    </Container>
  );
}

export default Title;
