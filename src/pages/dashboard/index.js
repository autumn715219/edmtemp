import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { List, Button, Modal } from 'antd';
import CustomHeader from '@/components/customHeader';

import CreateAppModal from './components/CreateAppModal';
import EditAppModal from './components/EditAppModal';
import { useAppList } from '@/hooks';

const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(120deg, #fe7c5a, #fcd100);
  overflow: hidden;
  font-size: 16px;
`;
const MainContent = styled.div`
  width: 1000px;
  margin: 40px auto;
  box-sizing: border-box;
  padding: 20px 20px 40px 40px;
  background-color: #fff;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 96%;
    padding: 10px 10px 20px;
  }
`;
const Header = styled.div`
  padding: 30px 0 20px 0;
`;
const EditList = styled.div`
  margin-left: 20px;
  color: #111;
  display: flex;
  & > div {
    flex: none;
    cursor: pointer;
    margin-left: 15px;
  }
`;
const ListWords = styled.div`
  word-break: break-all;
`;
const ListTitle = styled(ListWords)`
  color: #ff7c5a;
  cursor: pointer;
`;
const ListContent = styled(ListWords)`
  color: #111;
`;

function Dashboard() {
  const navigate = useNavigate();
  const { appList, removeApp, clearApp, editAppInfo, addApp } = useAppList();
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectItem, setSelectItem] = useState({
    name: '',
    desc: '',
  });

  const removeItem = (item) => () => {
    console.log(item);
    Modal.confirm({
      title: '警告',
      content: `是否永久刪除EDM「${item.name}」`,
      onOk: () => {
        removeApp(item.appId);
      },
    });
  };

  const clear = () => {
    Modal.confirm({
      title: '是否清空所有EDM？',
      onOk: () => {
        clearApp();
      },
    });
  };

  const editItem = (item) => () => {
    //編輯視窗顯示
    setEditModalVisible(true);
    setSelectItem(item);
  };

  const toEdit = (appId) => () => {
    navigate(`/edit?appId=${appId}`);
  };

  return (
    <>
      <CustomHeader />
      <Page>
        <MainContent>
          <Header>
            <Button type='primary' onClick={() => setCreateModalVisible(true)}>
              新增EDM
            </Button>
            <Button style={{ marginLeft: '20px' }} onClick={clear}>
              全部刪除
            </Button>
          </Header>
          <List
            dataSource={appList}
            renderItem={(item) => (
              <List.Item style={{ borderBottom: '1px solid #ccc' }}>
                <List.Item.Meta
                  title={
                    <ListTitle style={{ fontSize: '16px' }} onClick={toEdit(item.appId)}>
                      {item.name}
                    </ListTitle>
                  }
                  description={<ListContent style={{ fontSize: '15px' }}>{item.desc}</ListContent>}
                />
                <EditList>
                  <Button onClick={toEdit(item.appId)}>編輯頁面</Button>
                  <Button style={{ marginLeft: '10px' }} onClick={editItem(item)}>
                    修改名稱
                  </Button>
                  <Button style={{ marginLeft: '10px' }} onClick={removeItem(item)}>
                    刪除
                  </Button>
                </EditList>
              </List.Item>
            )}
          />
        </MainContent>
        <CreateAppModal
          visible={createModalVisible}
          addApp={addApp}
          closeModal={() => setCreateModalVisible(false)}
        />
        <EditAppModal
          visible={editModalVisible}
          editAppInfo={editAppInfo}
          selectItem={selectItem}
          closeModal={() => setEditModalVisible(false)}
        />
      </Page>
    </>
  );
}

export default Dashboard;
