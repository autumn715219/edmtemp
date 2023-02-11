import React from 'react';
import { Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppList } from '@/hooks';

const { Option } = Select;

function PathSelect({ onChange }) {
  const navigate = useNavigate();
  const { appList, removeApp, clearApp, editAppInfo, addApp } = useAppList();

  const toEdit = (id) => () => {
    navigate(`/edit?pageId=${id}`);
  };

  const pageList = useSelector((state) => state.pageListReducer);
  const currentPage = useSelector((state) => state.currentSelectPageReducer);

  const selectPage = (e) => {
    const page = pageList.find((item) => item.id === e);
    if (onChange) {
      navigate(`/edit?pageId=${e}`);
    }
  };

  return (
    <div>
      <Select style={{ width: '100%' }} placeholder='請選擇...' onChange={selectPage}>
        {appList.map((item) => {
          const isCurrent = currentPage === item.id;
          return (
            <Option key={item.id} disabled={isCurrent} value={item.id}>
              {item.name}
              {isCurrent ? '(當前EDM)' : ''}
            </Option>
          );
        })}
      </Select>
    </div>
  );
}

export default PathSelect;
