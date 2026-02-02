import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
  decay: number;
}

interface Firework {
  x: number;
  y: number;
  targetY: number;
  speed: number;
  color: string;
  exploded: boolean;
  particles: Particle[];
}

const FireworksCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const fireworksRef = useRef<Firework[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const colors = [
      'hsl(51, 100%, 50%)',   // Gold
      'hsl(270, 60%, 70%)',    // Lavender
      'hsl(40, 100%, 60%)',    // Warm gold
      'hsl(280, 50%, 75%)',    // Soft purple
      'hsl(320, 60%, 70%)',    // Pink lavender
    ];

    const createFirework = () => {
      const firework: Firework = {
        x: Math.random() * canvas.width,
        y: canvas.height,
        targetY: Math.random() * (canvas.height * 0.5) + 50,
        speed: 3 + Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        exploded: false,
        particles: [],
      };
      fireworksRef.current.push(firework);
    };

    const explodeFirework = (firework: Firework) => {
      const particleCount = 60 + Math.floor(Math.random() * 40);
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 2 + Math.random() * 4;
        firework.particles.push({
          x: firework.x,
          y: firework.y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          alpha: 1,
          color: firework.color,
          size: 1 + Math.random() * 2,
          decay: 0.01 + Math.random() * 0.015,
        });
      }
      firework.exploded = true;
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 0, 26, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Randomly create new fireworks
      if (Math.random() < 0.03) {
        createFirework();
      }

      fireworksRef.current = fireworksRef.current.filter((firework) => {
        if (!firework.exploded) {
          // Draw rising firework
          ctx.beginPath();
          ctx.arc(firework.x, firework.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = firework.color;
          ctx.fill();

          // Trail
          ctx.beginPath();
          ctx.moveTo(firework.x, firework.y);
          ctx.lineTo(firework.x, firework.y + 15);
          ctx.strokeStyle = firework.color;
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.5;
          ctx.stroke();
          ctx.globalAlpha = 1;

          firework.y -= firework.speed;

          if (firework.y <= firework.targetY) {
            explodeFirework(firework);
          }
          return true;
        } else {
          // Update and draw particles
          firework.particles = firework.particles.filter((particle) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += 0.05; // Gravity
            particle.alpha -= particle.decay;

            if (particle.alpha > 0) {
              ctx.beginPath();
              ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
              ctx.fillStyle = particle.color;
              ctx.globalAlpha = particle.alpha;
              ctx.fill();
              ctx.globalAlpha = 1;
              return true;
            }
            return false;
          });

          return firework.particles.length > 0;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default FireworksCanvas;
