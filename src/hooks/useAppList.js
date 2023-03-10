import React, { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { message } from 'antd';

import { db, auth } from '@/utils/firebase';
import { doc, updateDoc, onSnapshot } from 'firebase/firestore';

const _getList = () => {
  const appStorage = localStorage.getItem('appList');
  try {
    if (appStorage) {
      const appList = JSON.parse(appStorage);
      // console.log(appList);
      return appList;
    } else {
      return [];
    }
  } catch (err) {
    localStorage.removeItem('appList');
    return [];
  }
};

function useAppList() {
  const [appList, setAppList] = useState([]);

  useEffect(() => {
    setAppList(_getList());
  }, []);

  const _setAppList = (list) => {
    setAppList(list || []);
    if (list) {
      localStorage.setItem('appList', JSON.stringify(list));
    } else {
      localStorage.removeItem('appList');
    }
  };

  const _checkName = (name) => {
    const list = _getList();
    return list.map((item) => item.name).includes(name);
  };

  const getAppDetail = useCallback((appId) => {
    const list = _getList();
    const app = list.filter((item) => item.appId === appId)[0] || null;

    return app;
  }, []);

  const addApp = useCallback((app) => {
    const list = _getList();
    const appId = uuidv4();
    list.push({
      ...app,
      appId,
    });
    _setAppList(list);
    return appId;
  }, []);

  const editAppInfo = useCallback((app) => {
    const list = _getList();
    const newList = list.map((item) => {
      if (app.appId === item.appId) {
        return {
          ...item,
          name: app.name,
          desc: app.desc,
        };
      }
      return item;
    });
    _setAppList(newList);
    return true;
  }, []);

  const saveAppLayout = useCallback((appId, layout) => {
    const list = _getList();
    const newList = list.map((item) => {
      if (appId === item.appId) {
        return {
          ...item,
          layout,
        };
      }
      return item;
    });
    _setAppList(newList);
    updateDoc(doc(db, 'users', auth.currentUser.uid), { appList: newList });
  }, []);

  const removeApp = useCallback((appId) => {
    const list = _getList();
    const newList = list.filter((item) => {
      return item.appId !== appId;
    });
    _setAppList(newList);
  }, []);

  const clearApp = useCallback(() => {
    _setAppList();
  }, []);

  return {
    appList,
    getAppDetail,
    addApp,
    editAppInfo,
    saveAppLayout,
    removeApp,
    clearApp,
  };
}

export default useAppList;
