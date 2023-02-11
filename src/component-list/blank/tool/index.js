import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import PositionMove from '@/component-list/common/PositionMove';
import { editComponent } from '@/actions/componentList';
import { setCurrentSelectComponent } from '@/actions/currentSelectComponent';
import ToolContainer from '@/component-list/common/ToolContainer';
import { SketchPicker } from 'react-color';
import {
  useGetComponentList,
  useGetCurrentSelectComponent,
  useDeleteCurrentComponent,
} from '@/hooks';
import { useDispatch } from 'react-redux';

function Tool() {
  const dispatch = useDispatch();
  const componentList = useGetComponentList();
  const currentSelectComponent = useGetCurrentSelectComponent();
  const deleteCurrentComponent = useDeleteCurrentComponent();

  const [height, setHeight] = useState(currentSelectComponent.props.height);
  const [backgroundColor, setBackgroundColor] = useState(
    currentSelectComponent.props.backgroundColor,
  );

  const submit = () => {
    const newKey = uuidv4();
    dispatch(
      editComponent({
        type: 'blank',
        key: newKey,
        props: {
          height,
          backgroundColor,
        },
      }),
    );
    dispatch(setCurrentSelectComponent(newKey));
  };

  return (
    <ToolContainer>
      <Form>
        <Form.Item label='高度'>
          <Input
            placeholder='请输入高度'
            onChange={(e) => setHeight(e.target.value)}
            value={height}
          />
        </Form.Item>
        <Form.Item label='顏色'>
          <Input
            style={{ marginBottom: '20px' }}
            placeholder='請填入顏色'
            onChange={(e) => setBackgroundColor(e.target.value)}
            value={backgroundColor}
          />
          <SketchPicker
            width='300px'
            color={backgroundColor}
            onChangeComplete={(e) => setBackgroundColor(e.hex)}
          />
        </Form.Item>
        <PositionMove component={currentSelectComponent} componentList={componentList} />
        <Form.Item style={{ marginTop: '40px' }}>
          <Button type='primary' onClick={submit}>
            儲存
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
