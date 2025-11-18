import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { NAV_LINKS } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-black dark:border-white">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            {/* Brutalist Logo */}
            <motion.a 
              href="#" 
              className="text-2xl font-black tracking-tighter bg-primary text-white px-2"
              whileHover={{ rotate: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              RISHI.
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="font-bold text-sm uppercase tracking-wide px-2 py-1 border-2 border-transparent hover:border-black dark:hover:border-white hover:bg-secondary hover:text-black transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
              
              <div className="md:hidden">
                <motion.button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 border-2 border-black dark:border-white"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isMenuOpen ? 'close' : 'open'}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.div>
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-t-2 border-black dark:border-white bg-background overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-2">
                  {NAV_LINKS.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="block p-4 border-2 border-transparent hover:border-black dark:hover:border-white hover:bg-secondary font-bold text-center uppercase tracking-widest"
                    >
                      {link.name}
                    </motion.a>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </nav>
  );
};

export default Navbar;