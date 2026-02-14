import React from 'react';
import { motion } from 'framer-motion';

const HeroCodeSnippet: React.FC = () => {
    const codeLines = [
        { indent: 0, content: 'class ', highlight: 'RishiGuptha', suffix: ':' },
        { indent: 1, content: 'role = ', highlight: '"AI & Data Engineer"', suffix: '' },
        { indent: 1, content: 'stack = ', highlight: '["Python", "PyTorch", "AWS", "Spark"]', suffix: '' },
        { indent: 1, content: '', highlight: '', suffix: '' },
        { indent: 1, content: 'def ', highlight: 'transform', suffix: '(self, raw_data):' },
        { indent: 2, content: '"""From raw data to production insights"""', highlight: '', suffix: '', isComment: true },
        { indent: 2, content: 'return ', highlight: 'self.pipeline(raw_data)', suffix: '' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative max-w-xl"
        >
            {/* Code container with warm styling */}
            <div className="rounded-lg overflow-hidden border border-stone-700/50 bg-stone-900/60 backdrop-blur-sm">
                {/* Header bar */}
                <div className="flex items-center gap-2 px-4 py-2 border-b border-stone-700/30 bg-stone-800/30">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <span className="text-xs text-stone-500 font-mono ml-2">profile.py</span>
                </div>

                {/* Code content */}
                <div className="p-5 font-mono text-sm leading-relaxed">
                    {codeLines.map((line, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.08 }}
                            className="flex"
                            style={{ paddingLeft: `${line.indent * 1.5}rem` }}
                        >
                            {/* Line number */}
                            <span className="text-stone-600 w-6 text-right mr-4 select-none text-xs">
                                {index + 1}
                            </span>

                            {/* Code content */}
                            <span>
                                {line.isComment ? (
                                    <span className="text-stone-500 italic">{line.content}</span>
                                ) : (
                                    <>
                                        <span className="text-stone-400">{line.content}</span>
                                        <span className="text-primary">{line.highlight}</span>
                                        <span className="text-stone-400">{line.suffix}</span>
                                    </>
                                )}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative gradient blur */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-amber-500/5 rounded-2xl blur-2xl -z-10" />
        </motion.div>
    );
};

export default HeroCodeSnippet;
