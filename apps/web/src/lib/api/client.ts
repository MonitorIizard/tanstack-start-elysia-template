import createFetchClient from 'openapi-fetch';
import createClient from 'openapi-react-query';

import type { paths } from './schema';

if (!process.env.BACKEND_ENDPOINT) {
  throw new Error('BACKEND_ENDPOINT environment variable is not set');
}

export const fetchClient = createFetchClient<paths>({
  baseUrl: `${process.env.BACKEND_ENDPOINT}`,
});

export const $api = createClient(fetchClient);
