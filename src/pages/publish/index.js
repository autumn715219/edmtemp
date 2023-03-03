import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { useParams } from 'react-router-dom';

import styled from 'styled-components';
import { BannerServer as Banner } from '@/component-list/banner';
import { TextServer as Text } from '@/component-list/text';
import { ImageServer as Image } from '@/component-list/image';
import { TabServer as Tab } from '@/component-list/tab';
import { BlankServer as Blank } from '@/component-list/blank';
import useGetLayout from './hooks/useGetLayout';
import Loading from '@/components/loading';

function Publish() {
  const { userId, appId } = useParams();
  const { title, componentList, loading } = useGetLayout(userId, appId);

  const componentMap = {
    banner: (item) => <Banner key={item.key} {...item.props} />,
    text: (item) => <Text key={item.key} {...item.props} />,
    image: (item) => <Image key={item.key} {...item.props} />,
    tab: (item) => <Tab key={item.key} {...item.props} />,
    blank: (item) => <Blank key={item.key} {...item.props} />,
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      {componentList.map((item) => {
        return componentMap[item.type](item);
      })}
    </div>
  );
}

export default Publish;
