import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Form, Input, Radio } from 'antd';
import CustomUpload from '@/component-list/common/CustomUpload';

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
    color: #ff7c5a;
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
const RadioGroup = styled.div`
  margin-bottom: 20px;
`;
const Tips = styled.div`
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
`;

const PreviewImage = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100px;
  background: url(${(props) => props.imgUrl}) no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 30px;
`;
const DetailImage = styled.img`
  width: 400px;
  height: auto;
`;
function BannerListItem({ index, bannerItem, changeImgUrl, changePath, deleteBannerItem }) {
  const [showDetail, setShowDetail] = useState(!(bannerItem.imgUrl && bannerItem.to)); //顯示或關閉Detail
  const [urlType, setUrlType] = useState(1);
  const [imgName, setImgName] = useState('');
  const [previewVisible, setPreviewVisible] = useState(false);
  const [imgType, setImgType] = useState(1);

  const upload = async (e) => {
    console.log(e.target.url);
    changeImgUrl(e.target.url, bannerItem.id);
  };

  return (
    <BannerItem>
      <BannerItemHeader>
        <BannerItemUrl>
          第 {index + 1} 張｜ {bannerItem.imgUrl || '無內容'}
        </BannerItemUrl>
        <BannerItemEdit>
          <div onClick={() => setShowDetail(!showDetail)}>{showDetail ? '隱藏' : '編輯'}</div>
          <div onClick={() => deleteBannerItem(bannerItem.id)}>刪除</div>
        </BannerItemEdit>
      </BannerItemHeader>
      {showDetail && (
        <BannerItemPanel>
          {/* <RadioGroup>
            <Radio.Group value={imgType} onChange={(e) => setImgType(e.target.value)}>
              <Radio value={1}>圖片連結</Radio>
              <Radio value={2}>上傳圖片</Radio>
            </Radio.Group>
          </RadioGroup>
          {imgType === 1 && (
            <Form.Item label='圖片url：'>
              <Input
                style={{ width: '300px' }}
                placeholder='標題'
                onChange={(e) => changeImgUrl(e, bannerItem.id)}
                value={bannerItem.imgUrl}
              />
            </Form.Item>
          )}
          {imgType === 2 && (
            <>
              <Tips>大小不得超過1MB</Tips>
              <CustomUpload
                onChange={upload}
                imgName={bannerItem.imgName}
                value={bannerItem.imgUrl}
              />
            </>
          )}
          <PreviewImage onClick={() => setPreviewVisible(true)} imgUrl={bannerItem.imgUrl} />
          <Modal
            open={previewVisible}
            onOk={() => setPreviewVisible(false)}
            onCancel={() => setPreviewVisible(false)}
          >
            <DetailImage src={bannerItem.imgUrl} />
          </Modal> */}
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
