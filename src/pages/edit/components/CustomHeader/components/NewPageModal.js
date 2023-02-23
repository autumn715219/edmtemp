import React from 'react';
import { Modal, Form, Input } from 'antd';

function NewPageModal({
  newPageModalShow,
  newPageInfo,
  hideNewPageModal,
  newPageModalSubmit,
  inputNewPageInfo,
}) {
  return (
    <Modal
      open={newPageModalShow}
      onCancel={hideNewPageModal}
      onOk={newPageModalSubmit}
      okText='確認'
      cancelText='取消'
    >
      <Form style={{ marginTop: '30px' }}>
        <Form.Item label='EDM名稱'>
          <Input
            style={{ width: '400px' }}
            value={newPageInfo.title}
            onChange={inputNewPageInfo('title')}
          />
        </Form.Item>
        {/* <Form.Item label='EDM路徑' extra={<div>頁面路徑只能包含字母、数字、下底線</div>}>
          <Input
            style={{ width: '400px' }}
            value={newPageInfo.path}
            onChange={inputNewPageInfo('path')}
            suffix='.html'
          />
        </Form.Item> */}
      </Form>
    </Modal>
  );
}

export default NewPageModal;
