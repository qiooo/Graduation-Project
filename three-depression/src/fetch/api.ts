import axios from 'axios';
import {
  AllAdminsRequest,
  AllAdminsResponse,
  AllEmpathyQuestionsRequest,
  AllEmpathyQuestionsResponse,
  AllQuestionsResponse,
  AllUsersRequest,
  AllUsersResponse,
  ChangeScenarioRequest,
  ChangeScenarioResponse,
  CreateAdminRequest,
  CreateAdminResponse,
  CreateHistoryRequest,
  CreateHistoryResponse,
  CreateScenarioRequest,
  CreateScenarioResponse,
  CurrentScenarioHistoriesRequest,
  CurrentScenarioHistoriesResponse,
  CurrentScenarioRequest,
  CurrentScenarioResponse,
  CurrentUserResponse,
  CurrentUserScenariosRequest,
  CurrentUserScenariosResponse,
  DeleteAdminRequest,
  DeleteAdminResponse,
  DeleteScenarioRequest,
  DeleteScenarioResponse,
  FinishAllQuestionRequest,
  FinishAllQuestionResponse,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ReleaseEmpathyQuestionsRequest,
  ReleaseEmpathyQuestionsResponse,
  UpdateEmpathyQuestionsRequest,
} from './type';
import { EmpathyQuestion } from '../types/const';

// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:5173',
  timeout: 5000,
});

// 请求拦截器（添加token）
// service.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// 用户相关接口
export const userAPI = {
  login: (data: LoginRequest) => service.post<LoginResponse>('/api/login', data),
  register: (data: RegisterRequest) => service.post<RegisterResponse>('/api/register', data),
  getCurrentUser: () => service.get<CurrentUserResponse>('/api/current_user'),
};

// 副本相关接口
export const scenarioAPI = {
  getCurrentUserScenarios: (params: CurrentUserScenariosRequest) =>
    service.get<CurrentUserScenariosResponse>('/api/scenarios/detail/current_user_scenarios', {
      params,
    }),

  create: (data: CreateScenarioRequest) =>
    service.post<CreateScenarioResponse>('/api/scenarios/edit/create_scenario', data),

  change: (data: ChangeScenarioRequest) =>
    service.post<ChangeScenarioResponse>('/api/scenarios/edit/change_scenario', data),

  delete: (data: DeleteScenarioRequest) =>
    service.post<DeleteScenarioResponse>('/api/scenarios/detail/delete_scenario', data),

  getCurrentScenario: (params: CurrentScenarioRequest) =>
    service.get<CurrentScenarioResponse>('/api/communication/current_scenario', { params }),
};

// 交流相关接口
export const communicationAPI = {
  getCurrentScenario: (params: CurrentScenarioRequest) =>
    service.get<CurrentScenarioResponse>('/api/communication/current_scenario', { params }),

  create: (data: CreateHistoryRequest) =>
    service.post<CreateHistoryResponse>('/api/communication/create_history', data),

  getHistories: (params: CurrentScenarioHistoriesRequest) =>
    service.get<CurrentScenarioHistoriesResponse>('/api/history/current_scenario_histories', {
      params,
    }),
};

// 测评相关接口
export const testAPI = {
  submitTest: (data: FinishAllQuestionRequest) =>
    service.post<FinishAllQuestionResponse>('/api/test/finish_all_question', data),
  getQuestions: () => service.get<AllQuestionsResponse>('/api/test/all_questions'),
  getCurrentUser: () => service.get<CurrentUserResponse>('/api/current_user'),
};

// 管理员接口
export const adminAPI = {
  getAdmins: (params: AllAdminsRequest) =>
    service.get<AllAdminsResponse>('/api/admin/all_admins', { params }),

  createAdmin: (data: CreateAdminRequest) =>
    service.post<CreateAdminResponse>('/api/admin/create_admin', data),

  getUsers: (params: AllUsersRequest) =>
    service.get<AllUsersResponse>('/api/admin/all_users', { params }),

  deleteAdmin: (data: DeleteAdminRequest) =>
    service.post<DeleteAdminResponse>('/api/admin/delete_admin', data),

  getQuestions: (params: AllEmpathyQuestionsRequest) =>
    service.get<AllEmpathyQuestionsResponse>('/api/admin/all_empathy_questions', { params }),

  updateQuestions: (data: UpdateEmpathyQuestionsRequest) =>
    service.post('/api/admin/update_empathy_questions', data),

  releaseQuestions: (data: ReleaseEmpathyQuestionsRequest) =>
    service.post<ReleaseEmpathyQuestionsResponse>('/api/admin/release_empathy_questions', data),
};
