export default function confetti(options = {}) {
  const particleCount = options.particleCount || 60;
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '999999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  const colors = ['#8b5cf6', '#a855f7', '#38bdf8', '#06b6d4', '#ec4899', '#f59e0b'];
  const particles = [];

  const originX = width / 2;
  const originY = height * (options.origin?.y || 0.6);

  for (let i = 0; i < particleCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 12 + 4;
    particles.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 6,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10
    });
  }

  let animationFrame;
  let startTime = Date.now();

  function render() {
    const elapsed = Date.now() - startTime;
    ctx.clearRect(0, 0, width, height);

    let activeCount = 0;
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.25; // gravity
      p.alpha -= 0.015;
      p.rotation += p.vRot;

      if (p.alpha > 0) {
        activeCount++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    if (activeCount > 0 && elapsed < 3000) {
      animationFrame = requestAnimationFrame(render);
    } else {
      cancelAnimationFrame(animationFrame);
      if (document.body.contains(canvas)) {
        document.body.removeChild(canvas);
      }
    }
  }

  render();
}
