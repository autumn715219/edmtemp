import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { message } from 'antd';
import { useGetCurrentSelectPage } from '@/hooks/index';
import { editPage } from '@/actions/pageList';

function useEditPageModal() {
  const currentSelectPage = useGetCurrentSelectPage();
  const [editPageInfo, setEditPageInfo] = useState({
    title: currentSelectPage ? currentSelectPage.title : '',
    path: currentSelectPage ? currentSelectPage.path : '',
  });
  const [editPageModalShow, setEditPageModalShow] = useState(false);
  const pageList = useSelector((state) => state.pageListReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    setEditPageInfo({
      title: currentSelectPage ? currentSelectPage.title : '',
      path: currentSelectPage ? currentSelectPage.path : '',
    });
  }, [currentSelectPage]);

  const editPageModalSubmit = () => {
    const hasPath = pageList
      .map((item) => item.path)
      .filter((path) => path !== currentSelectPage.path)
      .includes(editPageInfo.path);

    if (!editPageInfo.title) {
      return message.warn('請輸入標題');
    }
    if (hasPath) {
      return message.warn('創建頁面中已有相同路徑');
    }
    if (!/^\w+$/.test(editPageInfo.path)) {
      return message.warn('頁面路徑只能包含數字、字母、下底線');
    }

    setEditPageModalShow(false);

    dispatch(
      editPage({
        ...currentSelectPage,
        title: editPageInfo.title,
        path: editPageInfo.path,
      }),
    );
  };

  const inputEditPageInfo = (label) => (e) => {
    setEditPageInfo({
      ...editPageInfo,
      [label]: e.target.value,
    });
  };

  const hideEditPageModal = () => {
    setEditPageModalShow(false);
  };

  const showEditPageModal = () => {
    setEditPageModalShow(true);
  };

  return {
    editPageModalSubmit,
    editPageInfo,
    inputEditPageInfo,
    editPageModalShow,
    hideEditPageModal,
    showEditPageModal,
  };
}

export default useEditPageModal;
