import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { projectRoot, siteFiles, siteDirectories } from './site-files.mjs';

const output = path.resolve(projectRoot, 'dist');
// Only the generated dist directory within this project may be replaced.
if (path.dirname(output) !== path.resolve(projectRoot) || path.basename(output) !== 'dist') {
  throw new Error('Invalid build output directory.');
}
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const entry of [...siteFiles, ...siteDirectories]) {
  await cp(path.join(projectRoot, entry), path.join(output, entry), { recursive: true });
}
console.log('Static site built in dist/');
