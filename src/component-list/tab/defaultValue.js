import { v4 as uuidv4 } from 'uuid';

const defaultValue = {
  id: 'TAB_COMPONENT_DEFAULT',
  name: '頁籤',
  imgUrl:
    'https://firebasestorage.googleapis.com/v0/b/edmtemp-24eae.appspot.com/o/asset%2Fimg-tab.jpg?alt=media&token=55e675f9-b7d2-44bc-8dff-b6424486a52c',
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
            redirectUrl: 'https://www.momoshop.com.tw',
          },
          {
            id: uuidv4(),
            title: '頁籤1-標題2',
            content: 'Hello World!',
            imgUrl: 'https://i3.momoshop.com.tw/1675676656/goodsimg/0010/407/478/10407478_R.webp',
            redirectUrl: 'https://www.momoshop.com.tw',
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
            redirectUrl: 'https://www.momoshop.com.tw',
          },
          {
            id: uuidv4(),
            title: '頁籤2-標題2',
            content: 'Hello World!',
            imgUrl: 'https://i3.momoshop.com.tw/1675676656/goodsimg/0010/407/478/10407478_R.webp',
            redirectUrl: 'https://www.momoshop.com.tw',
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
            redirectUrl: 'https://www.momoshop.com.tw',
          },
          {
            id: uuidv4(),
            title: '頁籤3-標題2',
            content: 'Hello World!',
            imgUrl: 'https://i3.momoshop.com.tw/1675676656/goodsimg/0010/407/478/10407478_R.webp',
            redirectUrl: 'https://www.momoshop.com.tw',
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
            redirectUrl: 'https://www.momoshop.com.tw',
          },
          {
            id: uuidv4(),
            title: '頁籤4-標題2',
            content: 'Hello World!',
            imgUrl: 'https://i3.momoshop.com.tw/1675676656/goodsimg/0010/407/478/10407478_R.webp',
            redirectUrl: 'https://www.momoshop.com.tw',
          },
        ],
      },
    ],
  },
};

export default defaultValue;
