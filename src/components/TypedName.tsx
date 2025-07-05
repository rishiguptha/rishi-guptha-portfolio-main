import React, { useState, useEffect } from 'react';

interface TypedNameProps {
  text: string;
  speed?: number;
  className?: string;
}

const TypedName: React.FC<TypedNameProps> = ({ text, speed = 150, className = "" }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeoutId);
    } else {
      setIsComplete(true);
    }
  }, [displayedText, text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <span className="inline-block w-[3px] h-[1em] bg-current animate-pulse ml-1" />
      )}
    </span>
  );
};

export default TypedName;
