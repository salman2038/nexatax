import { useEffect, useRef } from 'react';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      // Draw subtle grid
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.05)';
      ctx.lineWidth = 1;
      
      const gridSize = 100;
      for(let x = (time * 10) % gridSize; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for(let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw financial growth curves
      const drawFinancialCurve = (
        startY: number, 
        amplitude: number, 
        frequency: number, 
        speed: number, 
        color: string, 
        lineWidth: number, 
        fillColor?: string
      ) => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        ctx.lineTo(0, canvas.height * startY);
        
        let lastX = 0;
        let lastY = canvas.height * startY;

        for (let i = 0; i <= canvas.width + 50; i += 50) {
          const progress = i / canvas.width;
          // Exponential upward curve for financial growth (lower Y is higher up)
          const baseTrend = canvas.height * startY - Math.pow(progress, 1.5) * canvas.height * 0.3;
          const y = baseTrend + Math.sin(i * frequency + time * speed) * amplitude;
          
          ctx.lineTo(i, y);
          
          lastX = i;
          lastY = y;
        }

        if (fillColor) {
          ctx.lineTo(lastX, canvas.height);
          ctx.fillStyle = fillColor;
          ctx.fill();
        }
        
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.stroke();

        // Draw nodes on the main line
        if (!fillColor) {
            for (let i = 0; i <= canvas.width + 50; i += 150) {
                const progress = i / canvas.width;
                const baseTrend = canvas.height * startY - Math.pow(progress, 1.5) * canvas.height * 0.3;
                const y = baseTrend + Math.sin(i * frequency + time * speed) * amplitude;
                
                ctx.beginPath();
                ctx.arc(i, y, 4, 0, Math.PI * 2);
                ctx.fillStyle = '#fff';
                ctx.fill();
                ctx.lineWidth = 2;
                ctx.strokeStyle = color;
                ctx.stroke();
            }
        }
      };

      // Background filled curve
      drawFinancialCurve(0.85, 30, 0.002, 1.2, 'rgba(250, 90, 42, 0.0)', 0, 'rgba(250, 90, 42, 0.02)');
      
      // Secondary curve
      drawFinancialCurve(0.75, 45, 0.0015, 0.8, 'rgba(15, 23, 42, 0.04)', 2);

      // Primary orange curve
      drawFinancialCurve(0.65, 25, 0.003, 1.5, 'rgba(250, 90, 42, 0.15)', 3);


      // Floating math/tax symbols
      ctx.font = 'bold 24px Inter, sans-serif';
      const symbols = ['%', '$', '+', '-', '€'];
      const symbolCount = Math.floor(canvas.width / 150);
      
      for(let i = 0; i < symbolCount; i++) {
        const xOffset = (time * 20 + i * 200) % (canvas.width + 100) - 50;
        const yOffset = canvas.height * 0.3 + Math.sin(time + i) * 100;
        
        ctx.fillStyle = `rgba(148, 163, 184, ${0.05 + Math.sin(time * 2 + i) * 0.02})`;
        ctx.fillText(symbols[i % symbols.length], xOffset, yOffset);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}
