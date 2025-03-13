
import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={() => {
        toggleTheme();
        // Add ripple effect on click
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 1000);
      }}
      className="p-2 rounded-full bg-secondary/80 hover:bg-secondary/60 focus-ring transition-all duration-300 hover:scale-110 active:scale-90 relative overflow-hidden"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative">
        {theme === 'light' ? (
          <Moon className="h-5 w-5 text-foreground/80 animate-pulse-subtle" />
        ) : (
          <Sun className="h-5 w-5 text-foreground/80 animate-rotate-slow" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
