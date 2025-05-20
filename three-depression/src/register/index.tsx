import { Button, Form, Input } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  //   const verifyBeforeSubmit = () => {
  //     form.validateFields().then((values) => {
  //       console.log('submit', values);
  //     });
  //   }

  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <div className={styles.rootContainer}>
      <div className={styles.contentWrapper}>
        <Form form={form} className={styles.formWrapper} onSubmit={handleSubmit}>
          <h1 className={styles.formTitle}>注册</h1>
          <Form.Item
            label='手机号'
            field='phone'
            required
            validateTrigger='onBlur'
            rules={[
              { required: true, message: '该项为必填，请输入' },
              { match: /^\d{11}$/, message: '手机号需为 11 位数字，请重新输入' },
            ]}
          >
            <Input placeholder='请输入手机号' />
          </Form.Item>
          <Form.Item
            label='密码'
            field='password'
            required
            validateTrigger='onBlur'
            rules={[
              { required: true, message: '该项为必填，请输入' },
              { match: /^[a-zA-Z0-9]{8,20}$/, message: '密码需为 8-20 位字母数字组合，请重新输入' },
            ]}
          >
            <Input.Password placeholder='请输入密码' visibilityToggle />
          </Form.Item>
          <Button type='primary' className={styles.formButton} htmlType='submit'>
            注册
          </Button>
        </Form>
        <div className={styles.buttonWrapper}>
          <Button type='text' className={styles.bottomButton} onClick={() => navigate('/')}>
            返回首页
          </Button>
          <Button type='text' className={styles.bottomButton} onClick={() => navigate('/login')}>
            已有账号，立即登录
          </Button>
        </div>
      </div>
    </div>
  );
};
