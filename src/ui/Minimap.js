// Minimap.js - Real-time circular radar minimap with terrain sampling, landmarks, player FOV cone, and wildlife tracking
export class Minimap {
  constructor(canvas, islandWorld) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.islandWorld = islandWorld;

    this.width = canvas.width || 130;
    this.height = canvas.height || 130;
    this.cx = this.width / 2;
    this.cy = this.height / 2;
    this.radius = this.width / 2 - 4;

    this.zoom = 1.1; // meters per pixel
    this.radarAngle = 0;

    this.coordsEl = document.getElementById('minimap-coords');
    this.northEl = document.getElementById('minimap-north');

    // Pre-rendered offline top-down island map
    this.islandCanvas = null;
    this.islandSize = 320; // 320 meters (-160 to +160)
    this.islandResolution = 256; // 256x256 px
    this.initIslandMap();
  }

  initIslandMap() {
    this.islandCanvas = document.createElement('canvas');
    this.islandCanvas.width = this.islandResolution;
    this.islandCanvas.height = this.islandResolution;
    const ictx = this.islandCanvas.getContext('2d');

    const res = this.islandResolution;
    const halfSpan = this.islandSize / 2;
    const imgData = ictx.createImageData(res, res);
    const data = imgData.data;

    for (let py = 0; py < res; py++) {
      for (let px = 0; px < res; px++) {
        const wx = (px / res) * this.islandSize - halfSpan;
        const wz = (py / res) * this.islandSize - halfSpan;
        const y = this.islandWorld.getHeightAt(wx, wz);

        const idx = (py * res + px) * 4;

        if (y < 0) {
          // Ocean
          if (y < -2.0) {
            data[idx] = 12; data[idx + 1] = 45; data[idx + 2] = 85; data[idx + 3] = 255;
          } else {
            data[idx] = 22; data[idx + 1] = 95; data[idx + 2] = 135; data[idx + 3] = 255;
          }
        } else if (y < 0.8) {
          // Sandy beach
          data[idx] = 210; data[idx + 1] = 185; data[idx + 2] = 130; data[idx + 3] = 255;
        } else if (y < 3.2) {
          // Green inland grass & palms
          data[idx] = 45; data[idx + 1] = 125; data[idx + 2] = 55; data[idx + 3] = 255;
        } else {
          // Rocky hill center
          data[idx] = 95; data[idx + 1] = 105; data[idx + 2] = 115; data[idx + 3] = 255;
        }

        // Freshwater spring lake at center
        const distToCenter = Math.hypot(wx, wz);
        if (distToCenter < 6.5) {
          data[idx] = 56; data[idx + 1] = 189; data[idx + 2] = 248; data[idx + 3] = 255;
        }
      }
    }

    ictx.putImageData(imgData, 0, 0);
  }

  update(player, wildlifeManager, structuresManager) {
    if (!this.ctx || !player) return;

    const ctx = this.ctx;
    const px = player.position.x;
    const pz = player.position.z;
    const yaw = player.rotationY; // Player facing yaw

    // Update coordinates UI
    if (this.coordsEl) {
      this.coordsEl.innerText = `X: ${Math.round(px)} | Z: ${Math.round(pz)}`;
    }

    // Clear
    ctx.clearRect(0, 0, this.width, this.height);

    ctx.save();
    // Circular clipping
    ctx.beginPath();
    ctx.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);
    ctx.clip();

    // 1. Fill ocean base
    ctx.fillStyle = '#0c2d48';
    ctx.fillRect(0, 0, this.width, this.height);

    // 2. Draw pre-rendered Island Map translated & scaled relative to player
    if (this.islandCanvas) {
      ctx.save();
      ctx.translate(this.cx, this.cy);

      // World units to pixels
      const scale = (this.islandResolution / this.islandSize) * (1 / this.zoom);
      const imgPixelSize = this.islandSize * scale;

      const drawX = (-this.islandSize / 2 - px) * scale;
      const drawZ = (-this.islandSize / 2 - pz) * scale;

      ctx.drawImage(this.islandCanvas, drawX, drawZ, imgPixelSize, imgPixelSize);
      ctx.restore();
    }

    // Function to map world coordinate to minimap coordinate
    const worldToMap = (wx, wz) => {
      const dx = (wx - px) * (1 / this.zoom);
      const dz = (wz - pz) * (1 / this.zoom);
      return {
        x: this.cx + dx,
        y: this.cy + dz,
        inBounds: Math.hypot(dx, dz) <= this.radius - 2
      };
    };

    // 3. Draw Landmarks
    // Freshwater Pool
    const pool = worldToMap(0, 0);
    if (pool.inBounds) {
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(pool.x, pool.y, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    // Sunken Shipwreck Galleon (120, -95)
    const ship = worldToMap(120, -95);
    if (ship.inBounds) {
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(ship.x, ship.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // 4. Draw Structures
    if (structuresManager && structuresManager.structures) {
      structuresManager.structures.forEach(s => {
        const m = worldToMap(s.position.x, s.position.z);
        if (m.inBounds) {
          ctx.beginPath();
          if (s.type === 'campfire') {
            ctx.fillStyle = '#ef4444'; // Red-orange fire
            ctx.arc(m.x, m.y, 3.5, 0, Math.PI * 2);
          } else if (s.type === 'shelter') {
            ctx.fillStyle = '#10b981'; // Green shelter
            ctx.arc(m.x, m.y, 4, 0, Math.PI * 2);
          } else if (s.type === 'workbench') {
            ctx.fillStyle = '#8b5cf6'; // Purple workbench
            ctx.arc(m.x, m.y, 3.5, 0, Math.PI * 2);
          } else if (s.type === 'beacon') {
            ctx.fillStyle = s.isLit ? '#fbbf24' : '#64748b'; // Yellow lit beacon
            ctx.arc(m.x, m.y, 5, 0, Math.PI * 2);
          }
          ctx.fill();
        }
      });
    }

    // 5. Draw Wildlife
    if (wildlifeManager) {
      // Land Animals
      if (wildlifeManager.landAnimals) {
        wildlifeManager.landAnimals.forEach(a => {
          const m = worldToMap(a.group.position.x, a.group.position.z);
          if (m.inBounds) {
            ctx.beginPath();
            ctx.arc(m.x, m.y, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = a.state === 'charge' ? '#ef4444' : (a.isPassive ? '#a3e635' : '#fbbf24');
            ctx.fill();
          }
        });
      }
      // Sea Animals
      if (wildlifeManager.seaAnimals) {
        wildlifeManager.seaAnimals.forEach(s => {
          const m = worldToMap(s.group.position.x, s.group.position.z);
          if (m.inBounds) {
            ctx.beginPath();
            ctx.arc(m.x, m.y, s.type === 'shark' ? 3.5 : 2.5, 0, Math.PI * 2);
            ctx.fillStyle = s.type === 'shark' ? (s.state === 'charge' ? '#dc2626' : '#f97316') : '#38bdf8';
            ctx.fill();
          }
        });
      }
    }

    // 6. Rotating Radar Sweep Effect
    this.radarAngle += 0.035;
    ctx.save();
    ctx.translate(this.cx, this.cy);
    ctx.rotate(this.radarAngle);
    const grad = ctx.createLinearGradient(0, 0, this.radius, 0);
    grad.addColorStop(0, 'rgba(56, 189, 248, 0.25)');
    grad.addColorStop(1, 'rgba(56, 189, 248, 0.0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, this.radius, 0, 0.45);
    ctx.lineTo(0, 0);
    ctx.fill();
    ctx.restore();

    // 7. Player Indicator & Vision Cone
    ctx.save();
    ctx.translate(this.cx, this.cy);
    // In canvas 2D, Three.js rotationY: forward is -Z (top of map)
    const angle2D = -yaw - Math.PI / 2;

    // Vision cone
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, 24, angle2D - 0.45, angle2D + 0.45);
    ctx.lineTo(0, 0);
    ctx.fillStyle = 'rgba(56, 189, 248, 0.35)';
    ctx.fill();

    // Player Direction Arrow
    ctx.rotate(angle2D);
    ctx.beginPath();
    ctx.moveTo(7, 0);
    ctx.lineTo(-4, -4);
    ctx.lineTo(-2, 0);
    ctx.lineTo(-4, 4);
    ctx.closePath();
    ctx.fillStyle = '#38bdf8';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.restore();

    ctx.restore(); // Restore clip

    // Radar Outer Ring & Compass Marks
    ctx.beginPath();
    ctx.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Inner distance ring
    ctx.beginPath();
    ctx.arc(this.cx, this.cy, this.radius * 0.5, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // North marker 'N' on radar perimeter
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 10px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('N', this.cx, 9);
  }
}
