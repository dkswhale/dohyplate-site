// 픽셀 벨트 게임 데이터로 사이트의 art.json을 만든다. 게임 그림·주민·팔레트가 바뀌면 다시 실행한다.
// 실행: pixel-belt 저장소에서 `npx tsx ../dohyplate-site/tools/export-art.mts ../dohyplate-site/art.json`
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
const pb = resolve(process.cwd(), 'src/data');
const { PALETTE, CHAPTERS } = await import(resolve(pb, 'chapters.ts'));
const { RESIDENTS, BELTY_LOOKS } = await import(resolve(pb, 'cosmetics.ts'));
// 첫 화면 장면에 돌아가며 나오는 그림. 장 id → 그림 이름
const PICK: Record<string, string[]> = {
  harbor: ['물고기', '게', '돛단배', '문어', '고래', '등대'],
  fruit: ['사과', '포도', '수박 단면', '딸기', '키위 단면'],
  winter: ['눈사람', '펭귄'],
};
const pictures = CHAPTERS.flatMap((c: any) => c.levels.filter((l: any) => PICK[c.id]?.includes(l.name)).map((l: any) => ({ name: l.name, chapter: c.name, art: l.art })));
const out = { palette: PALETTE, belty: BELTY_LOOKS[0].art, residents: RESIDENTS.map((r: any) => ({ id: r.id, name: r.name, art: r.art })), pictures };
writeFileSync(process.argv[2], JSON.stringify(out));
console.log(`그림 ${pictures.length}개, 주민 ${out.residents.length}명`);
