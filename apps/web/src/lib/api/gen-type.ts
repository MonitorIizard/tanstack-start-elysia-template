import openapiTS, { astToString } from 'openapi-typescript';

if (!process.env.BACKEND_ENDPOINT) {
  throw new Error('BACKEND_ENDPOINT environment variable is not set');
}

const ast = await openapiTS(
  new URL(`${process.env.BACKEND_ENDPOINT}/openapi/json`, import.meta.url),
);
const contents = astToString(ast);

console.info('Generated TypeScript types from OpenAPI schema; 🙏💀😭');

// (optional) write to file
Bun.write('./src/lib/api/schema.d.ts', contents);
