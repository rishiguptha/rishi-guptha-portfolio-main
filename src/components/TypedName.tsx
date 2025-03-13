
import React, { useState, useEffect, useRef } from 'react';

interface TypedNameProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

const TypedName: React.FC<TypedNameProps> = ({ 
  text, 
  speed = 100, 
  className = "", 
  onComplete 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);
  const index = useRef(0);
  
  useEffect(() => {
    if (isTyping) {
      const timer = setTimeout(() => {
        setDisplayText(text.substring(0, index.current + 1));
        index.current += 1;
        
        if (index.current === text.length) {
          setIsTyping(false);
          if (onComplete) onComplete();
        }
      }, speed);
      
      return () => clearTimeout(timer);
    }
  }, [displayText, isTyping, speed, text, onComplete]);
  
  // Blinking cursor effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(blinkInterval);
  }, []);
  
  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className="text-primary">{displayText}</span>
      <span 
        className={`ml-1 w-[2px] h-[1.2em] bg-primary transition-opacity duration-100 ${
          cursorVisible ? 'opacity-100' : 'opacity-0'
        }`}
      ></span>
    </div>
  );
};

export default TypedName;
