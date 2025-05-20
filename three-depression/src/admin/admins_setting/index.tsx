import { Button, Drawer, List, Select, Popconfirm, Message } from '@arco-design/web-react';

import styles from '../index.module.css';
import { useState } from 'react';
import { IconDelete } from '@arco-design/web-react/icon';

export const AdminSetting = () => {
  const [manageAdmin, setManageAdmin] = useState<boolean>(false);
  const [deleteAdmin, setDeleteAdmin] = useState<string>('');
  const options = ['15014329752', '13223445566', '18812345678'];
  return (
    <>
      <div className={styles.contentWrapper}>
        <h1>管理员管理</h1>
        <Button
          type='text'
          size='large'
          shape='round'
          className={styles.button}
          onClick={() => {
            setManageAdmin(true);
          }}
        >
          + 管理员
        </Button>
        <List
          header='管理员列表'
          split={false}
          className={styles.listWrapper}
          dataSource={new Array(10).fill('15014329752')}
          render={(item, index) => (
            <List.Item key={index}>
              <div className={styles.listItem}>
                {item}
                <Popconfirm
                  title={`确定删除管理员 ${item} 吗`}
                  onOk={() => {
                    Message.info({
                      content: 'ok',
                    });
                  }}
                  onCancel={() => {
                    Message.error({
                      content: 'cancel',
                    });
                  }}
                >
                  <Button
                    type='text'
                    icon={<IconDelete />}
                    onClick={() => {
                      setDeleteAdmin(item);
                    }}
                  />
                </Popconfirm>
              </div>
            </List.Item>
          )}
        />
      </div>
      <Drawer
        width={500}
        title='添加管理员'
        visible={manageAdmin}
        onOk={() => {
          setManageAdmin(false);
        }}
        onCancel={() => {
          setManageAdmin(false);
        }}
      >
        <Select
          mode='multiple'
          placeholder='选择用户的手机号'
          allowClear
          showSearch
          className={styles.selectWrapper}
          options={options}
        />
      </Drawer>
    </>
  );
};
