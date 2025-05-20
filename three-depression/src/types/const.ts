export interface User {
  userId: number; // 用户 id
  empathy?: number; // 共情能力评分
  phoneNumber: string; // 手机号
  password: string; // 密码
}

enum AdminRole {
  SuperAdmin = 'super_admin', // 超级管理员
  NormalAdmin = 'normal_admin', // 普通管理员
}

export interface Admin extends User {
  adminId: number; // 管理员 id
  adminRole: AdminRole; // 管理员角色
}

export enum Relationship {
  Parent = 'parent', // 父母
  Sibling = 'sibling', // 兄弟姐妹
  Relative = 'relative', // 亲戚
  GoodFriend = 'good_friend', // 好朋友
  NormalFriend = 'normal_friend', // 普通朋友
  Known = 'known', // 认识的人
  Stranger = 'stranger', // 陌生人
}

export enum DepressionLevel {
  Mild = 'mild', // 轻度
  Moderate = 'moderate', // 中度
  Severe = 'severe', // 重度
  Unknown = 'unknown', // 未知
}

export interface Scenarios {
  scenarioId: number; // 副本 id
  relationship: Relationship; // 用户与患者的关系
  depressionLevel: DepressionLevel; // 患者的抑郁程度
  histories: History[]; // 副本的交流历史记录
}

enum Behavior {
  Embrace = 'embrace', // 拥抱
  Evade = 'evade', // 回避
  Excessive = 'excessive', // 过度
}

export interface History extends Omit<Scenarios, 'scenarioId' & 'histories'> {
  historyId: number; // 历史记录 id
  time: Date; // 时间
  words?: string; // 语言
  behavior?: Behavior; // 行为
  empathy?: number; // 共情能力
  inputScore: number; // 语言/行为的情感分数
  harmScore: number; // 受伤害程度
}

export interface EmpathyQuestion {
  questionId: number; // 题目 id
  text: string; // 题目描述
  isRelease: boolean; // 发布情况
  options: Option[]; // 选项
}

export interface Option {
  optionId: number; // 选项 id
  option: string; // 选项描述
  point: number; // 选项分值
}
