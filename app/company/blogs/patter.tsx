'use client'

import React, { useRef, useEffect } from 'react';

interface SquaresProps {
  direction?: 'diagonal' | 'up' | 'right' | 'down' | 'left';
  speed?: number;
  borderColor?: string;        // grid lines color
  squareSize?: number;
  hoverFillColor?: string;     // optional, not used in lightweight version
  className?: string;
}

const Squares: React.FC<SquaresProps> = ({
  direction = 'diagonal',
  speed = 1,
 borderColor = 'rgba(160, 160, 160, 0.5)',

  squareSize = 30,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
};


    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // transparent background

      for (let x = -squareSize; x < canvas.width + squareSize; x += squareSize) {
        for (let y = -squareSize; y < canvas.height + squareSize; y += squareSize) {
          const drawX = x + (offset.current.x % squareSize);
          const drawY = y + (offset.current.y % squareSize);

          ctx.strokeStyle = borderColor;   // grid line color
          ctx.lineWidth = 1;               // optional: line thickness
          ctx.strokeRect(drawX, drawY, squareSize, squareSize);
        }
      }
    };

    const animate = () => {
      switch (direction) {
        case 'right': offset.current.x -= speed; break;
        case 'left': offset.current.x += speed; break;
        case 'up': offset.current.y += speed; break;
        case 'down': offset.current.y -= speed; break;
        case 'diagonal':
          offset.current.x -= speed;
          offset.current.y -= speed;
          break;
      }

      draw();
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [direction, speed, borderColor, squareSize]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full block ${className || ''}`}
    />
  );
};

export default Squares;
