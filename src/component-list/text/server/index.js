import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 5px 15px 5px;
  font-size: 14px;
  color: #333;
  line-height: 1.5;
`;

function Text({ content, fontSize }) {
  return (
    <Container>
      <div style={{ fontSize }}>{content}</div>
    </Container>
  );
}

export default Text;
