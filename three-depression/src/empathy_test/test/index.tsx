import { PageHeader, Form, Radio, Button } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';

interface Option {
  optionId: number;
  option: string;
}

interface EmpathyQuestion {
  questionId: number;
  text: string;
  isRelease: boolean;
  options: Option[];
}

export const TestPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const questions: EmpathyQuestion[] = [
    {
      questionId: 1,
      text: '你最近遇到过什么困难或挑战吗？',
      isRelease: true,
      options: [
        {
          optionId: 1,
          option: '我最近遇到了一个朋友的生日，他对我非常重要，我无法忘记他。',
        },
        {
          optionId: 2,
          option: '我最近遇到了一个朋友的生日，他对我非常重要，我无法忘记他。',
        },
        {
          optionId: 3,
          option: '我最近遇到了一个朋友的生日，他对我非常重要，我无法忘记他。',
        },
      ],
    },
    {
      questionId: 2,
      text: '你最近遇到过什么困难或挑战吗？',
      isRelease: true,
      options: [
        {
          optionId: 1,
          option: '我最近遇到了一个朋友的生日，他对我非常重要，我无法忘记他。',
        },
        {
          optionId: 2,
          option: '我最近遇到了一个朋友的生日，他对我非常重要，我无法忘记他。',
        },
        {
          optionId: 3,
          option: '我最近遇到了一个朋友的生日，他对我非常重要，我无法忘记他。',
        },
      ],
    },
    {
      questionId: 3,
      text: '你最近遇到过什么困难或挑战吗？',
      isRelease: true,
      options: [
        {
          optionId: 1,
          option: '我最近遇到了一个朋友的生日，他对我非常重要，我无法忘记他。',
        },
        {
          optionId: 2,
          option: '我最近遇到了一个朋友的生日，他对我非常重要，我无法忘记他。',
        },
        {
          optionId: 3,
          option: '我最近遇到了一个朋友的生日，他对我非常重要，我无法忘记他。',
        },
      ],
    },
    {
      questionId: 4,
      text: '你最近遇到过什么困难或挑战吗？',
      isRelease: true,
      options: [
        {
          optionId: 1,
          option: '我最近遇到了一个朋友的生日，他对我非常重要，我无法忘记他。',
        },
        {
          optionId: 2,
          option: '我最近遇到了一个朋友的生日，他对我非常重要，我无法忘记他。',
        },
        {
          optionId: 3,
          option: '我最近遇到了一个朋友的生日，他对我非常重要，我无法忘记他。',
        },
      ],
    },
  ];

  const handleSubmit = () => {
    console.log('Submit');
  };
  return (
    <PageHeader
      title='共情能力测评'
      backIcon
      onBack={() => window.history.back()}
      className={styles.pageHeader}
    >
      <div className={styles.formWrapper}>
        <Form form={form} onSubmit={handleSubmit} layout='vertical' className={styles.form}>
          {questions.map((question) => {
            return (
              <Form.Item
                label={question.text}
                field={question.questionId.toString()}
                required
                rules={[{ required: true, message: '该项为必填，请输入' }]}
              >
                <Radio.Group direction='vertical'>
                  {question.options.map((option) => {
                    return (
                      <Radio key={option.optionId} value={option.optionId}>
                        {option.option}
                      </Radio>
                    );
                  })}
                </Radio.Group>
              </Form.Item>
            );
          })}
          <div className={styles.buttonWrapper}>
            <Button
              shape='round'
              type='primary'
              className={styles.finishButton}
              htmlType='submit'
              onClick={() => navigate('/result')}
            >
              完成
            </Button>
          </div>
        </Form>
      </div>
    </PageHeader>
  );
};
