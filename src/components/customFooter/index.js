import styled from 'styled-components/macro';
import React from 'react';

const Footer = styled.div`
  display: grid;
  justify-content: center;
  padding: 20px 0;
  margin: 20px 0;
  color: #000;
  font-size: 12px;
  @media (max-width: 767px) {
  }
`;
const FooterLink = styled.a`
  display: contents;
  color: #ff7c5a;
  text-decoration: none;
`;

function FooterCustom() {
  return (
    <Footer>
      COPYRIGHT © 2023 <FooterLink href='/'>EDMTEMP</FooterLink>
    </Footer>
  );
}

export default FooterCustom;
