import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

const KONAMI_CODE = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

interface KonamiCodeProps {
    onActivate?: () => void;
}

const KonamiCode: React.FC<KonamiCodeProps> = ({ onActivate }) => {
    const [inputSequence, setInputSequence] = useState<string[]>([]);
    const [isActivated, setIsActivated] = useState(false);
    const [showEasterEgg, setShowEasterEgg] = useState(false);

    const secretMessages = [
        "🎮 Achievement Unlocked: You found the secret!",
        "🚀 Fun fact: I once stayed up 48 hours debugging a race condition",
        "☕ Coffee consumed during this portfolio: ~127 cups",
        "🤖 Yes, I actually built this myself (with AI assistance 😉)",
        "💡 Pro tip: The best bugs are the ones you create at 3 AM",
        "🎯 Easter egg activated! You're officially a power user",
    ];

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        const key = e.code;

        setInputSequence(prev => {
            const newSequence = [...prev, key].slice(-10);

            // Check if the sequence matches
            if (newSequence.length === 10 &&
                newSequence.every((k, i) => k === KONAMI_CODE[i])) {
                setIsActivated(true);
                setShowEasterEgg(true);
                onActivate?.();

                // Show toast
                const randomMessage = secretMessages[Math.floor(Math.random() * secretMessages.length)];
                toast.success(randomMessage, {
                    duration: 5000,
                    icon: '🎉',
                });

                // Hide after 5 seconds
                setTimeout(() => {
                    setShowEasterEgg(false);
                }, 5000);

                return [];
            }

            return newSequence;
        });
    }, [onActivate]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    return (
        <AnimatePresence>
            {showEasterEgg && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed inset-0 z-[200] pointer-events-none flex items-center justify-center"
                >
                    {/* Confetti-like particles */}
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                opacity: 1,
                                x: 0,
                                y: 0,
                                scale: 0
                            }}
                            animate={{
                                opacity: [1, 1, 0],
                                x: (Math.random() - 0.5) * 800,
                                y: (Math.random() - 0.5) * 800,
                                scale: [0, 1, 0.5],
                                rotate: Math.random() * 720
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeOut",
                                delay: Math.random() * 0.3
                            }}
                            className="absolute w-3 h-3 rounded-full"
                            style={{
                                backgroundColor: [
                                    '#6366f1', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'
                                ][Math.floor(Math.random() * 5)]
                            }}
                        />
                    ))}

                    {/* Center message */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="bg-gradient-to-r from-primary via-secondary to-accent p-1 rounded-2xl"
                    >
                        <div className="bg-background px-8 py-6 rounded-xl text-center">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 0.5 }}
                                className="text-5xl mb-4"
                            >
                                🎮
                            </motion.div>
                            <h3 className="text-2xl font-bold text-gradient mb-2">
                                Developer Mode Activated!
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                You know the Konami Code. We should be friends.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default KonamiCode;
