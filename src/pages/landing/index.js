// import React, { useState, useEffect } from 'react';
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import CustomHeader from '@/components/customHeader';
import FooterCustom from '@/components/customFooter';
import Service from '@/pages/landing/components/Service/';
import LoginFormModal from '@/components/customHeader/components/LoginFormModal.js';
import useUserAuth from '@/hooks/useUserAuth';

import BN from '@/asset/BN.jpg';

const WRAPPER = styled.main`
  margin: 0 auto;
  width: 100%;
  @media (max-width: 768px) {
    margin: 0 auto 100px;
  }
`;

const DivLandingBn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0px auto;
  padding: 20px 100px;
  background-image: linear-gradient(120deg, #fe7c5a, #fcd100);
  @media (max-width: 768px) {
    padding: 5vw;
    grid-template-columns: 1fr;
  }
`;
const LandingBnImgWrap = styled.div`
  width: 100%;
  margin: 0px auto;
  padding: 50px 100px 50px 0;

  @media (max-width: 768px) {
    padding: 2vw 2vw 2vw 0;
  }
`;
const LandingBnImg = styled.img`
  display: block;
  margin: 0 auto;
  vertical-align: middle !important;
  width: 100%;
  border-radius: 5px;
`;

const LandingContent = styled.div`
  margin: 0px auto;
  padding: 20px 20px;

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 5vw;
    padding: 2vw 2vw 2vw 0;
  }
`;

const LandingTitle = styled.h2`
  font-size: 32px;
  color: #fff;
  line-height: 1.3;
  i {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: 3px;
      width: 100%;
      height: 5px;
      background-color: #fcd100;
    }
  }
  @media (max-width: 768px) {
    font-size: 6vw;
    color: #fff;
  }
`;
const LandingSubtitle = styled.div`
  margin-top: 10px;
  font-size: 22px;
  line-height: 30px;
  i {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 2px 5px 5px;
    background-color: #fcd100;
    border-radius: 50%;
  }
  @media (max-width: 768px) {
    margin-top: 1vw;

    font-size: 3.5vw;
    padding: 2vw 2vw 2vw 0;
    line-height: 1.3;
  }
`;

const Button = styled.div`
  width: fit-content;
  background-color: #000;
  border-radius: 8px;
  margin-top: 20px;
  a {
    display: block;
    font-size: 18px;
    padding: 10px 20px;
    text-decoration: none;
    color: #fff;
  }
  @media (max-width: 768px) {
    margin: 1vw auto;
    a {
      font-size: 3vw;
      padding: 2vw 4vw;
    }
  }
`;

const FourStepWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0px auto;
  padding: 50px 50px;

  @media (max-width: 768px) {
    padding: 2vw 2vw 2vw 0;
  }
`;

export default function Landing() {
  const [loginFormModalVisible, setLoginFormModalVisible] = useState(false);
  const { currentUser } = useUserAuth();

  const handleLogin = () => {
    setLoginFormModalVisible(true);
  };
  return (
    <>
      <WRAPPER>
        <CustomHeader />
        <DivLandingBn>
          <LandingContent>
            <LandingTitle>
              <i>15分鐘 </i>快速建立
              <br />
              屬於你的商品行銷網頁
            </LandingTitle>
            <LandingSubtitle>
              快速存檔<i></i>輕鬆發布
            </LandingSubtitle>
            <Button>
              {currentUser ? (
                <Link to='/dashboard'>立即開始</Link>
              ) : (
                <Link onClick={handleLogin}>立即開始</Link>
              )}
            </Button>
          </LandingContent>
          <LandingBnImgWrap>
            <LandingBnImg src={BN} alt='BN' />
          </LandingBnImgWrap>
        </DivLandingBn>
        <Service />
        <FooterCustom />
      </WRAPPER>
      <LoginFormModal
        visible={loginFormModalVisible}
        closeModal={() => setLoginFormModalVisible(false)}
      />
    </>
  );
}
