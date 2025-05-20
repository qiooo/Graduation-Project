import { Button, Form, Input } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <div className={styles.rootContainer}>
      <div className={styles.contentWrapper}>
        <Form form={form} className={styles.formWrapper} onSubmit={handleSubmit}>
          <h1 className={styles.formTitle}>登录</h1>
          <Form.Item
            label='手机号'
            field='phone'
            required
            rules={[{ required: true, message: '该项为必填，请输入' }]}
          >
            <Input placeholder='请输入手机号' />
          </Form.Item>
          <Form.Item
            label='密码'
            field='password'
            required
            rules={[{ required: true, message: '该项为必填，请输入' }]}
          >
            <Input.Password placeholder='请输入密码' visibilityToggle />
          </Form.Item>
          <Button type='primary' className={styles.formButton} htmlType='submit'>
            登录
          </Button>
        </Form>
        <div className={styles.buttonWrapper}>
          <Button type='text' className={styles.bottomButton} onClick={() => navigate('/')}>
            返回首页
          </Button>
          <Button type='text' className={styles.bottomButton} onClick={() => navigate('/register')}>
            创建账号
          </Button>
        </div>
      </div>
    </div>
  );
};
