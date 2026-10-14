import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { projectRoot, isSitePath } from './site-files.mjs';

const root = process.argv.includes('--dist') ? path.join(projectRoot, 'dist') : projectRoot;
const port = Number(process.env.PORT || 3000);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('PORT must be between 1 and 65535.');
const mimeTypes = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.gif': 'image/gif', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.pdf': 'application/pdf'
};

const server = http.createServer(async (request, response) => {
  const respond = (status, message, headers = {}) => {
    response.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8', ...headers });
    response.end(request.method === 'HEAD' ? undefined : message);
  };
  if (!['GET', 'HEAD'].includes(request.method)) return respond(405, 'Method not allowed', { Allow: 'GET, HEAD' });
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  } catch {
    return respond(400, 'Invalid URL');
  }
  if (pathname.includes('\\') || pathname.includes('\0') || pathname.split('/').includes('..')) {
    return respond(400, 'Invalid path');
  }
  const relativePath = pathname === '/' ? 'index.html' : pathname.slice(1);
  const target = path.resolve(root, relativePath);
  const relativeTarget = path.relative(root, target);
  if (relativeTarget.startsWith('..') || path.isAbsolute(relativeTarget) || !isSitePath(relativePath)) {
    return respond(404, 'Not found');
  }
  try {
    if (!(await stat(target)).isFile()) return respond(404, 'Not found');
    const content = await readFile(target);
    response.writeHead(200, {
      'Content-Type': mimeTypes[path.extname(target).toLowerCase()] || 'application/octet-stream',
      'Content-Length': content.length,
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff'
    });
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch (error) {
    if (['ENOENT', 'ENOTDIR'].includes(error.code)) respond(404, 'Not found');
    else {
      console.error('Unable to serve file:', error.message);
      respond(500, 'Internal server error');
    }
  }
});
server.on('error', error => {
  console.error(error.code === 'EADDRINUSE' ? `Port ${port} is in use. Set PORT to another port.` : error.message);
  process.exitCode = 1;
});
server.listen(port, '127.0.0.1', () => {
  console.log(`Local: http://localhost:${port}`);
  console.log(`Serving ${root}\nPress Ctrl+C to stop.`);
});
