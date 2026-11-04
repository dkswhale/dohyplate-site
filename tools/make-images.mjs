// 공유 미리보기 그림과 아이콘을 만든다. 사이트 폴더에서 `python3 -m http.server 8000`을 켠 뒤,
// pixel-belt 저장소에서 실행: `node ../dohyplate-site/tools/make-images.mjs` (pixel-belt의 playwright를 쓴다)
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
const require = createRequire(process.cwd() + '/');
const { chromium } = require('playwright');
const img = fileURLToPath(new URL('../img/', import.meta.url));
const b = await chromium.launch({ channel: 'chrome' });
const p = await b.newPage({ viewport: { width: 1300, height: 1800 }, deviceScaleFactor: 1 });
await p.emulateMedia({ reducedMotion: 'reduce' }); // 장면을 한 순간에 멈춰 찍는다
await p.goto('http://127.0.0.1:8000/tools/og.html');
await p.waitForSelector('body[data-ready]'); await p.waitForTimeout(1500);
await p.locator('#og-home').screenshot({ path: img + 'og.jpg', type: 'jpeg', quality: 86 });
await p.locator('#og-pb').screenshot({ path: img + 'og-pixel-belt.jpg', type: 'jpeg', quality: 86 });
await p.locator('#touch').screenshot({ path: img + 'apple-touch-icon.png' });
await p.locator('#belty').evaluate(c => { c.style.width = c.style.height = '256px'; document.documentElement.style.background = document.body.style.background = 'transparent'; });
await p.locator('#belty').screenshot({ path: img + 'belty.png', omitBackground: true });
await b.close();
console.log('og.jpg, og-pixel-belt.jpg, apple-touch-icon.png, belty.png');
