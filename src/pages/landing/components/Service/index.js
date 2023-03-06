import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components/macro';

import 'swiper/css';
import Step1 from '@/asset/step-1.jpg';
import Step2 from '@/asset/step-2.jpg';
import Step3 from '@/asset/step-3.jpg';
import Step4 from '@/asset/step-4.jpg';
import Step5 from '@/asset/step-5.jpg';
import Step6 from '@/asset/step-6.jpg';

const FourStepWrap = styled.div`
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0px auto;
  max-width: 1200px;
  padding: 50px 50px 0;
  text-align: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2vw;
  }
`;

const ServiceWrp = styled.div`
  width: 100%;
  padding: 20px 10px;
  border-radius: 5px;
  color: #000;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0;
  }
`;
const Steptitle = styled.div`
  padding: 20px 0;
  font-size: 20px;
  line-height: 30px;
  @media (max-width: 768px) {
    padding: 2vw;
    font-size: 3.5vw;
  }
`;
const StepIndex = styled.div`
  display: block;
  width: fit-content;
  margin: 5px auto;
  padding: 5px 10px;
  font-size: 20px;
  line-height: 30px;
  background-color: #c8c8c8;
  color: #fff;
  border-radius: 10px;
  @media (max-width: 768px) {
    padding: 0.5vw 2vw;
    font-size: 3vw;
  }
`;
const StepImg = styled.div`
  width: 100%;
  padding: 20px 0;
  border-radius: 5px;
  color: #000;
  border: 1px solid #ccc;
  transform: scale(0.8);
  transform-origin: top;
  img {
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 2vw;
    transform: none;
    transform-origin: top;
  }
`;
const Features = styled.h2`
  position: relative;
  text-align: center;
  width: fit-content;
  padding: 20px 0 5px;
  margin: 10px auto;
  color: #000;
  font-size: 28px;
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 5px;
    background-color: #fcd100;
  }
  @media (max-width: 768px) {
    margin: 5vw auto 5vw;
    padding: 2vw 0 1vw;
    font-size: 4.5vw;
  }
`;

export default function Service() {
  const serviceData = [
    {
      title: '註冊帳號',
      img: Step1,
    },
    {
      title: '進入控制台',
      img: Step2,
    },
    {
      title: '新增EDM',
      img: Step3,
    },
    {
      title: '加入區塊',
      img: Step4,
    },
    {
      title: '調整屬性',
      img: Step5,
    },
    {
      title: '儲存並發佈',
      img: Step6,
    },
  ];
  return (
    <>
      <ServiceWrp>
        <Features>使用步驟</Features>
        <FourStepWrap>
          <Swiper spaceBetween={30} slidesPerView={2.5}>
            {serviceData.map((item, index) => (
              <SwiperSlide key={index}>
                <Steptitle>
                  <StepIndex>Step {index + 1}.</StepIndex>
                  {item.title}
                </Steptitle>
                <StepImg>
                  <img src={item.img} />
                </StepImg>
              </SwiperSlide>
            ))}
          </Swiper>
        </FourStepWrap>
      </ServiceWrp>
    </>
  );
}
