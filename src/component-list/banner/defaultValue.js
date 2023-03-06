import { v4 as uuidv4 } from 'uuid';

const defaultValue = {
  id: 'BANNER_COMPONENT_DEFAULT',
  name: '輪播Banner',
  imgUrl:
    'https://firebasestorage.googleapis.com/v0/b/edmtemp-24eae.appspot.com/o/asset%2Fimg-banner.jpg?alt=media&token=f5d330aa-6ece-4b5c-ab87-cac20fc25c08',
  componentType: 'banner',
  defaultProps: {
    bannerList: [
      {
        id: uuidv4(),
        to: 'https://edmtemp.com/',
        imgUrl:
          'https://firebasestorage.googleapis.com/v0/b/edmtemp-24eae.appspot.com/o/asset%2Fslide2.jpg?alt=media&token=891f63fe-6fbe-49ca-b19b-3ca77bc6a061',
      },
      {
        id: uuidv4(),
        to: 'https://edmtemp.com/',
        imgUrl:
          'https://firebasestorage.googleapis.com/v0/b/edmtemp-24eae.appspot.com/o/asset%2Fslide.jpg?alt=media&token=ef14321d-3a01-4cbe-84ed-ef043bba247a',
      },
    ],
    height: 200,
  },
};

export default defaultValue;
