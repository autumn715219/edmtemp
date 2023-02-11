import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
  margin-top: 30px;
`;

function CreateAppModal({ visible, closeModal, addApp }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    desc: '',
  });

  useEffect(() => {
    setFormData({
      name: 'EDM名稱',
      desc: '全站享88折',
    });
  }, [setFormData]);

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
    const appId = addApp({
      name: formData.name,
      desc: formData.desc,
    });
    if (appId) {
      _closeModal();

      setTimeout(() => {
        navigate(`/edit?appId=${appId}`);
      }, 1000);
    }
  };

  const onCancel = () => {
    _closeModal();
  };

  return (
    <Modal open={visible} onCancel={onCancel} onOk={submit}>
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

export default CreateAppModal;
