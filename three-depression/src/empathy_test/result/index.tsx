import { PageHeader, Result, Button } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import styles from './index.module.css';
import { IconArrowRight } from '@arco-design/web-react/icon';
import { useNavigate } from 'react-router-dom';

export const ResultPage = () => {
  const navigate = useNavigate();

  return (
    <PageHeader
      title='共情能力测评结果'
      backIcon
      onBack={() => navigate('/')}
      className={styles.pageHeader}
    >
      <div className={styles.formWrapper}>
        <Result status='success' title='提交成功' subTitle='你的共情能力测评结果是'>
          <h1 className={styles.empathyScore}>89</h1>
          <Button type='text' className={styles.detailButton} onClick={() => navigate('/test')}>
            重新测评
          </Button>
          <Button type='secondary'>
            关于共情能力科普
            <IconArrowRight />
          </Button>
        </Result>
      </div>
    </PageHeader>
  );
};
