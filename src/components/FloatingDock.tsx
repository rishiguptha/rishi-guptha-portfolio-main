import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DockItem {
    label: string;
    href: string;
}

const FloatingDock: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    const dockItems: DockItem[] = [
        { label: 'Home', href: '#' },
        { label: 'About', href: '#about' },
        { label: 'Resume', href: '#resume' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ];

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide/show dock based on scroll direction
            if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollY.current = currentScrollY;

            // Determine active section
            const sections = ['contact', 'projects', 'resume', 'about'];
            let current = 'home';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2) {
                        current = section;
                        break;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent, href: string) => {
        e.preventDefault();
        if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.nav
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-6 left-1/2 z-50"
                    style={{ transform: 'translateX(-50%)' }}
                >
                    <motion.div
                        className="flex items-center gap-1 px-2 py-2 rounded-full bg-card/95 backdrop-blur-xl border border-border/50 shadow-2xl shadow-black/20"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        {dockItems.map((item) => {
                            const isActive = activeSection === item.href.replace('#', '') ||
                                (item.href === '#' && activeSection === 'home');

                            return (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => handleClick(e, item.href)}
                                    className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                                            ? 'bg-primary text-primary-foreground'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="active-dot"
                                            className="w-1.5 h-1.5 rounded-full bg-primary-foreground"
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                    {item.label}
                                </motion.a>
                            );
                        })}
                    </motion.div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};

export default FloatingDock;
