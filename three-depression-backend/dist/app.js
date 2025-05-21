"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("@fastify/cors"));
const fastify = (0, fastify_1.default)({
    logger: true
});
// 注册 CORS
fastify.register(cors_1.default, {
    origin: 'http://localhost:5173', // 前端地址
    methods: ['GET', 'POST', 'PUT', 'DELETE']
});
// 注册路由
fastify.register(routes_1.default);
// 启动服务器
const start = async () => {
    try {
        await fastify.listen({ port: 3000, host: '0.0.0.0' });
        console.log(`Server running at http://localhost:3000`);
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
