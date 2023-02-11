import { v4 as uuidv4 } from 'uuid';

const defaultValue = {
  id: 'BANNER_COMPONENT_DEFAULT',
  name: '輪播',
  imgUrl: 'https://drive.google.com/uc?id=1kAbGtHSjlrjJJbkQKJk2iQLWFZBrVIXx',
  componentType: 'banner',
  defaultProps: {
    bannerList: [
      {
        id: uuidv4(),
        to: 'https://edmtemp.com/',
        imgUrl:
          'https://img4.momoshop.com.tw/ecm/img/online/21/345/00/000/bt_1_008_01/bt_1_008_01_e52.jpg?t=1640329817725',
      },
      {
        id: uuidv4(),
        to: 'https://edmtemp.com/',
        imgUrl:
          'https://img4.momoshop.com.tw/ecm/img/online/21/345/00/000/bt_1_008_01/bt_1_008_01_e52.jpg?t=1640329817725',
      },
    ],
    height: 200,
  },
};

export default defaultValue;
