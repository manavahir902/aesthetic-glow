import { useState, useRef, useCallback } from 'react';

interface EscapingButtonProps {
  children: React.ReactNode;
  className?: string;
}

const EscapingButton = ({ children, className = '' }: EscapingButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const escape = useCallback(() => {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 100;
    
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;
    
    // Ensure the button stays within viewport bounds
    const clampedX = Math.max(-150, Math.min(150, newX));
    const clampedY = Math.max(-50, Math.min(50, newY));
    
    setPosition({ x: clampedX, y: clampedY });
  }, []);

  return (
    <button
      ref={buttonRef}
      onMouseEnter={escape}
      onTouchStart={escape}
      className={`transition-all duration-300 ease-out ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {children}
    </button>
  );
};

export default EscapingButton;
