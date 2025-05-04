
import React, { useEffect, useRef } from 'react';

interface SparkleProps {
  size?: number;
}

const SparkleTrail: React.FC<SparkleProps> = ({ size = 20 }) => {
  const sparklesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sparklesContainer = sparklesContainerRef.current;
    if (!sparklesContainer) return;

    const createSparkle = (x: number, y: number) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      
      const hue = Math.random() * 60 + 260; // Purple to pink range
      sparkle.style.background = `radial-gradient(circle, hsla(${hue}, 100%, 75%, 0.8) 0%, hsla(${hue}, 100%, 75%, 0) 70%)`;
      
      const sizeRandom = Math.random() * size + 5;
      sparkle.style.width = `${sizeRandom}px`;
      sparkle.style.height = `${sizeRandom}px`;
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      
      sparklesContainer.appendChild(sparkle);
      
      // Animate and remove
      setTimeout(() => {
        sparkle.style.opacity = '0';
        setTimeout(() => {
          sparkle?.parentNode?.removeChild(sparkle);
        }, 300);
      }, 100);
    };

    let lastX = 0;
    let lastY = 0;
    let throttleTimer: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // Only create sparkles if mouse has moved enough
      const distance = Math.sqrt(Math.pow(x - lastX, 2) + Math.pow(y - lastY, 2));
      
      if (distance > 15 || !throttleTimer) {
        lastX = x;
        lastY = y;
        
        if (throttleTimer) {
          clearTimeout(throttleTimer);
        }
        
        throttleTimer = window.setTimeout(() => {
          createSparkle(x, y);
          throttleTimer = null;
        }, 10);
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [size]);

  return <div ref={sparklesContainerRef} className="fixed inset-0 pointer-events-none z-50" />;
};

export default SparkleTrail;
