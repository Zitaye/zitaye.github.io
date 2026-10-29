import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const indexUrl = new URL('index.html', root);
let html = await readFile(indexUrl, 'utf8');
for (const file of ['style.css', 'magazine.css', 'script.js', 'assets/home.css', 'assets/home.js']) {
  const contents = await readFile(new URL(file, root));
  const version = createHash('sha256').update(contents).digest('hex').slice(0, 12);
  const escaped = file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const reference = new RegExp(`((?:href|src)=["'])${escaped}(?:\\?v=[^"']*)?(["'])`, 'g');
  if (!reference.test(html)) throw new Error(`Missing asset reference: ${file}`);
  html = html.replace(reference, `$1${file}?v=${version}$2`);
}
await writeFile(indexUrl, html);
console.log('Updated content versions for portfolio styles and scripts.');
