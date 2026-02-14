import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import useScrollState from '@/hooks/useScrollState';

const ScrollToTop: React.FC = () => {
    const { pastFold } = useScrollState();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {pastFold && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    onClick={scrollToTop}
                    whileHover={{ y: -5 }}
                    className="fixed bottom-8 right-8 z-40 p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-all"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-5 h-5 text-muted-foreground" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
