import { cors } from '@elysiajs/cors';
import openapi from '@elysiajs/openapi';
import { Elysia } from 'elysia';

import { AuthsController } from './auth/controller';

const BACKEND_ENDPOINT = process.env.BACKEND_ENDPOINT;

if (!BACKEND_ENDPOINT) {
  throw new Error('BACKEND_PORT environment variable is not set');
}

const BACKEND_PORT = BACKEND_ENDPOINT.split(':').pop();

if (!BACKEND_PORT) {
  throw new Error('Invalid BACKEND_ENDPOINT environment variable');
}

if (!process.env.FRONTEND_ENDPOINT) {
  throw new Error('FRONTEND_ENDPOINT environment variable is not set');
}

console.info('Starting Elysia server...');

const app = new Elysia()
  .get('/', () => 'Hello Elysia')
  .use(
    cors({
      origin: process.env.FRONTEND_ENDPOINT,
    }),
  )
  .use(AuthsController)
  .use(openapi())
  .listen(BACKEND_PORT);

console.info(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
