import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

// redux
import useUserAuth from '@/hooks/useUserAuth';
import { useDispatch } from 'react-redux';
import { loginUser, logoutUser } from '@/actions/userAuth';

// ANTD UI
import { Button } from 'antd';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import Logo from '@/asset/logo.svg';
import HamBurger from '@/asset/hamburger.png';
import LoginFormModal from './components/LoginFormModal';
import '@/styles/header.scss';

const DivLogo = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin: 0;
  height: 46px;
  width: 150px;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: left center;
  cursor: pointer;
  @media (max-width: 768px) {
    width: calc(100% - 180px);
  }
`;
const NavRight = styled.nav`
  text-align: right;
  padding: 0;
  line-height: 30px;
  @media (max-width: 768px) {
  }
`;
const NavItem = styled.div`
  margin: 0 10px;
  display: inline-block;
  cursor: pointer;
  color: #fff;
  background-color: #000;
  @media (max-width: 768px) {
  }
`;

export default function CustomHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useUserAuth();
  const [loginFormModalVisible, setLoginFormModalVisible] = useState(false);

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleSignOut = () => {
    dispatch(logoutUser());
  };

  const handleLogin = () => {
    setLoginFormModalVisible(true);
  };
  const menuToggle = () => menuRef.current.classList.toggle('active__menu');

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  });

  return (
    <>
      <header className='header' ref={headerRef}>
        <div className='nav__wrapper'>
          <DivLogo href='/' alt='logo' />
          <div className='navigation' ref={menuRef} onClick={menuToggle}>
            <ul className='menu'>
              <li className='nav__item '>
                <NavLink
                  to='/home'
                  className={(navClass) => (navClass.isActive ? 'nav__active' : '')}
                >
                  首頁
                </NavLink>
              </li>
              <li className='nav__item'>
                <NavLink
                  to='/dashboard'
                  className={(navClass) => (navClass.isActive ? 'nav__active' : '')}
                >
                  控制台
                </NavLink>
              </li>
            </ul>
          </div>

          {currentUser ? (
            <>
              <Button
                type='primary'
                icon={<LogoutOutlined />}
                style={{ marginRight: '10px' }}
                onClick={handleSignOut}
              >
                {' '}
                登出
              </Button>
            </>
          ) : (
            <>
              <Button
                type='primary'
                icon={<LoginOutlined />}
                style={{ marginRight: '10px' }}
                onClick={handleLogin}
              >
                {' '}
                登入／註冊
              </Button>
            </>
          )}
          <div className='mobile__menu'>
            <span onClick={menuToggle}>
              <i>
                <img src={HamBurger} />
              </i>
            </span>
          </div>
        </div>
      </header>
      <LoginFormModal
        visible={loginFormModalVisible}
        closeModal={() => setLoginFormModalVisible(false)}
      />
    </>
  );
}
