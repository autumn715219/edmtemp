import React from 'react';
import { Modal, Form, Input } from 'antd';

function EditPageModal({
  editPageModalShow,
  hideEditPageModal,
  editPageModalSubmit,
  editPageInfo,
  inputEditPageInfo,
}) {
  return (
    <Modal
      open={editPageModalShow}
      onCancel={hideEditPageModal}
      onOk={editPageModalSubmit}
      okText='確認'
      cancelText='取消'
    >
      <Form style={{ marginTop: '30px' }}>
        <Form.Item label='EDM名稱'>
          <Input
            style={{ width: '400px' }}
            value={editPageInfo.title}
            onChange={inputEditPageInfo('title')}
          />
        </Form.Item>
        {/* <Form.Item label='EDM路徑' extra={<div>頁面路徑只能包含字母、數字、下底線</div>}>
          <Input
            style={{ width: '400px' }}
            value={editPageInfo.path}
            onChange={inputEditPageInfo('path')}
            suffix='.html'
          />
        </Form.Item> */}
      </Form>
    </Modal>
  );
}

export default EditPageModal;
