import { Admin, EmpathyQuestion, Scenarios, User, Option, History } from '../types/const';

// 注册
export interface RegisterRequest {
  phoneNumber: string;
  password: string;
}

export interface RegisterResponse {
  code: string;
  message: string;
}

// 登录
export interface LoginRequest {
  phoneNumber: string;
  password: string;
}

export interface LoginResponse {
  code: string;
  message: string;
  userId: number;
  // accessToken: string;
  // refreshToken: string;
}

// 获取当前用户信息
export interface CurrentUserRequest {
  userId: number;
}

export interface CurrentUserResponse {
  userId: number;
  phoneNumber: string;
  empathy?: number;
  code: string;
  message: string;
}

// 获取当前用户的所有副本
export interface CurrentUserScenariosRequest {
  userId: number;
}

export interface CurrentUserScenariosResponse {
  scenarios: Scenarios[];
  code: string;
  message: string;
}

// 创建副本
export interface CreateScenarioRequest {
  userId: number;
  relationship: string;
  depressionLevel: string;
}

export interface CreateScenarioResponse {
  scenarioId: number;
  code: string;
  message: string;
}

// 获取当前副本的全部信息
export interface CurrentScenarioRequest {
  scenarioId: number;
}

export interface CurrentScenarioResponse {
  scenario: Omit<Scenarios, 'histories'>;
  code: string;
  message: string;
}

// 修改副本信息
export interface ChangeScenarioRequest {
  scenarioId: number;
  relationship: string;
  depressionLevel: string;
}

export interface ChangeScenarioResponse {
  code: string;
  message: string;
}

// 删除副本
export interface DeleteScenarioRequest {
  scenarioId: number;
}

export interface DeleteScenarioResponse {
  code: string;
  message: string;
}

// 获取当前副本的历史记录
export interface CurrentScenarioHistoriesRequest {
  scenarioId: number;
}

export interface CurrentScenarioHistoriesResponse {
  histories: History[];
  code: string;
  message: string;
}

// 创建历史记录
export interface CreateHistoryRequest {
  scenarioId: number;
  time: Date;
  words?: string;
  behavior?: string;
  empathy?: number;
  relationship: string;
  depressionLevel: string;
}

export interface CreateHistoryResponse {
  historyId: number;
  harmScore: number;
  code: string;
  message: string;
}

// 提交测评
export interface FinishAllQuestionRequest {
  userId: number;
  options: Option[];
}

export interface FinishAllQuestionResponse {
  empathy: number;
  code: string;
  message: string;
}

// 前台获取所有测评题目
// request 空
export interface AllQuestionsResponse {
  questions: EmpathyQuestion[];
  code: string;
  message: string;
}

// 后台获取所有管理员
export interface AllAdminsRequest {
  userId: number;
}

export interface AllAdminsResponse {
  admins: Admin[];
  code: string;
  message: string;
}

// 创建管理员
export interface CreateAdminRequest {
  userId: number;
}

export interface CreateAdminResponse {
  adminId: number;
  code: string;
  message: string;
}

// 获取所有非管理员用户
export interface AllUsersRequest {
  userId: number;
}

export interface AllUsersResponse {
  users: User[];
  code: string;
  message: string;
}

// 删除管理员
export interface DeleteAdminRequest {
  userId: number;
  adminId: number;
}

export interface DeleteAdminResponse {
  code: string;
  message: string;
}

// 后台获取所有测评题目
export interface AllEmpathyQuestionsRequest {
  userId: number;
}

export interface AllEmpathyQuestionsResponse {
  questions: EmpathyQuestion[];
  code: string;
  message: string;
}

// 更新测评题目
export interface UpdateEmpathyQuestionsRequest {
  userId: number;
  empathyQuestions: EmpathyQuestion[];
}

export interface UpdateEmpathyQuestionsResponse {
  code: string;
  message: string;
}

// 发布测评题目
export interface ReleaseEmpathyQuestionsRequest {
  userId: number;
}

export interface ReleaseEmpathyQuestionsResponse {
  code: string;
  message: string;
}
