import React, { useState } from 'react';
import { Form, Input, Button, message, Modal } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import PositionMove from '@/component-list/common/PositionMove';
import { editComponent, deleteComponent } from '@/actions/componentList';
import { setCurrentSelectComponent } from '@/actions/currentSelectComponent';
import ToolContainer from '@/component-list/common/ToolContainer';
import {
  useGetComponentList,
  useGetCurrentSelectComponent,
  useDeleteCurrentComponent,
} from '@/hooks';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const TextArea = styled(Input.TextArea)`
  width: 300px;
`;

function Tool() {
  const dispatch = useDispatch();
  const componentList = useGetComponentList();
  const currentSelectComponent = useGetCurrentSelectComponent();
  const deleteCurrentComponent = useDeleteCurrentComponent();
  const [content, setContent] = useState(currentSelectComponent.props.content);
  const [fontSize, setFontSize] = useState(currentSelectComponent.props.fontSize);

  const submit = () => {
    const newKey = uuidv4();
    dispatch(
      editComponent({
        type: 'text',
        key: newKey,
        props: {
          content,
          fontSize,
        },
      }),
    );
    dispatch(setCurrentSelectComponent(newKey));
  };

  return (
    <ToolContainer>
      <Form>
        <Form.Item label='字級'>
          <Input
            placeholder='請輸入字級'
            onChange={(e) => setFontSize(e.target.value)}
            value={fontSize}
          />
        </Form.Item>
        <Form.Item label='内容'>
          <TextArea
            placeholder='輸入文案內容'
            rows={5}
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
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
