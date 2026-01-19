import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ChevronRight } from 'lucide-react';
import { TECHNICAL_SKILLS } from '@/lib/constants';

interface TerminalLine {
    type: 'command' | 'output' | 'comment';
    text: string;
    delay: number;
}

const TerminalSkills: React.FC = () => {
    const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [currentText, setCurrentText] = useState('');
    const terminalRef = useRef<HTMLDivElement>(null);
    const hasStarted = useRef(false);

    const lines: TerminalLine[] = [
        { type: 'comment', text: '# Welcome to my terminal — let\'s see what I can do 🚀', delay: 50 },
        { type: 'command', text: 'cat skills.json | jq \'.languages\'', delay: 30 },
        { type: 'output', text: `["${TECHNICAL_SKILLS['Languages'].join('", "')}"]`, delay: 10 },
        { type: 'command', text: 'pip list --installed | grep -E "torch|tensorflow"', delay: 30 },
        { type: 'output', text: TECHNICAL_SKILLS['ML & AI'].slice(0, 4).join(' • '), delay: 10 },
        { type: 'output', text: TECHNICAL_SKILLS['ML & AI'].slice(4).join(' • '), delay: 10 },
        { type: 'command', text: 'aws configure list-profiles && gcloud config list', delay: 30 },
        { type: 'output', text: TECHNICAL_SKILLS['Cloud & DevOps'].join(' | '), delay: 10 },
        { type: 'command', text: 'airflow dags list --output table', delay: 30 },
        { type: 'output', text: TECHNICAL_SKILLS['Data & Analytics'].join(' → '), delay: 10 },
        { type: 'comment', text: '# Ready to build something awesome? Let\'s connect! 💡', delay: 50 },
    ];

    useEffect(() => {
        if (hasStarted.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted.current) {
                    hasStarted.current = true;
                    startTyping();
                }
            },
            { threshold: 0.3 }
        );

        if (terminalRef.current) {
            observer.observe(terminalRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const startTyping = () => {
        let lineIdx = 0;

        const typeNextLine = () => {
            if (lineIdx >= lines.length) {
                setIsTyping(false);
                return;
            }

            const line = lines[lineIdx];
            let charIdx = 0;
            setCurrentText('');

            const typeChar = () => {
                if (charIdx < line.text.length) {
                    setCurrentText(line.text.substring(0, charIdx + 1));
                    charIdx++;
                    setTimeout(typeChar, line.delay);
                } else {
                    setDisplayedLines(prev => [...prev, line]);
                    setCurrentText('');
                    lineIdx++;
                    setTimeout(typeNextLine, 300);
                }
            };

            typeChar();
        };

        typeNextLine();
    };

    const getLineColor = (type: string) => {
        switch (type) {
            case 'command': return 'text-secondary';
            case 'output': return 'text-foreground/80';
            case 'comment': return 'text-muted-foreground italic';
            default: return 'text-foreground';
        }
    };

    const getLinePrefix = (type: string) => {
        switch (type) {
            case 'command': return <span className="text-primary mr-2">❯</span>;
            case 'output': return <span className="text-muted-foreground mr-2">→</span>;
            case 'comment': return null;
            default: return null;
        }
    };

    return (
        <motion.div
            ref={terminalRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl mx-auto"
        >
            {/* Terminal Window */}
            <div className="rounded-lg overflow-hidden border border-border shadow-2xl shadow-primary/5">
                {/* Terminal Header */}
                <div className="bg-card flex items-center gap-2 px-4 py-3 border-b border-border">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 text-center">
                        <span className="text-xs font-mono text-muted-foreground flex items-center justify-center gap-2">
                            <Terminal size={12} />
                            rishi@portfolio ~ /skills
                        </span>
                    </div>
                </div>

                {/* Terminal Body */}
                <div className="bg-background p-6 font-mono text-sm min-h-[300px] max-h-[400px] overflow-y-auto scanline">
                    <AnimatePresence>
                        {displayedLines.map((line, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={`mb-2 ${getLineColor(line.type)}`}
                            >
                                {getLinePrefix(line.type)}
                                <span>{line.text}</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Current typing line */}
                    {isTyping && currentText && (
                        <div className={`mb-2 ${getLineColor(lines[displayedLines.length]?.type || 'command')}`}>
                            {getLinePrefix(lines[displayedLines.length]?.type || 'command')}
                            <span>{currentText}</span>
                            <span className="cursor-blink ml-0.5 inline-block w-2 h-4 bg-primary" />
                        </div>
                    )}

                    {/* Waiting cursor */}
                    {!isTyping && (
                        <div className="text-secondary flex items-center">
                            <span className="text-primary mr-2">❯</span>
                            <span className="cursor-blink inline-block w-2 h-4 bg-primary" />
                        </div>
                    )}
                </div>
            </div>

            {/* Skills grid below terminal */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4"
            >
                {Object.entries(TECHNICAL_SKILLS).map(([category, skills], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass rounded-lg p-4 card-hover"
                    >
                        <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                            <ChevronRight size={12} />
                            {category}
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                            {skills.slice(0, 6).map((skill) => (
                                <span
                                    key={skill}
                                    className="text-xs px-2 py-1 rounded-md bg-primary/10 text-foreground/80 border border-primary/20"
                                >
                                    {skill}
                                </span>
                            ))}
                            {skills.length > 6 && (
                                <span className="text-xs px-2 py-1 text-muted-foreground">
                                    +{skills.length - 6} more
                                </span>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default TerminalSkills;
