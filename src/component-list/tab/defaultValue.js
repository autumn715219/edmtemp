import { v4 as uuidv4 } from 'uuid';

const defaultValue = {
  id: 'TAB_COMPONENT_DEFAULT',
  name: '頁籤',
  imgUrl: 'https://drive.google.com/uc?id=1RH3cwyZVycE1dgO0Y89-OZvTwTd4LxBV',
  componentType: 'tab',
  defaultProps: {
    tabList: [
      {
        id: uuidv4(),
        tabName: '頁籤1',
        tabContent: [
          {
            id: uuidv4(),
            title: '頁籤1-標題1',
            content: 'Hello World!',
            imgUrl: 'https://i3.momoshop.com.tw/1675676656/goodsimg/0010/407/478/10407478_R.webp',
            redirectUrl: 'https://www.baidu.com',
          },
          {
            id: uuidv4(),
            title: '頁籤1-標題2',
            content: 'Hello World!',
            imgUrl: 'https://i3.momoshop.com.tw/1675676656/goodsimg/0010/407/478/10407478_R.webp',
            redirectUrl: 'https://www.taobao.com',
          },
        ],
      },
      {
        id: uuidv4(),
        tabName: '頁籤2',
        tabContent: [
          {
            id: uuidv4(),
            title: '頁籤2-標題1',
            content: 'Hello World!2',
            imgUrl: 'https://i3.momoshop.com.tw/1675676656/goodsimg/0010/407/478/10407478_R.webp',
            redirectUrl: 'https://www.baidu.com',
          },
          {
            id: uuidv4(),
            title: '頁籤2-標題2',
            content: 'Hello World!',
            imgUrl: 'https://i3.momoshop.com.tw/1675676656/goodsimg/0010/407/478/10407478_R.webp',
            redirectUrl: 'https://www.baidu.com',
          },
        ],
      },
      {
        id: uuidv4(),
        tabName: '頁籤3',
        tabContent: [
          {
            id: uuidv4(),
            title: '頁籤3-標題1',
            content: 'Hello World!',
            imgUrl: 'https://i3.momoshop.com.tw/1675676656/goodsimg/0010/407/478/10407478_R.webp',
            redirectUrl: 'https://www.baidu.com',
          },
          {
            id: uuidv4(),
            title: '頁籤3-標題2',
            content: 'Hello World!',
            imgUrl: 'https://i3.momoshop.com.tw/1675676656/goodsimg/0010/407/478/10407478_R.webp',
            redirectUrl: 'https://www.baidu.com',
          },
        ],
      },
      {
        id: uuidv4(),
        tabName: '頁籤4',
        tabContent: [
          {
            id: uuidv4(),
            title: '頁籤4-標題1',
            content: 'Hello World!',
            imgUrl: 'https://i3.momoshop.com.tw/1675676656/goodsimg/0010/407/478/10407478_R.webp',
            redirectUrl: 'https://www.baidu.com',
          },
          {
            id: uuidv4(),
            title: '頁籤4-標題2',
            content: 'Hello World!',
            imgUrl: 'https://i3.momoshop.com.tw/1675676656/goodsimg/0010/407/478/10407478_R.webp',
            redirectUrl: 'https://www.baidu.com',
          },
        ],
      },
    ],
  },
};

export default defaultValue;
