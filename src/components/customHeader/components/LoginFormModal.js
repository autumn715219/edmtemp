import React, { useState, useEffect } from 'react';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { ConfigProvider, Modal, Button, Checkbox, Form, Input, message } from 'antd';
import { Space, Typography } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { signUpUser, loginUser, signInWithGoogle } from '@/actions/userAuth';

const { Text, Link } = Typography;

const Content = styled.div`
  margin-top: 30px;
`;

const FormTitle = styled.h2`
  margin: 0 auto 20px;
  font-size: 20px;
  font-weight: bold;
`;

const Or = styled.div`
  text-align: center;
  font-weight: bold;
  color: #cecece;
  border-bottom: 1px solid #cecece;
  line-height: 0.1em;
  margin: 25px 0;
  & > span {
    background: #fff;
    padding: 0 10px;
  }
`;
const LoginWithGoogle = styled.button`
  width: 100%;
  margin: 0 auto;
  transition: all 0.2s ease-in-out;
  padding: 8px 16px 8px 42px;
  border: #cecece 1px solid;
  border-radius: 8px;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;
  cursor: pointer;

  &:hover {
    border-color: #000;
    color: #fff;
    background-color: #000;
  }

  &:active {
    background-color: #eeeeee;
  }

  &:focus {
    outline: none;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25), 0 0 0 3px #c8dafc;
  }

  &:disabled {
    filter: grayscale(100%);
    background-color: #ebebeb;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
`;

function LoginFormModal({ visible, closeModal }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(true);
  const [registerInformation, setRegisterInformation] = useState({
    name: '',
    email: '',
    password: '',
  });
  const theme = {
    token: {
      colorPrimary: '#ff7c5a',
    },
  };
  const _closeModal = () => {
    closeModal();
  };

  const onCancel = () => {
    _closeModal();
  };

  const userLogin = () => {
    if (!email) {
      return message.info('請填入email');
    }
    if (!password) {
      return message.info('請填入密碼');
    }
    dispatch(loginUser(email, password));
    _closeModal();
  };

  const userSignUp = () => {
    dispatch(signUpUser(registerInformation));
    _closeModal();
  };

  const userSignInWithGoogle = () => {
    dispatch(signInWithGoogle());
    _closeModal();
  };

  return (
    <ConfigProvider theme={theme}>
      <Modal
        open={visible}
        onCancel={onCancel}
        onOk={userLogin}
        okText='登入'
        cancelText='取消'
        style={{ textAlign: 'center' }}
        width={450}
        footer={null}
      >
        <Content>
          {isRegistering ? (
            <>
              <Form labelCol={{ span: 5 }}>
                <FormTitle>LOGIN</FormTitle>
                <Form.Item label='Email' style={{ marginBottom: '12px' }} required>
                  <Input
                    prefix={<MailOutlined className='site-form-item-icon' />}
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='aaa@gmail.com'
                  />
                </Form.Item>
                <Form.Item label='Password' style={{ marginBottom: '12px' }}>
                  <Input
                    prefix={<LockOutlined className='site-form-item-icon' />}
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='******'
                  />
                </Form.Item>
                <Form.Item style={{ marginBottom: '12px' }}>
                  還沒有帳號？<Link onClick={() => setIsRegistering(false)}>立即註冊</Link>
                </Form.Item>
                <Button key='submit' type='primary' onClick={userLogin} style={{ width: '100%' }}>
                  登入
                </Button>
              </Form>
            </>
          ) : (
            <>
              <Form labelCol={{ span: 5 }}>
                <FormTitle>REGISTER</FormTitle>
                <Form.Item label='Name' style={{ marginBottom: '12px' }} required>
                  <Input
                    prefix={<UserOutlined className='site-form-item-icon' />}
                    type='text'
                    value={registerInformation.userName}
                    onChange={(e) =>
                      setRegisterInformation({
                        ...registerInformation,
                        name: e.target.value,
                      })
                    }
                    placeholder='UserName'
                  />
                </Form.Item>
                <Form.Item label='Email' style={{ marginBottom: '12px' }} required>
                  <Input
                    prefix={<MailOutlined className='site-form-item-icon' />}
                    type='email'
                    value={registerInformation.email}
                    onChange={(e) =>
                      setRegisterInformation({
                        ...registerInformation,
                        email: e.target.value,
                      })
                    }
                    placeholder='oooooo@gmail.com'
                  />
                </Form.Item>
                <Form.Item label='Password' style={{ marginBottom: '12px' }} required>
                  <Input
                    prefix={<LockOutlined className='site-form-item-icon' />}
                    type='password'
                    value={registerInformation.password}
                    onChange={(e) =>
                      setRegisterInformation({
                        ...registerInformation,
                        password: e.target.value,
                      })
                    }
                    placeholder='******'
                  />
                </Form.Item>
                <Form.Item style={{ marginBottom: '12px' }}>
                  已經有帳號？<Link onClick={() => setIsRegistering(true)}>立即登入</Link>
                </Form.Item>
                <Button key='submit' type='primary' onClick={userSignUp} style={{ width: '100%' }}>
                  註冊
                </Button>
              </Form>
            </>
          )}
          <Or>
            <span>or</span>
          </Or>
          <LoginWithGoogle
            type='button'
            className='login-with-google-btn'
            onClick={userSignInWithGoogle}
          >
            連結 Google 帳戶登入
          </LoginWithGoogle>
        </Content>
      </Modal>
    </ConfigProvider>
  );
}

export default LoginFormModal;
