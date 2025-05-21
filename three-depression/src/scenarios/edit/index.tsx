import { PageHeader, Form, Radio, Button } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import styles from './index.module.css';

export const EditPage = () => {
  return (
    <PageHeader
      title='编辑副本信息'
      backIcon
      onBack={() => window.history.back()}
      className={styles.pageHeader}
    >
      <Form className={styles.formWrapper} layout='vertical'>
        <Form.Item label='与患者的关系' required>
          <Radio.Group>
            <Radio value='1'>家人</Radio>
            <Radio value='2'>兄弟姐妹</Radio>
            <Radio value='3'>亲戚</Radio>
            <Radio value='4'>好朋友</Radio>
            <Radio value='5'>普通朋友</Radio>
            <Radio value='6'>陌生人</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='患者的抑郁程度' required>
          <Radio.Group>
            <Radio value='1'>轻度</Radio>
            <Radio value='2'>中度</Radio>
            <Radio value='3'>重度</Radio>
            <Radio value='4'>未知</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
      <div className={styles.buttonWrapper}>
        <Button type='primary' className={styles.saveButton}>
          保存
        </Button>
      </div>
    </PageHeader>
  );
};
