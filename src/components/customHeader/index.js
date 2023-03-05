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

const Header = styled.header`
  position: relative;
  width: 100%;
  height: 60px;
  line-height: 60px;
  transition: 0.1s all ease;
  &.sticky__header {
    width: 100%;
    height: 60px;
    line-height: 60px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999;
    box-shadow: 3px 3px 8px -3px rgb(255, 146, 107);
    background: #fff;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10px 5px 10px;
    height: 60px;
    line-height: 60px;
  }
`;
const NavWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 6px;
  max-width: 1220px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
const NavList = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 2.7rem;
  margin-bottom: 0;
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 250px;
    height: 100%;
    background: #fff;
    z-index: 99999;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const NavItem = styled.li`
  & > a {
    color: #111;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    &.nav__active {
      color: #ff7c5a;
      font-weight: 700 !important;
    }
  }
  @media (max-width: 768px) {
  }
`;
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
const Navigation = styled.div`
  text-align: right;
  padding: 0;
  line-height: 30px;
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.53);
    z-index: 9999;
    display: none;
    line-height: 4;
    &.active__menu {
      display: block;
    }
  }
`;

const MobileMenu = styled.div`
  font-size: 1.3rem;
  color: #ff7c5a;
  display: none;
  img {
    display: block;
    width: 100%;
  }

  @media (max-width: 768px) {
    display: block;
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
      <Header className='header' ref={headerRef}>
        <NavWrapper className='nav__wrapper'>
          <DivLogo href='/' alt='logo' />
          <Navigation className='navigation' ref={menuRef} onClick={menuToggle}>
            <NavList className='menu'>
              <NavItem>
                <NavLink
                  to='/home'
                  className={(navClass) => (navClass.isActive ? 'nav__active' : '')}
                >
                  首頁
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to='/dashboard'
                  className={(navClass) => (navClass.isActive ? 'nav__active' : '')}
                >
                  控制台
                </NavLink>
              </NavItem>
            </NavList>
          </Navigation>

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
          <MobileMenu className='mobile__menu'>
            <span onClick={menuToggle}>
              <i>
                <img src={HamBurger} />
              </i>
            </span>
          </MobileMenu>
        </NavWrapper>
      </Header>
      <LoginFormModal
        visible={loginFormModalVisible}
        closeModal={() => setLoginFormModalVisible(false)}
      />
    </>
  );
}
