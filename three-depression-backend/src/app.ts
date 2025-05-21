import Fastify from 'fastify'
import routes from './routes'
import fastifyCors from '@fastify/cors'

const fastify = Fastify({
  logger: true
})

// 注册 CORS
fastify.register(fastifyCors, {
  origin: 'http://localhost:5173', // 前端地址
  methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// 注册路由
fastify.register(routes);

// 启动服务器
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' })
    console.log(`Server running at http://localhost:3000`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()