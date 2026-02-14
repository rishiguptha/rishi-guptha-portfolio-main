import { useState, useEffect } from 'react';

interface ScrollState {
  scrollY: number;
  scrolled: boolean;
  pastFold: boolean;
}

const useScrollState = (): ScrollState => {
  const [state, setState] = useState<ScrollState>({
    scrollY: 0,
    scrolled: false,
    pastFold: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setState({
        scrollY: y,
        scrolled: y > 50,
        pastFold: y > 300,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return state;
};

export default useScrollState;
