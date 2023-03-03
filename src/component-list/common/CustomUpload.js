import React from 'react';
import styled from 'styled-components';
import { message } from 'antd';
import { db, storage } from '@/utils/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 15px;
  & > label {
    cursor: pointer;
    display: block;
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 5px 15px;
    background-color: #fff;
    flex: none;
  }
  & > span {
    text-overflow: ellipsis;
    flex: none;
    margin-left: 10px;
  }
`;

function CustomUpload({ onChange, imgName }) {
  const upload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', () => {
      if (file.size < 1024000) {
        try {
          // 第1個參數 storage service，第2個參數 檔案儲存資料夾名稱 / 檔案名稱
          const nameRef = `images/${Date.now() + imgName}`;
          const storageRef = ref(storage, nameRef);
          // uploadBytesResumable 上傳檔案至 cloud storage
          const uploadTask = uploadBytesResumable(storageRef, file);
          // on() 可監控整個上傳過程: 速度、失敗訊息、取得成功後檔案url
          uploadTask.on('state_changed', () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              onChange({
                url: downloadURL,
                imgName: imgName,
              });
              message.success('圖片上傳成功');
            });
          });
        } catch (err) {
          message.error('圖片上傳失敗');
        }
      } else {
        message.error('圖片大小不能超過1MB');
      }
    });
  };
  return (
    <Container>
      <label htmlFor='files'>上傳圖片</label>
      <span>{imgName || ''}</span>
      <input
        id='files'
        style={{ visibility: 'hidden' }}
        type='file'
        onChange={upload}
        accept='.jpg,.png,.jpeg,.gif'
      />
    </Container>
  );
}

export default CustomUpload;
