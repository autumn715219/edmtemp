import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, message } from 'antd';
import styled from 'styled-components';

const Content = styled.div`
  margin-top: 30px;
`;

function EditAppModal({ visible, editAppInfo, closeModal, selectItem }) {
  const [formData, setFormData] = useState({
    name: '',
    desc: '',
  });

  useEffect(() => {
    setFormData({
      name: selectItem.name,
      desc: selectItem.desc,
    });
  }, [selectItem]);

  const changeValue = (label) => (e) => {
    setFormData({
      ...formData,
      [label]: e.target.value,
    });
  };

  const _closeModal = () => {
    closeModal();
    setFormData({
      name: '',
      desc: '',
    });
  };

  const submit = () => {
    if (!formData.name) {
      return message.info('請填寫EDM名稱');
    }
    const result = editAppInfo({
      ...formData,
      id: selectItem.id,
    });
    if (result) {
      _closeModal();
    }
  };

  const onCancel = () => {
    _closeModal();
  };

  return (
    <Modal open={visible} onCancel={onCancel} onOk={submit} okText='確認' cancelText='取消'>
      <Content>
        <Form labelCol={{ span: 4 }}>
          <Form.Item label='EDM名稱' required>
            <Input value={formData.name} onChange={changeValue('name')} />
          </Form.Item>
          <Form.Item label='EDM描述'>
            <Input value={formData.desc} onChange={changeValue('desc')} />
          </Form.Item>
        </Form>
      </Content>
    </Modal>
  );
}

export default EditAppModal;
