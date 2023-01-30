import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../utils/firebase.js';
import { signOut } from 'firebase/auth';

import { color } from '../../styles/themes';
import Logo from '../../asset/logo.svg';
import LogoutIcon from '../../asset/logout.svg';
import LoginIcon from '../../asset/login.svg';

import '../../styles/header.scss';


const NavbarContainer = styled.div`
  position:relative;
  width:1200px;
  max-width: 1200px;
  margin:0 auto;
  display: grid;
  grid-template-columns: 200px auto;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const DivLogo = styled.a`
    position: relative;
    display: block;
    margin: 0;
    height: 50px;
    width: 150px;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-size: auto 90%;
    background-position: left center;
    cursor: pointer;
    @media (max-width: 768px) {
    }
`;
const NavbarWrp = styled.nav`
    position: relative;
    padding: 5px 0;
    border-bottom: 1px solid ${color.Gray};
    background-color: ${color.white};
    width: 100% ;
    height: 60px;
    margin: 0 auto;
    transition: all .5s ease-in-out;
    @media (max-width: 768px) {
    }
`;


export default function Header() {
    const [stickyNav, setStickyNav] = useState(false);
    const [isLogin, setisLogin] = useState(false);
    const handleScroll = () => {
      window.pageYOffset >= 58 ? setStickyNav(true) : setStickyNav(false)  
    }
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await signOut(auth)
          .then(() => {
            navigate('/');
          })
          .catch((err) => {
            alert(err.message);
          });
      };
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setisLogin(true)
            } else if (!user) {
                setisLogin(false)
            }
          });
        window.addEventListener('scroll', handleScroll);
        return () => window.addEventListener('scroll', handleScroll);
    })

    return (
        <>
        <NavbarWrp className={stickyNav ? 'active': ''}>
          <NavbarContainer>
            <DivLogo href='/' alt='logo'/>
            <ul className="navbar_list">
              <li><a href="#">快速使用</a></li>
              {isLogin ? (
                <>
                <li><a className='btn_logout' onClick={handleSignOut}><img src={LogoutIcon} alt='登出' /> 登出 </a></li>
                </>
              ):(
                <>
                <li><a className='btn_login' href="/login"><img src={LoginIcon} alt='登入' /> 登入／註冊 </a></li>
                </>
              )}
           </ul>        
           </NavbarContainer>
        </NavbarWrp>


        </>
  );
}