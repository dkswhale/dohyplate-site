// 네모로직 격자. data-art(줄마다 한 줄, 칸마다 글자 하나)로 그림을 받아 힌트 숫자를 계산하고 격자를 그린다.
// '.'은 빈 칸(X 표시), 글자는 PAL의 색이다. data-reveal(0~1)이 있으면 그만큼만 칸을 보여 준다(아직 푸는 중인 그림).
// 장식이다(aria-hidden). 스크립트가 없으면 빈 상자만 남고 내용은 그대로 읽힌다.
const PAL = {
  Y: ['var(--fill-y)', 'var(--text-y)'],
  N: ['var(--ink)', 'var(--ink)'],
  // 게임 그림(벨티)은 어두운 화면에서도 게임 팔레트 그대로 둔다
  D: ['#2a2f45', 'var(--ink)'],
  W: ['#e4e8f0', 'var(--muted)'],
  B: ['#3e63dd', 'var(--text-b)'],
  K: ['#9a6b43', 'var(--text-k)'],
};

/** 한 줄의 힌트: 같은 색이 이어진 구간마다 길이 하나. 색이 바뀌면 구간이 나뉜다 */
function clues(line) {
  const out = [];
  let prev = '.';
  for (const ch of line) {
    if (ch !== '.' && ch === prev) out.at(-1).len++;
    else if (ch !== '.') out.push({ ch, len: 1 });
    prev = ch;
  }
  return out;
}

/** 칸마다 같은 값이 나오는 0~1 난수. 새로고침해도 같은 칸이 보인다 */
const hash = (r, c) => ((Math.sin(r * 127.1 + c * 311.7) * 43758.5453) % 1 + 1) % 1;

const clueHtml = (list) =>
  list.length ? list.map((x) => `<b style="color:${PAL[x.ch][1]}">${x.len}</b>`).join('') : '<b>0</b>';

for (const el of document.querySelectorAll('[data-art]')) {
  const art = el.dataset.art.trim().split(/\s+/);
  const rows = art.length;
  const cols = art[0].length;
  const reveal = el.dataset.reveal ? Number(el.dataset.reveal) : 1;
  const colLines = [...Array(cols)].map((_, c) => art.map((row) => row[c]).join(''));
  let cells = '';
  art.forEach((row, r) =>
    [...row].forEach((ch, c) => {
      const edge = `${(c + 1) % 5 === 0 && c < cols - 1 ? ' r5' : ''}${(r + 1) % 5 === 0 && r < rows - 1 ? ' b5' : ''}`;
      const delay = `--d:${(r + c) * 28}ms`;
      if (hash(r, c) >= reveal) cells += `<i class="u${edge}"></i>`;
      else if (ch === '.') cells += `<i class="x${edge}" style="${delay}"></i>`;
      else cells += `<i class="f${edge}" style="--c:${PAL[ch][0]};${delay}"></i>`;
    }),
  );
  el.style.setProperty('--cols', cols);
  el.style.setProperty('--rows', rows);
  el.innerHTML =
    `<div class="pz-corner">${rows}×${cols}</div>` +
    `<div class="pz-top">${colLines.map((l) => `<span>${clueHtml(clues(l))}</span>`).join('')}</div>` +
    `<div class="pz-left">${art.map((l) => `<span>${clueHtml(clues(l))}</span>`).join('')}</div>` +
    `<div class="pz-cells">${cells}</div>`;
  el.classList.add('ready');
}

// 격자가 화면에 들어올 때 칠하기 시작한다. 휴대폰에서는 격자가 첫 화면 아래에 있어서 불러오자마자 칠하면 아무도 못 본다
const motion = matchMedia('(prefers-reduced-motion: no-preference)').matches;
if (motion && 'IntersectionObserver' in window) {
  const seen = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.replace('wait', 'play');
      seen.unobserve(e.target);
    }
  }, { threshold: 0.35 });
  for (const el of document.querySelectorAll('.puzzle.ready')) {
    el.classList.add('wait');
    seen.observe(el);
  }
}
