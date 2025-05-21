import { Button, Form, Input, InputNumber, Space } from '@arco-design/web-react';
import { useEffect, useState } from 'react';

import styles from '../index.module.css';
import { IconDelete, IconPlusCircle } from '@arco-design/web-react/icon';
import { EmpathyQuestion } from '../../types/const';

export const QuestionSetting = () => {
  const [form] = Form.useForm();
  const [addButton, setAddButton] = useState<boolean>(true);

  const dataSource: EmpathyQuestion[] = [
    {
      questionId: 1,
      text: 'Question 1',
      isRelease: false,
      options: [
        {
          optionId: 1,
          option: 'Option 1',
          point: 1,
        },
        {
          optionId: 2,
          option: 'Option 2',
          point: 1,
        },
        {
          optionId: 3,
          option: 'Option 3',
          point: 1,
        },
      ],
    },
    {
      questionId: 2,
      text: 'Question 2',
      isRelease: false,
      options: [
        {
          optionId: 4,
          option: 'Option 1',
          point: 1,
        },
        {
          optionId: 5,
          option: 'Option 2',
          point: 1,
        },
        {
          optionId: 6,
          option: 'Option 3',
          point: 1,
        },
      ],
    },
  ];

  useEffect(() => {
    form.setFieldsValue({ questions: dataSource });
  }, []);

  return (
    <div className={styles.contentWrapper}>
      <h1>共情能力测评题目管理</h1>
      {addButton && dataSource.length <= 0 && (
        <Button
          type='text'
          size='large'
          shape='round'
          className={styles.button}
          onClick={() => {
            form.setFieldsValue({
              questions: {
                questionId: Date.now(),
                text: '',
                isRelease: false,
                options: [{ optionId: Date.now(), option: '', point: 0 }],
              },
            });
            setAddButton(false);
          }}
        >
          + 添加题目
        </Button>
      )}
      <Form form={form} layout='vertical' initialValues={{ questions: dataSource }}>
        <Form.List field='questions'>
          {(fields, { add, remove }) => (
            <>
              {fields.map((item, index) => (
                <div key={index} className={styles.questionItem}>
                  <Space>
                    <h3>问题 {index + 1}</h3>
                    <div className={styles.buttonWrapper}>
                      <Button
                        type='text'
                        icon={<IconPlusCircle />}
                        onClick={() => {
                          add(
                            {
                              questionId: Date.now(),
                              text: '',
                              isRelease: false,
                              options: [{ optionId: Date.now(), option: '', point: 0 }],
                            },
                            index + 1,
                          );
                        }}
                      />
                      <Button
                        type='text'
                        icon={<IconDelete />}
                        onClick={() => {
                          remove(index);
                        }}
                      />
                    </div>
                  </Space>
                  <Form.Item
                    label='题目描述'
                    field={`${item.field}.text`}
                    normalize={(value) => value?.trim()}
                    required
                    rules={[
                      {
                        validator(value, message) {
                          if (!value || value?.trim() === '') {
                            return message('该项为必填，请输入');
                          }
                        },
                      },
                    ]}
                  >
                    <Input.TextArea placeholder='请输入题目内容' autoSize={{ minRows: 1 }} />
                  </Form.Item>
                  <Form.Item label='题目选项' labelAlign='left' className={styles.optionForm}>
                    <Form.List
                      field={`${item.field}.options`}
                      rules={[
                        {
                          validator(options, message) {
                            if (!options || options?.length < 2) {
                              return message('选项数量至少为 2');
                            }
                          },
                        },
                      ]}
                    >
                      {(optionsFields, { add, remove }) => (
                        <>
                          {optionsFields.map((option, optionIndex) => (
                            <Space key={optionIndex} className={styles.optionWrapper}>
                              <Form.Item
                                label={`选项 ${optionIndex + 1}`}
                                field={`${option.field}.option`}
                                normalize={(value) => value?.trim()}
                                layout='horizontal'
                                className={styles.optionItem}
                                required
                                rules={[
                                  {
                                    validator(value, message) {
                                      if (!value || value?.trim() === '') {
                                        return message('该项为必填，请输入');
                                      }
                                    },
                                  },
                                ]}
                              >
                                <Input.TextArea
                                  placeholder={`请输入选项 ${optionIndex + 1} 内容`}
                                  autoSize={{ minRows: 1 }}
                                />
                              </Form.Item>
                              <Form.Item
                                label='分值'
                                field={`${option.field}.point`}
                                layout='horizontal'
                                className={styles.pointItem}
                                required
                                rules={[{ required: true, message: '该项为必填，请输入' }]}
                              >
                                <InputNumber
                                  mode='button'
                                  defaultValue={0}
                                  min={0}
                                  max={100}
                                  precision={0}
                                  formatter={(value) => `${value}`.replace(/\D/g, '')}
                                />
                              </Form.Item>
                              <div className={styles.buttonWrapper}>
                                <Button
                                  type='text'
                                  icon={<IconPlusCircle />}
                                  onClick={() =>
                                    add(
                                      { optionId: Date.now(), option: '', point: 0 },
                                      optionIndex + 1,
                                    )
                                  }
                                />
                                <Button
                                  type='text'
                                  icon={<IconDelete />}
                                  onClick={() => remove(optionIndex)}
                                />
                              </div>
                            </Space>
                          ))}
                        </>
                      )}
                    </Form.List>
                  </Form.Item>
                </div>
              ))}
            </>
          )}
        </Form.List>
      </Form>
      <Space size={10}>
        <Button type='primary'>保存</Button>
        <Button type='primary'>发布</Button>
      </Space>
    </div>
  );
};
