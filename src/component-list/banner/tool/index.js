import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message, Modal } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { editComponent, deleteComponent } from '@/actions/componentList';
import { setCurrentSelectComponent } from '@/actions/currentSelectComponent';
import {
  useGetComponentList,
  useGetCurrentSelectComponent,
  useDeleteCurrentComponent,
} from '@/hooks';
import ToolContainer from '@/component-list/common/ToolContainer';
import BannerListItem from './BannerListItem';
import PositionMove from '@/component-list/common/PositionMove';

function Tool() {
  const dispatch = useDispatch();
  const componentList = useGetComponentList();
  const currentSelectComponent = useGetCurrentSelectComponent();
  const deleteCurrentComponent = useDeleteCurrentComponent();

  const [height, setHeight] = useState(currentSelectComponent.props.height);
  const [bannerList, setBannerList] = useState(currentSelectComponent.props.bannerList);

  useEffect(() => {
    setHeight(currentSelectComponent.props.height);
    setBannerList(currentSelectComponent.props.bannerList);
  }, [currentSelectComponent]);

  const changeHeight = (e) => {
    setHeight(e.target.value);
  };

  const changeImgUrl = (e, id) => {
    const newList = bannerList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          imgUrl: e.target.value,
        };
      }
      return item;
    });
    setBannerList(newList);
  };

  const changePath = (e, id) => {
    const newList = bannerList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          to: e,
        };
      }
      return item;
    });
    setBannerList(newList);
  };

  const addBanner = () => {
    const last = bannerList[bannerList.length - 1] || {};

    if (last.imgUrl && last.to) {
      const newList = bannerList.concat([
        {
          id: uuidv4(),
          imgUrl: '',
          to: '',
        },
      ]);

      setBannerList(newList);
    } else {
      message.info('上一個輪播設定尚未完成');
    }
  };

  const deleteBannerItem = (id) => {
    if (bannerList.length > 1) {
      const list = bannerList.filter((item) => item.id !== id);
      setBannerList(list);
    } else {
      message.info('已是最後一個輪播，無法刪除');
    }
  };

  const submit = () => {
    bannerList.forEach((item) => {
      if (!item.to && !item.imgUrl) {
        return message.info('請检查是否有未輸入的图片或跳转链接');
      }
    });
    if (!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(height)) {
      return message.info('必須為數字');
    }
    const newKey = uuidv4();
    dispatch(
      editComponent({
        type: 'banner',
        key: newKey,
        props: {
          bannerList,
          height: height,
        },
      }),
    );
    dispatch(setCurrentSelectComponent(newKey));

    message.info('修改成功');
  };

  return (
    <ToolContainer>
      <Form>
        {bannerList &&
          bannerList.map((item, index) => (
            <BannerListItem
              changeImgUrl={changeImgUrl}
              changePath={changePath}
              bannerItem={item}
              key={item.id}
              index={index}
              deleteBannerItem={deleteBannerItem}
            />
          ))}
        <Form.Item>
          <Button type='default' onClick={addBanner}>
            新增輪播
          </Button>
        </Form.Item>
        <Form.Item label='高度(px)'>
          <Input placeholder='高度' onChange={changeHeight} value={height} />
        </Form.Item>
        <PositionMove component={currentSelectComponent} componentList={componentList} />
        <Form.Item style={{ marginTop: '40px' }}>
          <Button type='primary' onClick={submit}>
            修改
          </Button>
          <Button style={{ marginLeft: '10px' }} onClick={deleteCurrentComponent}>
            刪除
          </Button>
        </Form.Item>
      </Form>
    </ToolContainer>
  );
}

export default Tool;
