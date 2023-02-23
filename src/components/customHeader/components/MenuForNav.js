import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Menu, Button } from 'antd';
import { HomeTwoTone, DashboardOutlined } from '@ant-design/icons';
const items = [
  {
    label: <Link to='/'>Home</Link>,
    key: 'home',
    icon: <HomeTwoTone />,
  },
  {
    label: <Link to='/dashboard'>控制台</Link>,
    key: 'dashboard',
    icon: <DashboardOutlined />,
  },
];
const MenuForNav = ({ activePage }) => {
  const [current, setCurrent] = useState('home');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items} />;
};
export default MenuForNav;
