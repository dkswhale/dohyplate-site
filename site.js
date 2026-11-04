// 픽셀 벨트 장면. 그림·주민·벨티·팔레트는 게임 데이터(art.json)를 쓰고, 큐브·캐릭터 그리는 법은 게임 코드(src/ui/render.ts, sprites.ts)를 옮겼다.
// [data-scene]: 벨트가 그림판을 돌고 주민이 같은 색 큐브를 지우는 장면. [data-parade]: 주민 행렬 띠. [data-residents]: 주민 목록.
(async () => {
  const hosts = document.querySelectorAll('[data-scene], [data-parade], [data-residents]');
  if (!hosts.length) return;
  const art = await fetch('/art.json').then(r => r.json());
  const P = art.palette;
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const BODY = ['R', 'O', 'Y', 'G', 'B', 'L', 'P', 'M', 'K'];

  function darken(hex, k) {
    const v = parseInt(hex.slice(1), 16);
    const f = x => Math.round(x * (1 - k));
    return `rgb(${f(v >> 16 & 255)},${f(v >> 8 & 255)},${f(v & 255)})`;
  }

  // 8×8 틀을 한 색으로 칠한 캔버스. 'C' 몸, 'c' 몸 어두운 색, 나머지는 팔레트 글자
  const spriteCache = new Map();
  function sprite(frame, color) {
    const key = frame.join('') + color;
    if (spriteCache.has(key)) return spriteCache.get(key);
    const s = 6, cv = document.createElement('canvas');
    cv.width = cv.height = 8 * s;
    const ctx = cv.getContext('2d');
    frame.forEach((row, y) => [...row].forEach((ch, x) => {
      if (ch === '.') return;
      ctx.fillStyle = ch === 'C' ? P[color] : ch === 'c' ? darken(P[color], 0.3) : P[ch];
      ctx.fillRect(x * s, y * s, s, s);
    }));
    spriteCache.set(key, cv);
    return cv;
  }

  // 주민 행렬 띠와 주민 목록
  document.querySelectorAll('[data-parade]').forEach(el => {
    const track = document.createElement('div');
    track.className = 'parade-track';
    const items = art.residents.map((r, i) => {
      const img = new Image();
      img.src = sprite(r.art, BODY[i % BODY.length]).toDataURL();
      img.alt = '';
      return img;
    });
    items.concat(items.map(i => i.cloneNode())).forEach(i => track.append(i));
    el.append(track);
  });
  document.querySelectorAll('[data-residents]').forEach(el => {
    art.residents.forEach((r, i) => {
      const li = document.createElement('li');
      const img = new Image();
      img.src = sprite(r.art, BODY[i % BODY.length]).toDataURL();
      img.alt = '';
      li.append(img, r.name);
      el.append(li);
    });
  });

  // 광택 큐브. render.ts drawCube와 같은 비율
  function cube(ctx, x, y, w, color, alpha = 1) {
    ctx.globalAlpha = alpha;
    ctx.beginPath(); ctx.roundRect(x, y, w, w, w * 0.2);
    ctx.fillStyle = P[color]; ctx.fill();
    ctx.lineWidth = 1; ctx.strokeStyle = 'rgba(0,0,0,0.16)'; ctx.stroke();
    ctx.beginPath(); ctx.roundRect(x + w * 0.16, y + w * 0.12, w * 0.68, w * 0.15, w * 0.08);
    ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.fill();
    ctx.beginPath(); ctx.roundRect(x + w * 0.08, y + w * 0.78, w * 0.84, w * 0.16, w * 0.08);
    ctx.fillStyle = 'rgba(0,0,0,0.14)'; ctx.fill();
    ctx.globalAlpha = 1;
  }

  document.querySelectorAll('[data-scene]').forEach(canvas => scene(canvas, +canvas.dataset.scene || 0));

  function scene(canvas, startPic) {
    const ctx = canvas.getContext('2d');
    const TICK = 130; // 게임의 한 칸 이동 시간(ms)
    let pic = startPic, grid, n, queue, riders, pops, phase, phaseAt, spawnAt, W, cs, ox;
    let last = 0, visible = true;

    function load() {
      const a = art.pictures[pic % art.pictures.length].art;
      n = a.length;
      grid = a.map(row => [...row].map(ch => (ch === '.' ? null : ch.toUpperCase())));
      // 색마다 큐브 수를 탄 6~10발씩 나눠 대기열을 만든다(총 탄 = 큐브 수)
      const count = {};
      grid.flat().forEach(c => c && (count[c] = (count[c] || 0) + 1));
      queue = [];
      Object.entries(count).forEach(([c, k]) => { while (k > 0) { const a = Math.min(k, 6 + (k % 5)); queue.push({ c, ammo: a }); k -= a; } });
      queue.sort(() => Math.random() - 0.5);
      riders = []; pops = []; phase = 'play'; spawnAt = 0;
    }

    function size() {
      const css = canvas.clientWidth;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      canvas.width = canvas.height = Math.round(css * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      W = css; cs = W / (n + 4.4); ox = 2.2 * cs;
    }

    // 벨트 위치(칸 단위, 0 = 왼쪽 위에서 시계 방향) → 화면 좌표와 쏘는 줄
    function at(t) {
      const L = n + 2, s = Math.floor(t / L) % 4, k = t % L;
      const a = ox - cs, b = ox + n * cs + cs; // 벨트 중심선
      const u = a + k * cs;
      if (s === 0) return { x: u, y: a, side: 0, i: Math.floor(k) - 1 };
      if (s === 1) return { x: b, y: u, side: 1, i: Math.floor(k) - 1 };
      if (s === 2) return { x: b - k * cs, y: b, side: 2, i: n - Math.floor(k) };
      return { x: a, y: b - k * cs, side: 3, i: n - Math.floor(k) };
    }

    // 그 줄에서 가장 바깥 큐브
    function target(side, i) {
      if (i < 0 || i >= n) return null;
      for (let d = 0; d < n; d++) {
        const [r, c] = side === 0 ? [d, i] : side === 1 ? [i, n - 1 - d] : side === 2 ? [n - 1 - d, i] : [i, d];
        if (grid[r][c]) return [r, c];
      }
      return null;
    }

    function step(now, dt) {
      if (phase === 'done') { if (now - phaseAt > 1900) { pic++; load(); size(); } return; }
      if (riders.length < 3 && queue.length && now > spawnAt) {
        const q = queue.shift();
        riders.push({ ...q, t: 0, lastCell: -1, frame: art.residents[Math.floor(Math.random() * art.residents.length)].art });
        spawnAt = now + 520;
      }
      const lap = 4 * (n + 2);
      riders.forEach(r => {
        r.t += dt / TICK;
        const cell = Math.floor(r.t);
        if (cell !== r.lastCell) {
          r.lastCell = cell;
          const p = at(cell + 0.5), hit = target(p.side, p.i);
          if (hit && grid[hit[0]][hit[1]] === r.c && r.ammo > 0) {
            grid[hit[0]][hit[1]] = null; r.ammo--;
            pops.push({ r: hit[0], c: hit[1], color: r.c, at: now, from: p });
          }
        }
      });
      // 탄을 다 쓰면 떠나고, 한 바퀴를 돌고도 남으면 대기열 뒤로 돌아간다(게임의 대기 슬롯)
      riders = riders.filter(r => {
        if (r.ammo === 0) return false;
        if (r.t >= lap) { queue.push({ c: r.c, ammo: r.ammo }); return false; }
        return true;
      });
      pops = pops.filter(p => now - p.at < 380);
      if (!grid.flat().some(Boolean) && !pops.length) { phase = 'done'; phaseAt = now; }
    }

    function draw(now) {
      ctx.clearRect(0, 0, W, W);
      const a = ox - cs, side = n * cs + 2 * cs;
      // 벨트: 남색 띠와 움직이는 점선(게임과 같은 굵기 비율)
      ctx.beginPath(); ctx.roundRect(a, a, side, side, cs * 0.9);
      ctx.lineWidth = cs * 1.15; ctx.strokeStyle = '#2B3244'; ctx.stroke();
      ctx.setLineDash([cs * 0.32, cs * 0.68]); ctx.lineDashOffset = still ? 0 : -(now / TICK) * cs;
      ctx.lineWidth = cs * 0.7; ctx.strokeStyle = '#59657F'; ctx.lineCap = 'round'; ctx.stroke();
      ctx.setLineDash([]); ctx.lineCap = 'butt';
      // 그림판
      ctx.beginPath(); ctx.roundRect(ox - cs * 0.35, ox - cs * 0.35, n * cs + cs * 0.7, n * cs + cs * 0.7, cs * 0.5);
      ctx.fillStyle = 'rgba(255,255,255,0.86)'; ctx.fill();
      const pad = cs * 0.06;
      if (phase === 'done') {
        // 완성: 그림이 납작한 픽셀로 돌아온다
        const k = Math.min(1, (now - phaseAt) / 420);
        const src = art.pictures[pic % art.pictures.length].art;
        ctx.globalAlpha = k;
        src.forEach((row, r) => [...row].forEach((ch, c) => {
          if (ch === '.') return;
          ctx.fillStyle = P[ch.toUpperCase()];
          ctx.fillRect(ox + c * cs, ox + r * cs, Math.ceil(cs), Math.ceil(cs));
        }));
        ctx.globalAlpha = 1;
      } else {
        grid.forEach((row, r) => row.forEach((c, k) => c && cube(ctx, ox + k * cs + pad, ox + r * cs + pad, cs - 2 * pad, c)));
        pops.forEach(p => {
          const k = (now - p.at) / 380, w = (cs - 2 * pad) * (1 - k * 0.6);
          const x = ox + p.c * cs + cs / 2, y = ox + p.r * cs + cs / 2;
          cube(ctx, x - w / 2, y - w / 2, w, p.color, 1 - k);
          ctx.strokeStyle = P[p.color]; ctx.globalAlpha = (1 - k) * 0.8; ctx.lineWidth = cs * 0.12;
          ctx.beginPath(); ctx.moveTo(p.from.x, p.from.y); ctx.lineTo(x, y); ctx.stroke(); ctx.globalAlpha = 1;
        });
      }
      // 캐릭터와 탄 배지
      const sz = cs * 1.45;
      riders.forEach(r => {
        const p = at(r.t);
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(sprite(r.frame, r.c), p.x - sz / 2, p.y - sz / 2, sz, sz);
        const bx = p.x + sz * 0.38, by = p.y + sz * 0.38, br = cs * 0.36;
        ctx.beginPath(); ctx.arc(bx, by, br, 0, Math.PI * 2);
        ctx.fillStyle = '#2B3244'; ctx.fill(); ctx.lineWidth = cs * 0.08; ctx.strokeStyle = '#FFFFFF'; ctx.stroke();
        ctx.fillStyle = '#FFFFFF'; ctx.font = `800 ${cs * 0.46}px system-ui, sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(r.ammo, bx, by + cs * 0.02);
      });
      // 벨티: 왼쪽 위 모서리. 완성되면 뛴다
      const hop = phase === 'done' && !still ? Math.abs(Math.sin((now - phaseAt) / 160)) * cs * 0.5 : 0;
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(sprite(art.belty, 'N'), a - cs * 0.85, a - cs * 0.95 - hop, cs * 1.7, cs * 1.7);
    }

    function frame(now) {
      if (!visible) { last = 0; return; }
      const dt = last ? Math.min(now - last, 60) : 0;
      last = now;
      step(now, dt);
      draw(now);
      requestAnimationFrame(frame);
    }

    load(); size();
    addEventListener('resize', () => { size(); if (still) draw(0); });
    if (still) {
      // 움직임 줄이기: 큐브 몇 개를 지운 한 장면에 멈춘다
      for (let t = 0; t < 2400; t += 16) step(t, 16);
      draw(0);
      return;
    }
    new IntersectionObserver(([e]) => {
      const was = visible;
      visible = e.isIntersecting && !document.hidden;
      if (visible && !was) requestAnimationFrame(frame);
    }).observe(canvas);
    document.addEventListener('visibilitychange', () => {
      const was = visible;
      visible = !document.hidden;
      if (visible && !was) requestAnimationFrame(frame);
    });
    requestAnimationFrame(frame);
  }
})();
