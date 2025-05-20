import { PageHeader, Table, TableColumnProps } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import styles from './index.module.css';

export const HistoryPage = () => {
  const columns: TableColumnProps = [
    {
      title: '时间',
      dataIndex: 'time',
    },
    {
      title: '语言',
      dataIndex: 'input',
    },
    {
      title: '行为',
      dataIndex: 'behavior',
    },
    {
      title: '关系',
      dataIndex: 'relation',
      sorter: (a, b) => a.relation.length - b.relation.length,
    },
    {
      title: '抑郁程度',
      dataIndex: 'depressionLevel',
      sorter: (a, b) => a.depressionLevel.length - b.depressionLevel.length,
    },
    {
      title: '共情能力',
      dataIndex: 'empathy',
      sorter: (a, b) => a.empathy - b.empathy,
    },
    {
      title: '受伤害程度',
      dataIndex: 'harmScore',
      sorter: (a, b) => a.harmScore - b.harmScore,
    },
  ];
  const data = [
    {
      key: 1,
      time: '2023-07-24 10:00:00',
      input: '你好',
      relation: '朋友',
      depressionLevel: '轻度',
      empathy: 88,
      harmScore: 0,
    },
    {
      key: 2,
      time: '2023-07-25 10:00:00',
      input: '你真差劲',
      relation: '好朋友',
      depressionLevel: '轻度',
      empathy: 40,
      harmScore: 7,
    },
  ];
  return (
    <PageHeader
      title='历史交流记录'
      backIcon
      onBack={() => window.history.back()}
      className={styles.pageHeader}
    >
      <Table columns={columns} data={data} pagination={true} className={styles.table}></Table>
    </PageHeader>
  );
};
