import { useEffect, useState } from 'react';
import { db } from '@/utils/firebase';
import { doc, getDoc, collection, onSnapshot, query, where } from 'firebase/firestore';

const useGetLayout = (userId, appId) => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [componentList, setComponentList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, 'users', userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const appData = docSnap.data().appList;
        const filterData = appData.filter((val) => val.appId === appId);
        const componentListJson = JSON.parse(filterData[0].layout);
        setTitle(filterData[0].name);
        setComponentList(componentListJson[0].componentList);
        setLoading(false);
      } else {
        console.log('No such document!');
      }
    };

    getData();
  }, [userId, appId]);

  return { title, componentList, loading };
};

export default useGetLayout;
