import { Tabs, Button } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import styles from './index.module.css';
import { IconLeft } from '@arco-design/web-react/icon';
import { AdminSetting } from './admins_setting';
import { QuestionSetting } from './questions_setting';

export const AdminPage = () => {
  return (
    <div className={styles.container}>
      <Button
        shape='round'
        type='text'
        size='large'
        icon={<IconLeft />}
        onClick={() => window.history.back()}
        className={styles.backButton}
      />
      <Tabs defaultActiveTab='tab1' size='large' className={styles.tabsWrapper}>
        <Tabs.TabPane key='tab1' title='管理员管理'>
          <AdminSetting />
        </Tabs.TabPane>
        <Tabs.TabPane key='tab2' title='共情能力测评题目管理'>
          <QuestionSetting />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};
