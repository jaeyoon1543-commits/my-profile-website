import { fileURLToPath } from 'node:url';

export const projectRoot = fileURLToPath(new URL('../', import.meta.url));
export const siteFiles = ['index.html', 'styles.css', 'script.js', 'image-fallback.js'];
export const siteDirectories = ['assets', 'projects'];

export function isSitePath(relativePath) {
  const segments = relativePath.split('/');
  return !segments.some(segment => segment.startsWith('.')) &&
    (siteFiles.includes(relativePath) || siteDirectories.includes(segments[0]));
}
