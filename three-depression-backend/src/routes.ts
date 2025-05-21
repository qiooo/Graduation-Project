import { FastifyInstance } from 'fastify'
import { DepressionLevel, Relationship } from './type'

export default async function (fastify: FastifyInstance) {
  // 登录
  fastify.post('/login', async (request, response) => {
    return { status: 'ok' }
  })

  // 注册
  fastify.post('/register', async (request, response) => {
    return { status: 'ok' }
  })

  // 获取当前用户信息
  fastify.get('/current_user', async (request, response) => {
    return { status: 'ok' }
  })

  // 获取当前用户所有副本信息
  fastify.get('/scenarios/detail/current_user_scenarios', async (request, response) => {
    const mockData = [
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
        // {
        // scenarioId: 3,
        // relationship: Relationship.Sibling,
        // depressionLevel: DepressionLevel.Severe,
        // histories: [],
        // }
    ];
    return response.code(200).send({
        scenarios: mockData,
        code: 'SUCCESS',
        message: '获取用户副本成功',
    });
  })

  // 创建副本
  fastify.post('/scenarios/edit/create_scenario', async (request, response) => {
    
  })

  // 获取当前副本的全部信息
  fastify.get('/communication/current_scenario', async (request, response) => {
    
  })

  // 修改副本
  fastify.post('/scenarios/edit/change_scenario', async (request, response) => {
    
  })

  // 删除副本
  fastify.post('/scenarios/detail/delete_scenario', async (request, response) => {
    
  })

  // 获取当前副本的历史记录
  fastify.get('/history/current_scenario_histories', async (request, response) => {
    return { status: 'ok' }
  })

  // 创建历史记录
  fastify.post('/communication/create_history', async (request, response) => {
    return { status: 'ok' }
  })

  // 提交共情能力测评结果
  fastify.post('/test/finish_all_question', async (request, response) => {
    return { status: 'ok' }
  })

  // 获取当前用户的测评结果，复用获取当前用户信息接口

  // 前台获取所有测评题目
  fastify.get('/test/all_questions', async (request, response) => {
    return { status: 'ok' }
  })

  // 获取所有管理员
  fastify.get('/admin/all_admins', async (request, response) => {
    return { status: 'ok' }
  })

  // 创建管理员
  fastify.post('/admin/create_admin', async (request, response) => {
    return { status: 'ok' }
  })

  // 获取所有非管理员用户
  fastify.get('/admin/all_users', async (request, response) => {
    return { status: 'ok' }
  })

  // 删除管理员
  fastify.post('/admin/delete_admin', async (request, response) => {
    return { status: 'ok' }
  })

  // 后台获取所有测评题目，需要校验管理员身份
  fastify.get('/admin/all_empathy_questions', async (request, response) => {
    return { status: 'ok' }
  })

  // 更新测评题目
   fastify.post('/admin/update_empathy_questions', async (request, response) => {
    return { status: 'ok' }
  })

  // 发布测评题目
   fastify.post('/admin/releasee_empathy_questions', async (request, response) => {
    return { status: 'ok' }
  })
}