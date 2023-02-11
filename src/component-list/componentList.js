import React from 'react';

import {
  defaultValue as bannerDefaultValue,
  BannerClient,
  ToolPanel as BannerToolPanel,
} from './banner';

import { defaultValue as textDefaultValue, TextClient, ToolPanel as TextToolPanel } from './text';
import {
  defaultValue as imageDefaultValue,
  ImageClient,
  ToolPanel as ImageToolPanel,
} from './image';
import { defaultValue as tabDefaultValue, TabClient, ToolPanel as TabToolPanel } from './tab';
import {
  defaultValue as blankDefaultValue,
  BlankClient,
  ToolPanel as BlankToolPanel,
} from './blank';

const componentList = [
  {
    id: 'BANNER_COMPONENT',
    name: '輪播',
    icon: 'SlidersOutlined',
    children: [{ ...bannerDefaultValue }],
  },
  {
    id: 'TEXT_COMPONENT',
    name: '文字',
    icon: 'AlignCenterOutlined',
    children: [{ ...textDefaultValue }],
  },
  {
    id: 'IMAGE_COMPONENT',
    name: '圖片',
    icon: 'PictureOutlined',
    children: [{ ...imageDefaultValue }],
  },
  {
    id: 'TAB_COMPONENT',
    name: 'TAB',
    icon: 'DatabaseOutlined',
    children: [{ ...tabDefaultValue }],
  },
  {
    id: 'BLANK_COMPONENT',
    name: '分隔',
    icon: 'MinusOutlined',
    children: [{ ...blankDefaultValue }],
  },
];

const componentClientMap = {
  banner: (props, select) => <BannerClient onClick={select} {...props} />,
  text: (props, select) => <TextClient onClick={select} {...props} />,
  image: (props, select) => <ImageClient onClick={select} {...props} />,
  tab: (props, select) => <TabClient onClick={select} {...props} />,
  blank: (props, select) => <BlankClient onClick={select} {...props} />,
};

const getPanelMap = (name) => {
  const panelMap = {
    banner: () => <BannerToolPanel />,
    text: () => <TextToolPanel />,
    image: () => <ImageToolPanel />,
    tab: () => <TabToolPanel />,
    blank: () => <BlankToolPanel />,
  };
  return panelMap[name];
};

export { componentList, componentClientMap, getPanelMap };
