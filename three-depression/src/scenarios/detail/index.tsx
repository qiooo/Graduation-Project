import { Button, Tooltip } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import styles from './index.module.css';
import { IconClose, IconLeft } from '@arco-design/web-react/icon';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DepressionLevel, Relationship, Scenarios } from '../../types/const';

enum RelationshipI18n {
  parent = '父母',
  sibling = '兄弟姐妹',
  relative = '亲戚',
  good_friend = '好朋友',
  normal_friend = '普通朋友',
  known = '认识的人',
  stranger = '陌生人',
}

enum DepressionLevelI18n {
  mild = '轻度',
  moderate = '中度',
  severe = '重度',
  unknown = '未知',
}

export const DetailPage = () => {
    const navigate = useNavigate();
    const [scenarios, setScenarios] = useState<Scenarios[]>([]);

    const screnariosData: Scenarios[] = [
        {
            scenarioId: 1,
            relationship: Relationship.GoodFriend,
            depressionLevel: DepressionLevel.Mild,
            histories: [],
        },
        {
            scenarioId: 2,
            relationship: Relationship.Parent,
            depressionLevel: DepressionLevel.Moderate,
            histories: [],
        },
        {
            scenarioId: 3,
            relationship: Relationship.Sibling,
            depressionLevel: DepressionLevel.Severe,
            histories: [],
        },
    ];

    useEffect(() => {
        setScenarios(screnariosData);
    }, []);

    const renderScenario = (index: number) => (
        <>
            <Button
                shape='circle'
                size='large'
                type='primary'
                icon={<IconClose />}
                className={styles.deleteButton}
                onClick={() => {
                    console.log('delete', index);
                }}
            />
            <Tooltip
                content={
                    <div>
                        <div>与患者的关系：{RelationshipI18n[scenarios[index].relationship]}</div>
                        <div>患者的抑郁程度：{DepressionLevelI18n[scenarios[index].depressionLevel]}</div>
                    </div>
                }
            >
                <Button className={styles.scenariosNum} onClick={() => navigate('/communication')}>{index+1}</Button>
            </Tooltip>
        </>
    );

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
            <h1 className={styles.title}>副本详情</h1>
            <div className={styles.scenariosWrapper}>
                {scenarios[0] && <div className={styles.first}>
                    {renderScenario(0)}
                </div>}
                {scenarios[1] && <div className={styles.second}>
                    {renderScenario(1)}
                </div>}
                {scenarios[2] && <div className={styles.third}>
                    {renderScenario(2)}
                </div>}
                <Tooltip content='副本数量最多有三个' disabled={scenarios?.length !== 3}>
                    <Button
                        type='text'
                        disabled={scenarios?.length === 3}
                        className={styles.createButton}
                    >
                        创建副本
                    </Button>
                </Tooltip>
            </div>
        </div>
    );
};
