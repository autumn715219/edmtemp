import React, { useState } from 'react';
import { Input, Form, Modal } from 'antd';
import styled from 'styled-components';
import TabContentItem from './TabContentItem';

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;
const ListName = styled.div`
  cursor: pointer;
`;
const EditText = styled.div`
  color: #ff7c5a;
  cursor: pointer;
`;
const Panel = styled.div`
  margin-top: 10px;
  box-sizing: border-box;
  background-color: #f1f1f1;
  border-radius: 4px;
  padding: 15px;
`;
const ListTitle = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
`;
const EditPanel = styled.div`
  display: flex;
`;

function TabItem({ removeTab, removeTabContent, changeTabTitle, changeTabContent, item, index }) {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  const remove = (id) => () => {
    Modal.confirm({
      title: '確認刪除此項?',
      onOk() {
        removeTab(id);
      },
    });
  };

  return (
    <div>
      <ListItem>
        <ListName>
          {index + 1}. {item.tabName}
        </ListName>
        <EditPanel>
          <EditText onClick={toggle}>{active ? '隱藏' : '編輯'}</EditText>
          <EditText onClick={remove(item.id)} style={{ marginLeft: '15px' }}>
            刪除
          </EditText>
        </EditPanel>
      </ListItem>
      {active && (
        <Panel>
          <Form.Item label='名稱'>
            <Input onChange={changeTabTitle(item.id)} value={item.tabName} />
          </Form.Item>
          <ListTitle>Tab内容列表</ListTitle>
          {item.tabContent.map((contentItem) => (
            <TabContentItem
              key={contentItem.id}
              removeTabContent={removeTabContent}
              contentItem={contentItem}
              tabItem={item}
              changeTabContent={changeTabContent}
            />
          ))}
        </Panel>
      )}
    </div>
  );
}

export default TabItem;
