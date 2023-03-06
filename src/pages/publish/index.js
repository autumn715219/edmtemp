import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BannerServer as Banner } from '@/component-list/banner';
import { TextServer as Text } from '@/component-list/text';
import { ImageServer as Image } from '@/component-list/image';
import { TabServer as Tab } from '@/component-list/tab';
import { BlankServer as Blank } from '@/component-list/blank';
import { TitleServer as Title } from '@/component-list/title';
import useGetLayout from './hooks/useGetLayout';
import Loading from '@/components/loading';
import FooterCustom from '@/components/customFooter';
const WRAPPER = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: #f5f5f7;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Container = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 375px;
  background-color: #fff;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

function Publish() {
  const { userId, appId } = useParams();
  const { title, componentList, loading } = useGetLayout(userId, appId);
  const componentMap = {
    banner: (item) => <Banner key={item.key} {...item.props} />,
    text: (item) => <Text key={item.key} {...item.props} />,
    image: (item) => <Image key={item.key} {...item.props} />,
    tab: (item) => <Tab key={item.key} {...item.props} />,
    blank: (item) => <Blank key={item.key} {...item.props} />,
    title: (item) => <Title key={item.key} {...item.props} />,
  };
  return (
    <WRAPPER>
      {loading && <Loading />}
      <Container>
        {componentList.map((item) => {
          return componentMap[item.type](item);
        })}
        <FooterCustom />
      </Container>
    </WRAPPER>
  );
}

export default Publish;
