import Elysia, { t } from 'elysia';

export const AuthsController = new Elysia({
  prefix: '/auth',
}).get(
  '/me',
  () => {
    return {
      id: '123',
      name: 'John Doe',
    };
  },
  {
    response: t.Object({
      id: t.String(),
      name: t.String(),
    }),
  },
);
