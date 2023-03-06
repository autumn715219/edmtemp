import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px 15px 5px;
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  text-align: justify;
`;

function Text({ content, onClick, fontSize }) {
  return (
    <Container onClick={onClick}>
      <div style={{ fontSize }}>{content}</div>
    </Container>
  );
}

export default Text;
