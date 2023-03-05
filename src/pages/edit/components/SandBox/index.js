import React, { useRef } from 'react';
import styled from 'styled-components';
import { componentClientMap } from '@/component-list/componentList';
import Wrap from '@/component-list/common/ComponentWrap';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSelectComponent } from '@/actions/currentSelectComponent';
import { addComponent, addComponentFromWrap } from '@/actions/componentList';
import { useGetComponentList, useGetCurrentSelectComponent } from '@/hooks';
import useUserAuth from '@/hooks/useUserAuth';

import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
const Viewer = styled.div`
  position: relative;
  margin: 40px auto;
  width: 375px;
  height: 667px;
  background-color: #fff;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.06);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.12);
  }
`;
const Empty = styled.div`
  border: 2px dashed #ccc;
  border-radius: 4px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  height: 120px;
`;

function SandBox() {
  const dispatch = useDispatch();
  const componentList = useGetComponentList();
  const currentSelectComponent = useGetCurrentSelectComponent();

  const select = (key) => {
    if (!currentSelectComponent || currentSelectComponent.key !== key) {
      dispatch(setCurrentSelectComponent(key));
    }
  };

  const add = () => {
    dispatch(addComponent());
  };

  const addOver = (e) => {
    dispatch(addComponentFromWrap(e.key, 'over'));
  };
  const addUnder = (e) => {
    dispatch(addComponentFromWrap(e.key, 'under'));
  };

  return (
    <Viewer>
      {console.log(componentList)}
      {componentList && componentList.length > 0 ? (
        componentList.map((item) => {
          if (item.type === 'empty') {
            return <Empty key={item.key}>請在此加入區塊</Empty>;
          }
          return (
            <Wrap
              key={item.key}
              component={item}
              addComponentOver={addOver}
              addComponentUnder={addUnder}
            >
              {componentClientMap[item.type](item.props, () => select(item.key))}
            </Wrap>
          );
        })
      ) : (
        <Result
          status='info'
          icon={<SmileOutlined />}
          subTitle='請加入區塊'
          extra={
            <Button type='primary' onClick={add}>
              加入區塊
            </Button>
          }
        />
      )}
    </Viewer>
  );
}

export default SandBox;
