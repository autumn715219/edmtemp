import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { v4 as uuidv4 } from 'uuid';

import styled from 'styled-components';
import { ConfigProvider, Layout, Button, Select, Modal, Form, Input, message } from 'antd';
import {
  EyeOutlined,
  SaveOutlined,
  SendOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
} from '@ant-design/icons';

import { useSelector, useDispatch } from 'react-redux';
import { useGetCurrentSelectPage, useAppList } from '@/hooks';
import { setCurrentSelectPage } from '@/actions/currentSelectPage';
import { cleanEmpty } from '@/actions/componentList';
import { undo, redo } from '@/actions/undoStack';
import useUserAuth from '@/hooks/useUserAuth';
import Logo from '@/asset/logo.svg';

const { Header } = Layout;
const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
  }
`;
const ButtonGroup = styled.div`
  margin-left: ${(props) => props.marginLeft || '10px'};
`;
const LeftGroup = styled.div`
  display: flex;
`;
const FormItem = styled.div``;
const headerStyle = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: '#fff',
  boxShadow: '0 1px 7px rgba(0, 0, 0, 0.06)',
};
const selectStyle = {
  width: '200px',
  marginRight: '20px',
};
const DivLogo = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin: 0;
  height: 36px;
  width: 80px;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: left center;
  cursor: pointer;
  @media (max-width: 768px) {
    width: calc(100% - 180px);
  }
`;
function CustomHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pageList = useSelector((state) => state.pageListReducer);
  const undoStack = useSelector((state) => state.undoStackReducer);
  const selectedPage = useGetCurrentSelectPage();
  const { saveAppLayout } = useAppList();
  const { currentUser } = useUserAuth();

  const goBack = () => {
    navigate('/dashboard');
  };

  const publish = () => {
    const appId = queryString.parse(window.location.search).appId;
    window.open('/' + currentUser.uid + '/' + appId);
  };

  const save = () => {
    const appId = queryString.parse(window.location.search).appId;
    saveAppLayout(appId, JSON.stringify(pageList)); //saveAppLayout(appID,Layout)
    message.success('儲存成功！');
  };

  const undoClick = () => {
    dispatch(undo(undoStack));
  };

  const redoClick = () => {
    dispatch(redo(undoStack));
  };

  return (
    <Header style={headerStyle}>
      <HeaderContainer style={{ padding: '10px 20px' }}>
        <LeftGroup>
          <DivLogo href='/' alt='logo' />
          <Button style={{ marginRight: '10px' }} onClick={goBack}>
            查看全部頁面
          </Button>
        </LeftGroup>
        <div>
          <ButtonGroup>
            <Button icon={<SaveOutlined />} style={{ marginRight: '10px' }} onClick={save}>
              儲存
            </Button>
            <Button
              icon={<StepBackwardOutlined />}
              style={{ marginRight: '10px' }}
              onClick={undoClick}
            >
              還原
            </Button>
            <Button
              icon={<StepForwardOutlined />}
              style={{ marginRight: '10px' }}
              onClick={redoClick}
            >
              重做
            </Button>
            <Button type='primary' icon={<SendOutlined />} onClick={publish}>
              發佈
            </Button>
          </ButtonGroup>
        </div>
      </HeaderContainer>
    </Header>
  );
}

export default CustomHeader;
