import React, { useEffect, useRef } from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';

const Command = styled.div`
  margin-top: 20px;
  background-color: #111;
  color: #fff;
  padding: 15px;
  width: 700px;
  height: 400px;
  overflow: auto;
`;

const Download = styled.a`
  display: block;
  margin: 20px 0;
`;

function PackageModal({ publishModalShow, hidePublishModal, publishStatus, resultFile }) {
  const commandRef = useRef(null);

  useEffect(() => {
    if (commandRef && commandRef.current) {
      const dom = commandRef.current;
      dom.scrollTop =
        dom.scrollHeight - dom.clientHeight > 0 ? dom.scrollHeight - dom.clientHeight : 0;
    }
  }, [publishStatus]);

  return (
    <Modal
      open={publishModalShow}
      onCancel={hidePublishModal}
      onOk={hidePublishModal}
      width={800}
      maskClosable={false}
    >
      <Command ref={commandRef}>
        {publishStatus.map((item, index) => (
          <div key={index}>{item.text}</div>
        ))}
      </Command>
      {resultFile.path && (
        <Download href={resultFile.path}>下載 {resultFile.folderId}.zip</Download>
      )}
    </Modal>
  );
}

export default PackageModal;
