// ════════════════════════════════════════════════
//  PLANET DATA
// ════════════════════════════════════════════════
const PLANETS = [
  { id:'moon',    name:'M\u1eb7t Tr\u0103ng',       nameEn:'Moon',    g:0.166, color:'#c8c8c8', radius:1737,  volume:0.020, mass:0.0123,
    surface:'rgba(160,160,160,0.3)',
    fact:'Phi h\u00e0nh gia Apollo nh\u1ea3y \u0111\u01b0\u1ee3c ~3 m\u00e9t! Tr\u1ecdng l\u1ef1c 16.6% Tr\u00e1i \u0110\u1ea5t \u2014 m\u1ecdi th\u1ee9 r\u01a1i ch\u1eadm nh\u01b0 phim slow-motion.',
    bodyEffect:'\u26a0\ufe0f Tr\u1ecdng l\u1ef1c qu\u00e1 th\u1ea5p (0.17g): X\u01b0\u01a1ng m\u1ea5t 1-2% m\u1eadt \u0111\u1ed9/th\u00e1ng (NASA), c\u01a1 b\u1eafp teo sau v\u00e0i tu\u1ea7n. Tim co l\u1ea1i do \u00edt c\u1ea7n b\u01a1m m\u00e1u l\u00ean. D\u1ecbch c\u01a1 th\u1ec3 d\u1ed3n l\u00ean \u0111\u1ea7u g\u00e2y ph\u00f9 n\u00e3o, m\u1edd m\u1eaft. S\u1ed1ng l\u00e2u d\u00e0i kh\u00f4ng kh\u1ea3 thi n\u1ebfu kh\u00f4ng t\u1eadp th\u1ec3 d\u1ee5c li\u00ean t\u1ee5c.',
    bodyRisk:'low' },
  { id:'mercury', name:'Th\u1ee7y Tinh',        nameEn:'Mercury', g:0.378, color:'#b8a890', radius:2440,  volume:0.056, mass:0.0553,
    surface:'rgba(140,130,100,0.4)',
    fact:'H\u00e0nh tinh nh\u1ecf nh\u1ea5t nh\u01b0ng m\u1eadt \u0111\u1ed9 cao. Tr\u1ecdng l\u1ef1c g\u1ea5p 2.3 l\u1ea7n M\u1eb7t Tr\u0103ng d\u00f9 nh\u1ecf h\u01a1n nhi\u1ec1u.',
    bodyEffect:'\u26a0\ufe0f Tr\u1ecdng l\u1ef1c th\u1ea5p (0.38g): M\u1ea5t x\u01b0\u01a1ng v\u00e0 teo c\u01a1 ch\u1eadm h\u01a1n M\u1eb7t Tr\u0103ng nh\u01b0ng v\u1eabn \u0111\u00e1ng k\u1ec3. Tim ho\u1ea1t \u0111\u1ed9ng d\u01b0\u1edbi m\u1ee9c t\u1ed1i \u01b0u. C\u1ed9t s\u1ed1ng gi\u00e3n ra (phi h\u00e0nh gia t\u0103ng ~5cm chi\u1ec1u cao). H\u1ec7 mi\u1ec5n d\u1ecbch suy y\u1ebfu sau v\u00e0i th\u00e1ng.',
    bodyRisk:'low' },
  { id:'mars',    name:'H\u1ecfa Tinh',         nameEn:'Mars',    g:0.379, color:'#d9541e', radius:3389,  volume:0.151, mass:0.1074,
    surface:'rgba(160,60,20,0.4)',
    fact:'\u1ee8ng c\u1eed vi\u00ean s\u1ed1 1 \u0111\u1ec3 con ng\u01b0\u1eddi \u0111\u1ecbnh c\u01b0! 38% tr\u1ecdng l\u1ef1c Tr\u00e1i \u0110\u1ea5t \u2014 b\u1ee5i H\u1ecfa Tinh bay l\u01a1 l\u1eafng r\u1ea5t l\u00e2u.',
    bodyEffect:'\u26a0\ufe0f Tr\u1ecdng l\u1ef1c th\u1ea5p (0.38g): T\u01b0\u01a1ng t\u1ef1 Th\u1ee7y Tinh \u2014 x\u01b0\u01a1ng v\u00e0 c\u01a1 d\u1ea7n suy y\u1ebfu n\u1ebfu kh\u00f4ng t\u1eadp luy\u1ec7n. NASA lo ng\u1ea1i phi h\u00e0nh gia m\u1ea5t ~15% c\u01a1 b\u1eafp sau 6 th\u00e1ng.',
    bodyRisk:'low' },
  { id:'uranus',  name:'Thi\u00ean V\u01b0\u01a1ng Tinh', nameEn:'Uranus',  g:0.886, color:'#7de8e8', radius:25362, volume:63.1, mass:14.536,
    surface:'rgba(60,200,210,0.25)',
    fact:'H\u00e0nh tinh nghi\u00eang 97.77\u00b0 \u2014 n\u00f3 "l\u0103n" thay v\u00ec quay! Tr\u1ecdng l\u1ef1c nh\u1eb9 h\u01a1n Tr\u00e1i \u0110\u1ea5t d\u00f9 to g\u1ea5p 4 l\u1ea7n.',
    bodyEffect:'\u2705 Tr\u1ecdng l\u1ef1c g\u1ea7n Tr\u00e1i \u0110\u1ea5t (0.89g): \u1ea2nh h\u01b0\u1edfng t\u1ed1i thi\u1ec3u, c\u01a1 th\u1ec3 c\u00f3 th\u1ec3 th\u00edch nghi t\u1ed1t.',
    bodyRisk:'safe' },
  { id:'venus',   name:'Kim Tinh',         nameEn:'Venus',   g:0.904, color:'#e8c060', radius:6051,  volume:0.866, mass:0.815,
    surface:'rgba(180,150,60,0.35)',
    fact:'"Anh em song sinh" c\u1ee7a Tr\u00e1i \u0110\u1ea5t \u2014 g\u1ea7n b\u1eb1ng v\u1ec1 tr\u1ecdng l\u1ef1c. Nh\u01b0ng nhi\u1ec7t \u0111\u1ed9 465\u00b0C v\u00e0 m\u01b0a axit sulfuric!',
    bodyEffect:'\u2705 Tr\u1ecdng l\u1ef1c g\u1ea7n Tr\u00e1i \u0110\u1ea5t (0.9g): C\u01a1 th\u1ec3 th\u00edch nghi t\u1ed1t, x\u01b0\u01a1ng v\u00e0 c\u01a1 b\u1eafp kh\u00f4ng b\u1ecb \u1ea3nh h\u01b0\u1edfng \u0111\u00e1ng k\u1ec3.',
    bodyRisk:'safe' },
  { id:'earth',   name:'Tr\u00e1i \u0110\u1ea5t',         nameEn:'Earth',   g:1.000, color:'#4fc3f7', radius:6371,  volume:1.000, mass:1,
    surface:'rgba(30,100,60,0.4)',
    fact:'H\u00e0nh tinh duy nh\u1ea5t c\u00f3 s\u1ef1 s\u1ed1ng. Tr\u1ecdng l\u1ef1c ho\u00e0n h\u1ea3o gi\u00fap n\u01b0\u1edbc \u1edf d\u1ea1ng l\u1ecfng v\u00e0 b\u1ea7u kh\u00ed quy\u1ec3n t\u1ed3n t\u1ea1i.',
    bodyEffect:'\u2705 Chu\u1ea9n 1g: C\u01a1 th\u1ec3 ho\u1ea1t \u0111\u1ed9ng ho\u00e0n h\u1ea3o. X\u01b0\u01a1ng, tim, c\u01a1 b\u1eafp, m\u1eaft v\u00e0 h\u1ec7 th\u1ea7n kinh \u0111\u1ec1u ti\u1ebfn h\u00f3a \u0111\u1ec3 ho\u1ea1t \u0111\u1ed9ng t\u1ed1i \u01b0u.',
    bodyRisk:'safe' },
  { id:'saturn',  name:'Th\u1ed5 Tinh',         nameEn:'Saturn',  g:1.065, color:'#e8d090', radius:58232, volume:763.6, mass:95.159, hasSaturnRing:true,
    surface:'rgba(180,150,80,0.3)',
    fact:'M\u1eadt \u0111\u1ed9 th\u1ea5p nh\u1ea5t h\u1ec7 m\u1eb7t tr\u1eddi \u2014 th\u1ea5p h\u01a1n n\u01b0\u1edbc! N\u1ebfu c\u00f3 \u0111\u1ea1i d\u01b0\u01a1ng \u0111\u1ee7 l\u1edbn, Th\u1ed5 Tinh s\u1ebd n\u1ed5i l\u00ean!',
    bodyEffect:'\u26a1 Tr\u1ecdng l\u1ef1c cao nh\u1eb9 (1.07g): H\u1ea7u nh\u01b0 kh\u00f4ng kh\u00e1c bi\u1ec7t. Ng\u01b0\u1eddi 70kg c\u1ea3m th\u1ea5y n\u1eb7ng ~75kg. C\u01a1 th\u1ec3 th\u00edch nghi \u0111\u01b0\u1ee3c.',
    bodyRisk:'medium' },
  { id:'neptune', name:'H\u1ea3i V\u01b0\u01a1ng Tinh',   nameEn:'Neptune', g:1.137, color:'#3a5de0', radius:24622, volume:57.7, mass:17.147,
    surface:'rgba(40,70,200,0.35)',
    fact:'H\u00e0nh tinh xa nh\u1ea5t h\u1ec7 m\u1eb7t tr\u1eddi. Gi\u00f3 m\u1ea1nh nh\u1ea5t \u2014 2,100 km/h! Tr\u1ecdng l\u1ef1c h\u01a1n Tr\u00e1i \u0110\u1ea5t 13.7%.',
    bodyEffect:'\u26a1 Tr\u1ecdng l\u1ef1c cao nh\u1eb9 (1.14g): C\u01a1 th\u1ec3 ch\u1ecbu th\u00eam ~14% t\u1ea3i tr\u1ecdng. Kh\u1edbp v\u00e0 c\u1ed9t s\u1ed1ng ch\u1ecbu l\u1ef1c nhi\u1ec1u h\u01a1n.',
    bodyRisk:'medium' },
  { id:'jupiter', name:'M\u1ed9c Tinh',         nameEn:'Jupiter', g:2.528, color:'#d08040', radius:69911,  volume:1321, mass:317.83,
    surface:'rgba(160,100,40,0.4)',
    fact:'H\u00e0nh tinh l\u1edbn nh\u1ea5t h\u1ec7 m\u1eb7t tr\u1eddi. Tr\u1ecdng l\u1ef1c g\u1ea5p 2.5 l\u1ea7n \u2014 b\u1ea1n s\u1ebd n\u1eb7ng \u0111\u1ebfn m\u1ee9c kh\u00f3 \u0111\u1ee9ng v\u1eefng!',
    bodyEffect:'\ud83d\udd34 Tr\u1ecdng l\u1ef1c c\u1ef1c cao (2.53g): Ng\u01b0\u1eddi 70kg c\u1ea3m th\u1ea5y n\u1eb7ng 177kg! Tim ph\u1ea3i b\u01a1m m\u1ea1nh g\u1ea5p \u0111\u00f4i, nguy c\u01a1 suy tim c\u1ea5p. X\u01b0\u01a1ng ch\u00e2n g\u00e3y khi \u0111\u1ee9ng.',
    bodyRisk:'danger' },
  { id:'sun',     name:'M\u1eb7t Tr\u1eddi',         nameEn:'Sun',     g:27.96, color:'#ffb700', radius:696340, volume:1300000, mass:332946, isSun:true,
    surface:'rgba(255,150,0,0.4)',
    fact:'Tr\u1ecdng l\u1ef1c kh\u1ee7ng khi\u1ebfp \u2014 28 l\u1ea7n Tr\u00e1i \u0110\u1ea5t. Ng\u01b0\u1eddi 60kg s\u1ebd n\u1eb7ng ~1.677 t\u1ea5n!',
    bodyEffect:'\ud83d\udc80 Si\u00eau tr\u1ecdng l\u1ef1c (27.96g): T\u1ee9c th\u00ec g\u00e2y t\u1eed vong. Ng\u01b0\u1eddi 70kg n\u1eb7ng ~1.96 t\u1ea5n. Tim kh\u00f4ng th\u1ec3 b\u01a1m m\u00e1u l\u00ean n\u00e3o \u2014 ng\u1ea5t trong 1 gi\u00e2y.',
    bodyRisk:'lethal' },
];

// ════════════════════════════════════════════════
//  STARFIELD
// ════════════════════════════════════════════════
function initStars() {
  const c = document.getElementById('stars-canvas');
  const ctx = c.getContext('2d');
  let stars = [];
  function resize() {
    c.width = innerWidth; c.height = innerHeight; stars = [];
    for (let i = 0; i < 220; i++) stars.push({
      x: Math.random()*c.width, y: Math.random()*c.height,
      r: Math.random()*1.4+0.2, a: Math.random(),
      da: (Math.random()-0.5)*0.006, speed: Math.random()*0.07+0.01
    });
  }
  function draw() {
    ctx.clearRect(0,0,c.width,c.height);
    stars.forEach(s => {
      s.a = Math.max(0.05, Math.min(1, s.a+s.da));
      if (s.a<=0.05||s.a>=1) s.da*=-1;
      s.y += s.speed; if (s.y>c.height){s.y=0;s.x=Math.random()*c.width;}
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(255,255,255,${s.a})`; ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  resize(); window.addEventListener('resize',resize); draw();
}

// ════════════════════════════════════════════════
//  ASTRONAUT SVG
// ════════════════════════════════════════════════
function hexToRgb(hex){const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);return r?`${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}`:'0,212,255';}

function buildAstronaut(color) {
  const c = color||'#00d4ff';
  const dim = `rgba(${hexToRgb(c)},0.7)`;
  return `<svg id="astro-svg" width="80" height="150" viewBox="0 0 80 150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="hg" cx="40%" cy="35%"><stop offset="0%" stop-color="#ffffff" stop-opacity=".9"/><stop offset="100%" stop-color="#c8d8e8"/></radialGradient>
    <radialGradient id="vg" cx="35%" cy="30%"><stop offset="0%" stop-color="${c}" stop-opacity=".5"/><stop offset="100%" stop-color="${c}" stop-opacity=".1"/></radialGradient>
    <radialGradient id="bg" cx="50%" cy="30%"><stop offset="0%" stop-color="#e0e8f0"/><stop offset="100%" stop-color="#b0bcc8"/></radialGradient>
    <filter id="glow"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <g id="arm-l"><rect x="6" y="30" width="14" height="26" rx="7" fill="url(#bg)" stroke="${c}" stroke-width=".5"/><rect x="5" y="52" width="16" height="10" rx="5" fill="${dim}"/></g>
  <g id="arm-r"><rect x="60" y="30" width="14" height="26" rx="7" fill="url(#bg)" stroke="${c}" stroke-width=".5"/><rect x="59" y="52" width="16" height="10" rx="5" fill="${dim}"/></g>
  <g id="torso-g">
    <rect x="22" y="26" width="36" height="46" rx="12" fill="url(#bg)" stroke="${c}" stroke-width=".8"/>
    <rect x="28" y="32" width="24" height="16" rx="5" fill="rgba(0,0,0,0.2)"/>
    <circle cx="33" cy="39" r="2.5" fill="#ff4455"/>
    <circle cx="40" cy="39" r="2.5" fill="#44ff88"/>
    <circle cx="47" cy="39" r="2.5" fill="#ffcc00"/>
    <rect x="32" y="44" width="16" height="2" rx="1" fill="rgba(255,255,255,0.3)"/>
    <rect x="21" y="27" width="8" height="5" rx="2" fill="${dim}"/>
    <rect x="51" y="27" width="8" height="5" rx="2" fill="${dim}"/>
    <rect x="22" y="66" width="36" height="6" rx="3" fill="${dim}"/>
  </g>
  <g id="head-g">
    <circle cx="40" cy="13" r="16" fill="url(#hg)" stroke="${c}" stroke-width="1.2" filter="url(#glow)"/>
    <ellipse cx="40" cy="15" rx="11" ry="9" fill="url(#vg)" stroke="${c}" stroke-width="1"/>
    <ellipse cx="35" cy="11" rx="4" ry="3" fill="rgba(255,255,255,0.25)" transform="rotate(-15 35 11)"/>
    <line x1="40" y1="-3" x2="46" y2="-10" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="46" cy="-11" r="2" fill="${c}"/>
    <rect x="30" y="26" width="20" height="5" rx="2.5" fill="${dim}"/>
  </g>
  <g id="leg-lu"><rect x="22" y="70" width="16" height="24" rx="8" fill="url(#bg)" stroke="${c}" stroke-width=".5"/></g>
  <g id="leg-ll"><rect x="22" y="93" width="16" height="22" rx="8" fill="#c0cad8"/><rect x="18" y="110" width="22" height="12" rx="6" fill="#7a8898"/><rect x="16" y="118" width="24" height="5" rx="3" fill="#5a6878"/></g>
  <g id="leg-ru"><rect x="42" y="70" width="16" height="24" rx="8" fill="url(#bg)" stroke="${c}" stroke-width=".5"/></g>
  <g id="leg-rl"><rect x="42" y="93" width="16" height="22" rx="8" fill="#c0cad8"/><rect x="40" y="110" width="22" height="12" rx="6" fill="#7a8898"/><rect x="40" y="118" width="24" height="5" rx="3" fill="#5a6878"/></g>
  <div id="astro-shadow" class="astro-shadow"></div>
</svg>`;
}

// ════════════════════════════════════════════════
//  PLANET BALL (ảnh thật + ring/corona)
// ════════════════════════════════════════════════
function makePlanetBall(p, size) {
  const s = size||80;
  const rh = Math.round(s*0.55), rt = Math.max(3, Math.round(s*0.09));
  const ringStyle = `position:absolute;width:${s+rh*2}px;height:${Math.round(s*0.28)}px;
    border-radius:50%;border:${rt}px solid rgba(210,185,110,0.72);
    top:50%;left:50%;transform:translate(-50%,-50%) rotateX(74deg);
    pointer-events:none;z-index:2;box-shadow:0 0 8px rgba(210,185,110,0.3);`;
  const coronaStyle = `position:absolute;inset:-8px;border-radius:50%;
    background:radial-gradient(circle,rgba(255,200,0,0.35) 0%,transparent 70%);
    animation:sunPulse 2.5s ease-in-out infinite;pointer-events:none;z-index:0;`;
  const ring   = p.hasSaturnRing ? `<div style="${ringStyle}"></div>` : '';
  const corona = p.isSun         ? `<div style="${coronaStyle}"></div>` : '';
  return `<div style="width:${s}px;height:${s}px;border-radius:50%;position:relative;overflow:visible;flex-shrink:0;">
    ${corona}
    <img src="assets/planets/${p.id}.jpg" alt="${p.name}"
      style="width:${s}px;height:${s}px;border-radius:50%;object-fit:cover;
             display:block;position:relative;z-index:1;
             box-shadow:inset -${Math.round(s*.1)}px -${Math.round(s*.07)}px ${Math.round(s*.18)}px rgba(0,0,0,0.6);"
      onerror="this.remove()">
    ${ring}
  </div>`;
}

// ════════════════════════════════════════════════
//  SIZE COMPARISON  (visual = cbrt | real = true scale)
// ════════════════════════════════════════════════
let scaleMode = 'visual';
let sortMode  = 'size'; // 'size' | 'mass' | 'gravity'

function buildSizeComparison() {
  var wrap      = document.getElementById('size-compare');
  if (!wrap) return;
  var container = wrap.closest('.size-compare-wrap');

  // ── Scale toggle ──
  if (!document.getElementById('scale-toggle')) {
    var btn = document.createElement('button');
    btn.id = 'scale-toggle';
    btn.innerHTML = '\uD83D\uDD0D Xem T\u1EF7 L\u1EC7 TH\u1EF0C T\u1EBE';
    btn.style.cssText = 'margin:0 8px 0 0;background:rgba(0,212,255,0.1);border:1px solid rgba(0,212,255,0.4);color:#00d4ff;font-family:Orbitron,monospace;font-size:.6rem;letter-spacing:1.5px;padding:8px 20px;border-radius:999px;cursor:pointer;transition:all .3s;';
    btn.addEventListener('mouseenter',function(){ btn.style.background='rgba(0,212,255,0.25)'; });
    btn.addEventListener('mouseleave',function(){ btn.style.background='rgba(0,212,255,0.1)'; });
    btn.addEventListener('click', function() {
      scaleMode = scaleMode === 'visual' ? 'real' : 'visual';
      btn.innerHTML = scaleMode === 'real' ? '\uD83C\uDF10 Xem T\u1EF7 L\u1EC7 TR\u1EF0C QUAN' : '\uD83D\uDD0D Xem T\u1EF7 L\u1EC7 TH\u1EF0C T\u1EBE';
      var note = container.querySelector('.size-compare-note');
      note.textContent = scaleMode === 'real'
        ? 'T\u1EF7 l\u1EC7 TH\u1EF0C T\u1EBE \u2014 Tr\u00E1i \u0110\u1EA5t = 30px \u2022 M\u1EB7t Tr\u1EDDi l\u1EDBn h\u01A1n 109 l\u1EA7n \u2022 cu\u1ED9n \u2192 \u0111\u1EC3 xem to\u00E0n b\u1ED9'
        : '\uD83D\uDCCF K\u00EDch th\u01B0\u1EDBc theo c\u0103n b\u1EADc 3 th\u1EC3 t\u00EDch (visual) \u2022 Tr\u00E1i \u0110\u1EA5t = chu\u1EA9n so s\u00E1nh';
      renderSizeItems();
    });

    // ── Sort buttons ──
    var sortBar = document.createElement('div');
    sortBar.id = 'sort-bar';
    sortBar.style.cssText = 'display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:14px;flex-wrap:wrap;';

    var sortLabel = document.createElement('span');
    sortLabel.textContent = 'S\u1EAFp x\u1EBFp:';
    sortLabel.style.cssText = 'font-family:Orbitron,monospace;font-size:.55rem;color:rgba(255,255,255,0.4);letter-spacing:1px;';
    sortBar.appendChild(sortLabel);
    sortBar.appendChild(btn);

    var sortBtns = [
      { id:'sort-size',    label:'\uD83C\uDF0D K\u00EDch th\u01B0\u1EDBc', key:'size'    },
      { id:'sort-mass',    label:'\u2696\uFE0F Kh\u1ED1i l\u01B0\u1EE3ng',  key:'mass'    },
      { id:'sort-gravity', label:'\u2B07\uFE0F Tr\u1ECDng l\u1EF1c',  key:'gravity' },
    ];
    sortBtns.forEach(function(def) {
      var sb = document.createElement('button');
      sb.id  = def.id;
      sb.innerHTML = def.label;
      sb.dataset.key = def.key;
      var baseStyle = 'background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.55);font-family:Orbitron,monospace;font-size:.6rem;letter-spacing:1px;padding:7px 16px;border-radius:999px;cursor:pointer;transition:all .3s;';
      sb.style.cssText = baseStyle;
      sb.addEventListener('click', function() {
        sortMode = def.key;
        document.querySelectorAll('#sort-bar button[data-key]').forEach(function(b){
          b.style.background = 'rgba(255,255,255,0.05)';
          b.style.borderColor = 'rgba(255,255,255,0.15)';
          b.style.color = 'rgba(255,255,255,0.55)';
        });
        sb.style.background   = 'rgba(168,85,247,0.2)';
        sb.style.borderColor  = 'rgba(168,85,247,0.6)';
        sb.style.color        = '#c084fc';
        renderSizeItems();
      });
      sortBar.appendChild(sb);
    });

    // Earth mass reference
    var earthRef = document.createElement('div');
    earthRef.style.cssText = 'width:100%;text-align:center;font-size:.65rem;color:rgba(255,255,255,0.3);font-family:Orbitron,monospace;letter-spacing:1px;margin-top:2px;';
    earthRef.innerHTML = '\u2139\uFE0F Kh\u1ED1i l\u01B0\u1EE3ng Tr\u00E1i \u0110\u1EA5t (chu\u1EA9n) = <span style="color:#4fc3f7;font-weight:700;">5.972 \u00D7 10<sup>24</sup> kg</span> \u2248 <span style="color:#4fc3f7;">5,972 t\u1EF7 t\u1EF7 t\u1EA5n</span>';
    sortBar.appendChild(earthRef);

    container.insertBefore(sortBar, wrap);
  }
  renderSizeItems();
}

function formatMass(m) {
  if (m >= 100000)  return (m/1000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g,',') + 'k\xD7';
  if (m >= 1000)    return m.toFixed(0) + '\xD7';
  if (m >= 1)       return m.toFixed(2) + '\xD7';
  return '1/' + Math.round(1/m) + '\xD7';
}

function renderSizeItems() {
  var wrap = document.getElementById('size-compare');
  wrap.innerHTML = '';

  var sorted = [...PLANETS];
  if (sortMode === 'size')    sorted.sort(function(a,b){ return a.radius - b.radius; });
  else if (sortMode === 'mass')    sorted.sort(function(a,b){ return (a.mass||0) - (b.mass||0); });
  else if (sortMode === 'gravity') sorted.sort(function(a,b){ return a.g - b.g; });

  sorted.forEach(function(p) {
    var sz;
    if (scaleMode === 'real') {
      sz = Math.max(4, Math.round((p.radius / 6371) * 30));
    } else {
      var norm = Math.cbrt(p.radius) / Math.cbrt(696340);
      sz = Math.max(14, Math.round(14 + 126 * norm));
    }
    var volText = p.volume >= 1000000
      ? (p.volume/1000000).toFixed(1)+'M\xD7 Earth'
      : p.volume >= 1000 ? Math.round(p.volume).toLocaleString()+'\xD7 Earth'
      : p.volume >= 1    ? p.volume.toFixed(2)+'\xD7 Earth'
      : '1/'+Math.round(1/p.volume)+'\xD7 Earth';

    var massText = p.mass ? formatMass(p.mass) + ' Earth' : '';

    var ringSz = Math.round(sz*0.5), rt = Math.max(2,Math.round(sz*0.08));
    var ringEl = p.hasSaturnRing && sz >= 8
      ? '<div style="position:absolute;width:'+(sz+ringSz*2)+'px;height:'+Math.round(sz*0.26)+'px;border-radius:50%;border:'+rt+'px solid rgba(210,185,110,0.65);top:50%;left:50%;transform:translate(-50%,-50%) rotateX(74deg);pointer-events:none;z-index:2;"></div>'
      : '';

    var item = document.createElement('div');
    item.className = 'sc-item';
    item.dataset.id = p.id;
    item.style.setProperty('--sc-col', p.color);
    item.innerHTML =
      '<div class="sc-circle" style="width:'+sz+'px;height:'+sz+'px;overflow:visible;position:relative;flex-shrink:0;">'
      + '<img src="assets/planets/'+p.id+'.jpg" alt="'+(p.nameEn||p.name)+'" style="width:'+sz+'px;height:'+sz+'px;object-fit:cover;border-radius:50%;display:block;position:relative;z-index:1;">'
      + ringEl
      + '</div>'
      + '<div class="sc-label">'+(p.nameEn||p.name)+'</div>'
      + '<div class="sc-vol">'+volText+'</div>'
      + (massText ? '<div class="sc-mass">\u2696\uFE0F '+massText+'</div>' : '')
      + (scaleMode==='real' ? '<div class="sc-vol" style="color:rgba(255,255,255,0.2)">'+p.radius.toLocaleString()+' km</div>' : '');
    item.addEventListener('click', function(){ selectPlanet(p); });
    if (currentPlanet && currentPlanet.id === p.id) item.classList.add('active-sc');
    wrap.appendChild(item);
  });
}

function highlightSizeItem(id) {
  document.querySelectorAll('.sc-item').forEach(function(el) {
    el.classList.toggle('active-sc', el.dataset.id === id);
  });
}
// ════════════════════════════════════════════════
//  PLANET CARDS
// ════════════════════════════════════════════════
function buildCards() {
  const grid = document.getElementById('planets-grid');
  PLANETS.forEach(p => {
    const card = document.createElement('div');
    card.className = 'planet-card';
    card.dataset.id = p.id;
    card.style.setProperty('--pc', p.color);
    card.innerHTML = `
      <div style="display:flex;justify-content:center;margin-bottom:10px;">
        ${makePlanetBall(p,76)}
      </div>
      <div class="planet-name">${p.name}</div>
      <div class="planet-g-val">${p.g}g</div>
      <div class="active-check">✓</div>`;
    card.addEventListener('click', () => selectPlanet(p));
    grid.appendChild(card);
  });
}

// ════════════════════════════════════════════════
//  FALLING BALL ANIMATION
// ════════════════════════════════════════════════
let fallTimer = null;
function runFallDemo(p) {
  const ball = document.getElementById('fall-ball');
  if (!ball) return; // fall-ball removed, skip old demo
  const timeEl = document.getElementById('fall-time');
  const trackH = 120; // px (track height - ball size)
  const dropM = 100;  // metres simulated
  // t = sqrt(2h/g)
  const gMs2 = p.g * 9.81;
  const totalSec = Math.sqrt(2 * dropM / gMs2);

  // Color ball by planet
  ball.style.background = `radial-gradient(circle at 35% 30%, #fff 0%, ${p.color} 55%, #000 100%)`;
  ball.style.boxShadow = `0 0 12px ${p.color}`;
  document.getElementById('fall-demo-sub').textContent = `từ 100m — mất ${totalSec.toFixed(2)}s`;

  clearInterval(fallTimer);
  let elapsed = 0;
  const fps = 60;
  const dt = 1/fps;
  ball.style.top = '10px';
  timeEl.textContent = 't = 0.00s';

  fallTimer = setInterval(() => {
    elapsed += dt;
    if (elapsed >= totalSec) {
      // Landed
      ball.style.top = (trackH) + 'px';
      timeEl.textContent = `t = ${totalSec.toFixed(2)}s ✓`;
      clearInterval(fallTimer);
      // Bounce restart after 1.5s
      setTimeout(() => runFallDemo(p), 1500);
      return;
    }
    const progress = (0.5 * gMs2 * elapsed * elapsed) / dropM;
    ball.style.top = (10 + progress * trackH) + 'px';
    timeEl.textContent = `t = ${elapsed.toFixed(2)}s`;
  }, 1000/fps);
}

// ════════════════════════════════════════════════
//  STRENGTH CALCULATOR
// ════════════════════════════════════════════════
function updateStrength(p) {
  const earthLift = parseFloat(document.getElementById('lift-input').value) || 10;
  // Can lift = earthLift / g_ratio  (same muscle force, less gravity)
  const single  = earthLift / p.g;
  const juggle3 = single / 3;

  document.getElementById('str-single').textContent =
    single >= 1000 ? `${(single/1000).toFixed(1)} TẤN` : `${Math.round(single)} kg`;
  { var _sj = document.getElementById('str-juggle'); if (_sj) _sj.textContent = juggle3 >= 1000 ? (juggle3/1000).toFixed(1)+' TAN' : Math.round(juggle3)+' kg'; }

  let desc = '';
  if (p.g <= 0.1)       desc = `🤩 Bạn mạnh như siêu nhân! Chỉ cần 1 ngón tay là có thể đẩy xe tải!`;
  else if (p.g <= 0.2)  desc = `🚀 Nhảy, bật, ném tạ nhẹ nhàng như ném bóng bàn trên Trái Đất.`;
  else if (p.g <= 0.5)  desc = `💪 Sức mạnh đáng kể! Các vật nặng cảm giác nhẹ bẫng.`;
  else if (p.g <= 0.95) desc = `😊 Cơ thể thoải mái hơn, vật nặng dễ nâng hơn Trái Đất.`;
  else if (p.g <= 1.05) desc = `🌍 Giống hệt Trái Đất — mọi thứ bình thường.`;
  else if (p.g <= 2)    desc = `😰 Nặng nề hơn, chân cảm thấy nặng, tim phải bơm mạnh hơn.`;
  else                  desc = `☠️ Không thể đứng thẳng! Xương sẽ gãy dưới áp lực. Chỉ robot mới sống được.`;
  document.getElementById('str-desc').textContent = desc;
}

// ════════════════════════════════════════════════
//  SELECT PLANET
// ════════════════════════════════════════════════
let currentPlanet = null;
function selectPlanet(p) {
  currentPlanet = p;
  // Sync carousel index
  var ci = PLANETS.findIndex(function(x){ return x.id===p.id; });
  if (ci >= 0) { carouselIndex = ci; carouselRender(); }
  document.querySelectorAll('.planet-card').forEach(c => c.classList.toggle('active', c.dataset.id===p.id));
  highlightSizeItem(p.id);
  updateResult();
}

// ════════════════════════════════════════════════
//  UPDATE RESULT
// ════════════════════════════════════════════════
function updateResult() {
  const earthKg = parseFloat(document.getElementById('weight').value)||60;
  if (!currentPlanet||earthKg<=0) return;
  const p = currentPlanet;
  const planetKg = (earthKg*p.g).toFixed(2);

  const panel = document.getElementById('result-panel');
  panel.classList.add('show');
  panel.style.borderColor = p.color+'44';

  // Hero
  const heroEl = document.getElementById('planet-hero-img');
  heroEl.innerHTML = makePlanetBall(p,70);
  heroEl.style.overflow = 'visible';
  document.getElementById('planet-hero-name').textContent = p.name;
  document.getElementById('planet-hero-g').textContent = `${p.g}g = ${(p.g*9.807).toFixed(2)} m/s²`;
  document.getElementById('planet-col-css').style.setProperty('--planet-col',p.color);

  // Weights
  document.getElementById('planet-w').textContent = planetKg;
  document.getElementById('planet-w-label').textContent = `kg trên ${p.name}`;

  // Gravity bar
  const barPct = Math.min(100, (p.g/27.96)*100);
  const fill = document.getElementById('g-bar-fill');
  fill.style.width = barPct+'%';
  fill.style.background = `linear-gradient(90deg,${p.color},#a855f7)`;
  document.getElementById('g-label-r').textContent = (p.g*9.807).toFixed(2)+' m/s²';

  // Volume info
  const volText = p.volume>=1000000
    ? `${(p.volume/1000000).toFixed(1)} triệu lần Trái Đất`
    : p.volume>=1000 ? `${Math.round(p.volume).toLocaleString()} lần Trái Đất`
    : p.volume>=1    ? `${p.volume.toFixed(3)} lần Trái Đất`
    : `1/${Math.round(1/p.volume)} lần Trái Đất`;
  document.getElementById('vol-radius').textContent = `${p.radius.toLocaleString()} km`;
  document.getElementById('vol-volume').textContent = volText;

  // Fact
  const fb = document.getElementById('fact-box');
  fb.textContent = '💡 '+p.fact;
  fb.style.borderLeftColor = p.color;

  // Body effect
  const be = document.getElementById('body-effect-box');
  if (be && p.bodyEffect) {
    be.textContent = p.bodyEffect;
    be.className = 'body-effect-box risk-' + (p.bodyRisk || 'safe');
    be.style.display = 'block';
  }

  // Scene
  updateScene(p, earthKg);

  // Fall demo
  runFallDemo(p);

  // Strength
  updateStrength(p);

  panel.scrollIntoView({behavior:'smooth',block:'nearest'});
}

// ════════════════════════════════════════════════
//  SCENE & JUMP ANIMATION
// ════════════════════════════════════════════════
function updateScene(p, earthKg) {
  const ground = document.getElementById('scene-ground');
  ground.style.background = `linear-gradient(90deg,transparent,${p.color},transparent)`;
  ground.style.boxShadow = `0 0 25px ${p.color},0 0 50px ${p.color}55`;
  document.getElementById('scene-ground-tex').style.background =
    `linear-gradient(to top,${p.surface},transparent)`;

  const stage = document.getElementById('astro-stage');
  stage.innerHTML = buildAstronaut(p.color);
  stage.innerHTML += `<div class="astro-shadow" id="astro-shadow" style="background:radial-gradient(ellipse,${p.color}55 0%,transparent 70%);"></div>`;


  const wrapper = document.getElementById('astro-wrapper');
  wrapper.classList.remove('astro-jump','grav-low','grav-high','astro-crush');

  // SUN: bi nghien nat — khong nhat
  if (p.id === 'sun') {
    wrapper.classList.add('astro-crush');
    document.getElementById('ruler-bar').style.height = '0px';
    document.getElementById('ruler-label').textContent = '';
    document.getElementById('jump-compare').textContent =
      `☀️ Mặt Trời: ${p.g}g — Cơ thể bị nghiền nát tức thì!`;
    spawnDust(p.color, 2.2);
    return;
  }

  // Vat ly: h = v0^2/(2*g*9.807), T = 2*v0/(g*9.807)
  const v0 = 3.0;
  const gAcc = p.g * 9.807;
  const realJumpM = (v0 * v0) / (2 * gAcc);
  const realDurSec = (2 * v0) / gAcc;

  const jumpPx = Math.min(300, Math.max(10, Math.round(120 / p.g)));
  const durSec = Math.min(7, Math.max(0.3, realDurSec));

  wrapper.style.setProperty('--jh', `-${jumpPx}px`);
  wrapper.style.setProperty('--jdur', `${durSec.toFixed(2)}s`);

  if (p.g <= 0.45) {
    wrapper.classList.add('astro-jump', 'grav-low');
  } else if (p.g >= 2.0) {
    wrapper.classList.add('astro-jump', 'grav-high');
    // Jupiter: set --jh cố định để travel distance rõ ràng
    wrapper.style.setProperty('--jh', '-35px');
  } else {
    wrapper.classList.add('astro-jump');
  }

  const rulerBar = document.getElementById('ruler-bar');
  rulerBar.style.height = jumpPx + 'px';
  document.getElementById('ruler-label').textContent = `~${realJumpM.toFixed(2)}m`;
  const earthJumpM = (v0*v0)/(2*9.807);
  document.getElementById('jump-compare').textContent =
    `Trái Đất: ~${earthJumpM.toFixed(2)}m | ${p.name}: ~${realJumpM.toFixed(2)}m`;

  spawnDust(p.color, durSec);
}

// ════════════════════════════════════════════════
//  DUST PARTICLES
// ════════════════════════════════════════════════
function spawnDust(color, dur) {
  const scene = document.getElementById('scene-wrap');
  const cx = scene.offsetWidth/2;
  function burst() {
    for (let i=0; i<6; i++) {
      const d = document.createElement('div');
      d.className = 'dust-particle';
      const sz = Math.random()*5+2;
      d.style.cssText = `width:${sz}px;height:${sz}px;left:${cx+(Math.random()-.5)*30}px;
        background:${color};--dx:${(Math.random()-.5)*80}px;
        --dy:${-(Math.random()*40+10)}px;--dd:${Math.random()*.6+.4}s;opacity:0.8;`;
      scene.appendChild(d);
      setTimeout(()=>d.remove(),1000);
    }
  }
  clearInterval(window._dustTimer);
  burst();
  window._dustTimer = setInterval(burst, dur*1000);
}


// ════════════════════════════════════════════════
//  MULTI-PLANET FALL COMPARISON
// ════════════════════════════════════════════════
const FALL_COMPARE_IDS = ['moon','mars','earth','jupiter','sun'];
let multiFallTimer = null;

function buildMultiFall() {
  var grid = document.getElementById('multi-fall-grid');
  if (!grid) return;
  grid.innerHTML = '';
  FALL_COMPARE_IDS.forEach(function(id) {
    var p = PLANETS.find(function(x){ return x.id === id; });
    if (!p) return;
    var col = document.createElement('div');
    col.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:3px;flex:1;min-width:60px;max-width:120px;';
    col.innerHTML =
      '<div style="font-family:Orbitron,monospace;font-size:.5rem;color:'+p.color+';text-align:center;white-space:nowrap;margin-bottom:1px;">'+p.name+'</div>'
      +'<div style="font-size:.42rem;color:rgba(255,255,255,0.35);font-family:Orbitron,monospace;text-align:center;margin-bottom:2px;">'+p.g+'g</div>'
      +'<div style="position:relative;height:160px;width:90%;max-width:54px;background:rgba(255,255,255,0.03);border-radius:6px;border:1px solid rgba(255,255,255,0.08);" id="mf-track-'+p.id+'">'
        +'<div id="mf-ball-'+p.id+'" style="position:absolute;top:4px;left:50%;transform:translateX(-50%);width:18px;height:18px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff 0%,'+p.color+' 55%,#000 100%);box-shadow:0 0 10px '+p.color+';"></div>'
        +'<div style="position:absolute;bottom:0;left:0;right:0;height:2px;background:rgba(255,255,255,0.18);border-radius:999px;"></div>'
      +'</div>'
      +'<div id="mf-time-'+p.id+'" style="font-family:Orbitron,monospace;font-size:.58rem;font-weight:700;color:'+p.color+';text-align:center;min-height:16px;margin-top:3px;">0.0s</div>'
      +'<img src="assets/planets/'+p.id+'.jpg" alt="'+p.name+'" '
      +'style="width:36px;height:36px;border-radius:50%;object-fit:cover;border:2px solid '+p.color+'44;margin-top:4px;box-shadow:0 0 8px '+p.color+'55;" '
      +">";
    grid.appendChild(col);
  });
}

function runMultiFall() {
  // Reset all balls to top
  FALL_COMPARE_IDS.forEach(function(id) {
    var ball = document.getElementById('mf-ball-'+id);
    var timeEl = document.getElementById('mf-time-'+id);
    if (ball) ball.style.top = '4px';
    if (timeEl) timeEl.textContent = '0.0s';
  });
  clearInterval(multiFallTimer);
  var elapsed = 0;
  var dt = 1/60;
  var trackH = 110; // usable px inside track
  var dropM = 100;
  var landed = {};
  // Moon is slowest - use its time as cycle length
  var moonG = 0.166 * 9.807;
  var moonTime = Math.sqrt(2 * dropM / moonG); // ~11s

  multiFallTimer = setInterval(function() {
    elapsed += dt;
    FALL_COMPARE_IDS.forEach(function(id) {
      if (landed[id]) return;
      var p = PLANETS.find(function(x){ return x.id === id; });
      if (!p) return;
      var gMs2 = p.g * 9.807;
      var tFall = Math.sqrt(2 * dropM / gMs2);
      var ball = document.getElementById('mf-ball-'+id);
      var timeEl = document.getElementById('mf-time-'+id);
      if (elapsed >= tFall) {
        if (ball) ball.style.top = (trackH) + 'px';
        if (timeEl) timeEl.textContent = tFall.toFixed(2)+'s ✓';
        landed[id] = true;
      } else {
        var progress = (0.5 * gMs2 * elapsed * elapsed) / dropM;
        if (ball) ball.style.top = (4 + progress * (trackH - 4)) + 'px';
        if (timeEl) timeEl.textContent = elapsed.toFixed(2)+'s';
      }
    });
    // All landed? restart after 2s
    if (FALL_COMPARE_IDS.every(function(id){ return landed[id]; })) {
      clearInterval(multiFallTimer);
      setTimeout(runMultiFall, 2000);
    }
  }, 1000/60);
}


// ══ PLANET CAROUSEL ═════════════════════════════════
var carouselIndex = 0;

function carouselRender() {
  var p = PLANETS[carouselIndex];
  var imgEl = document.getElementById('carousel-planet-img');
  var nameEl = document.getElementById('carousel-planet-name');
  var gEl = document.getElementById('carousel-planet-g');
  var dots = document.getElementById('carousel-dots');
  if (!imgEl) return;

  imgEl.innerHTML = makePlanetBall(p, 130);
  imgEl.style.overflow = 'visible';
  nameEl.textContent = p.nameEn || p.name;
  nameEl.style.color = p.color;
  nameEl.style.textShadow = '0 0 16px '+p.color;
  gEl.textContent = p.g + 'g = ' + (p.g*9.807).toFixed(2) + ' m/s²';

  // Dots
  if (dots) {
    dots.innerHTML = '';
    PLANETS.forEach(function(_, i) {
      var d = document.createElement('div');
      d.style.cssText = 'width:7px;height:7px;border-radius:50%;cursor:pointer;transition:.2s;background:'
        +(i===carouselIndex ? PLANETS[i].color : 'rgba(255,255,255,0.2)');
      d.addEventListener('click', function(){ carouselIndex=i; carouselRender(); carouselSelectCurrent(); });
      dots.appendChild(d);
    });
  }
}

function carouselSelectCurrent() {
  selectPlanet(PLANETS[carouselIndex]);
}

function buildCarousel() {
  var prev = document.getElementById('carousel-prev');
  var next = document.getElementById('carousel-next');
  if (!prev) return;
  prev.addEventListener('click', function() {
    carouselIndex = (carouselIndex - 1 + PLANETS.length) % PLANETS.length;
    carouselRender();
    carouselSelectCurrent();
  });
  next.addEventListener('click', function() {
    carouselIndex = (carouselIndex + 1) % PLANETS.length;
    carouselRender();
    carouselSelectCurrent();
  });
  carouselRender();
}

// ════════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initStars();
  buildCards();
  buildSizeComparison();
  buildCarousel();
  buildMultiFall();
  runMultiFall();

  document.getElementById('weight').addEventListener('input', () => {
    if (currentPlanet) updateResult();
  });
  const mfBtn = document.getElementById('multi-fall-restart');
  if (mfBtn) mfBtn.addEventListener('click', function(){ runMultiFall(); });

  document.getElementById('lift-input').addEventListener('input', () => {
    if (currentPlanet) updateStrength(currentPlanet);
  });

  // Default: Earth
  selectPlanet(PLANETS.find(p=>p.id==='earth'));
});
