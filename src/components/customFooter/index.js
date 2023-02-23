import styled from 'styled-components/macro';

const FooterCustom = styled.div`
  display: grid;
  justify-content: center;
  margin: 20px 0;
  color: #000;
  background-color: #e7dcd9;
  @media (max-width: 767px) {
  }
`;

function FooterCustom() {
  return (
    <FooterCustom>
      <div>COPYRIGHT © 2023 EDMTEMP</div>
    </FooterCustom>
  );
}

export default FooterCustom;
