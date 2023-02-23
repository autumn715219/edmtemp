import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteComponent } from '../actions/componentList';
import useGetCurrentSelectComponent from './useGetCurrentSelectComponent';
import { Modal } from 'antd';

function useDeleteCurrentComponent() {
  const dispatch = useDispatch();
  const currentSelectComponent = useGetCurrentSelectComponent();

  const remove = () => {
    Modal.confirm({
      title: '確認要刪除區塊？',
      okText: '確認',
      cancelText: '取消',
      onOk() {
        dispatch(deleteComponent(currentSelectComponent));
      },
    });
  };

  return remove;
}

export default useDeleteCurrentComponent;
