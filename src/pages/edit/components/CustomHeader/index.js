import React, { useRef } from 'react';
import { ConfigProvider, Layout, Button, Select, Modal, Form, Input, message } from 'antd';
import {
  EyeOutlined,
  SaveOutlined,
  SendOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useGetCurrentSelectPage, useAppList } from '@/hooks';
import { deletePage } from '@/actions/pageList';
import { setCurrentSelectPage } from '@/actions/currentSelectPage';
import queryString from 'query-string';
import useEditPageModal from './hooks/useEditPageModal';
// import usePublishModal from './hooks/usePublishModal';
import { v4 as uuidv4 } from 'uuid';
import NewPageModal from './components/NewPageModal';
import EditPageModal from './components/EditPageModal';
import PublishModal from './components/PublishModal';
import { cleanEmpty } from '@/actions/componentList';
import { undo, redo } from '@/actions/undoStack';

const { Option } = Select;
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
const PageSelected = styled.div`
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

function CustomHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pageList = useSelector((state) => state.pageListReducer);
  const undoStack = useSelector((state) => state.undoStackReducer);
  const selectedPage = useGetCurrentSelectPage();

  const {
    editPageModalSubmit,
    editPageInfo,
    inputEditPageInfo,
    editPageModalShow,
    hideEditPageModal,
    showEditPageModal,
  } = useEditPageModal();

  const { saveAppLayout } = useAppList();

  const goBack = () => {
    navigate(`/dashboard`);
  };

  const publish = () => {
    const packageId = uuidv4();
    message.info('發佈功能製作中！');
  };

  const save = () => {
    const appId = queryString.parse(window.location.search).appId;
    saveAppLayout(appId, JSON.stringify(pageList));
    message.info('儲存成功！');
  };

  const preview = () => {
    message.info('預覽功能製作中！');
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
        <PageSelected>
          <Button style={{ marginRight: '10px' }} onClick={goBack}>
            查看全部頁面
          </Button>
        </PageSelected>
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

            <Button icon={<EyeOutlined />} style={{ marginRight: '10px' }} onClick={preview}>
              預覽
            </Button>
            <Button type='primary' icon={<SendOutlined />} onClick={publish}>
              發佈
            </Button>
          </ButtonGroup>
        </div>
      </HeaderContainer>

      {/* <NewPageModal
        newPageModalShow={newPageModalShow}
        hideNewPageModal={hideNewPageModal}
        newPageModalSubmit={newPageModalSubmit}
        inputNewPageInfo={inputNewPageInfo}
        newPageInfo={newPageInfo}
      /> */}

      <EditPageModal
        editPageModalShow={editPageModalShow}
        hideEditPageModal={hideEditPageModal}
        editPageModalSubmit={editPageModalSubmit}
        editPageInfo={editPageInfo}
        inputEditPageInfo={inputEditPageInfo}
      />

      {/* <PublishModal
        publishModalShow={publishModalShow}
        hidePublishModal={() => hidePublishModal(ws.current)}
        publishStatus={publishStatus}
        resultFile={resultFile}
      /> */}
    </Header>
  );
}

export default CustomHeader;
