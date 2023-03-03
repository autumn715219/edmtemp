import { v4 as uuidv4 } from 'uuid';

const defaultValue = {
  id: 'BANNER_COMPONENT_DEFAULT',
  name: '輪播',
  imgUrl:
    'https://firebasestorage.googleapis.com/v0/b/edmtemp-24eae.appspot.com/o/asset%2Fimg-banner.jpg?alt=media&token=f5d330aa-6ece-4b5c-ab87-cac20fc25c08',
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
