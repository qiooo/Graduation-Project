import { Button, Dropdown, Menu, PageHeader, Space } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import styles from './index.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconDown, IconUp } from '@arco-design/web-react/icon';

export const HomePage = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const user = {
    phone: '11122223333',
  };

  const replacePhoneNumber = (phoneNumber: string) => {
    const firstThreeDigits = phoneNumber.slice(0, 3);
    const lastFourDigits = phoneNumber.slice(-4);
    return firstThreeDigits + '****' + lastFourDigits;
  };
  return (
    <PageHeader
      title='基于 Web 3D 的抑郁症患者观察系统'
      className={styles.pageHeader}
      extra={
        <div>
          <Button type='text' className={styles.headerButton} onClick={() => navigate('/admin')}>
            后台管理
          </Button>
          <Button type='text' className={styles.headerButton} onClick={() => navigate('/test')}>
            测评
          </Button>
          {isLogin ? (
            <Dropdown
              position='bl'
              droplist={
                <Menu>
                  <Menu.Item key='1' onClick={() => setIsLogin(false)}>
                    退出登录
                  </Menu.Item>
                </Menu>
              }
            >
              <Button
                type='text'
                className={styles.headerButton}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Space size={4}>
                  {replacePhoneNumber(user.phone)}
                  {isHovered ? <IconDown /> : <IconUp />}
                </Space>
              </Button>
            </Dropdown>
          ) : (
            <Button
              type='text'
              className={styles.headerButton}
              // onClick={() => setIsLogin(true)}
              onClick={() => navigate('/login')}
            >
              登录
            </Button>
          )}
          <Button type='text' className={styles.headerButton} onClick={() => navigate('/register')}>
            注册
          </Button>
        </div>
      }
    >
      <div className={styles.container}>
        <h1>
          Welcome to<br></br>Depression Feeling System
        </h1>
        <div className={styles.buttonWrapper}>
          <Button 
            type='outline'
            className={styles.startButton}
            size='large'
            onClick={() => navigate('/scenarios/detail')}
          >
            Let's start!
          </Button>
        </div>
      </div>
    </PageHeader>
  );
};
