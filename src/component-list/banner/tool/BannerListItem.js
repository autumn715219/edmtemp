import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Radio } from 'antd';

const BannerItem = styled.div`
  margin-bottom: 10px;
`;
const BannerItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BannerItemUrl = styled.div`
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const BannerItemEdit = styled.div`
  display: flex;
  & > div {
    margin-left: 5px;
    color: #1890ff;
    font-size: 14px;
    flex: none;
    text-align: right;
    cursor: pointer;
  }
`;
const BannerItemPanel = styled.div`
  margin-top: 10px;
  padding: 10px 15px;
  box-sizing: border-box;
  background-color: #f6f6f6;
  & > div {
    margin-bottom: 15px;
  }
`;
const BannerItemTitle = styled.div`
  margin-bottom: 5px;
`;
const RadioBar = styled.div`
  margin: 10px 0;
`;

function BannerListItem({ index, bannerItem, changeImgUrl, changePath, deleteBannerItem }) {
  const [showDetail, setShowDetail] = useState(!(bannerItem.imgUrl && bannerItem.to));
  const [urlType, setUrlType] = useState(1);

  const selectPath = (e) => {
    changePath(`./${e.path}.html`, bannerItem.id);
  };

  return (
    <BannerItem>
      <BannerItemHeader>
        <BannerItemUrl>
          {index + 1}. {bannerItem.imgUrl || '無內容'}
        </BannerItemUrl>
        <BannerItemEdit>
          <div onClick={() => setShowDetail(!showDetail)}>{showDetail ? '隱藏' : '編輯'}</div>
          <div onClick={() => deleteBannerItem(bannerItem.id)}>刪除</div>
        </BannerItemEdit>
      </BannerItemHeader>
      {showDetail && (
        <BannerItemPanel>
          <div>
            <BannerItemTitle>圖片連結</BannerItemTitle>
            <div>
              <Input value={bannerItem.imgUrl} onChange={(e) => changeImgUrl(e, bannerItem.id)} />
            </div>
          </div>
          <div>
            <BannerItemTitle>連結設定</BannerItemTitle>
            <Input
              value={bannerItem.to}
              onChange={(e) => changePath(e.target.value, bannerItem.id)}
            />
          </div>
        </BannerItemPanel>
      )}
    </BannerItem>
  );
}

export default BannerListItem;
