import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, FileText, Cpu, Layers, Search, MessageSquare, ArrowRight } from 'lucide-react';

interface PipelineStage {
    id: string;
    icon: React.ReactNode;
    label: string;
    description: string;
    color: string;
}

const RAGPipelineViz: React.FC = () => {
    const [activeStage, setActiveStage] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const stages: PipelineStage[] = [
        {
            id: 'ingest',
            icon: <FileText size={20} />,
            label: 'Documents',
            description: 'Ingest PDFs, docs, and structured data',
            color: 'text-amber-400',
        },
        {
            id: 'chunk',
            icon: <Layers size={20} />,
            label: 'Chunking',
            description: 'Split into semantic chunks with overlap',
            color: 'text-orange-400',
        },
        {
            id: 'embed',
            icon: <Cpu size={20} />,
            label: 'Embeddings',
            description: 'Encode with Sentence Transformers',
            color: 'text-primary',
        },
        {
            id: 'store',
            icon: <Database size={20} />,
            label: 'Vector Store',
            description: 'Index in FAISS / Pinecone',
            color: 'text-emerald-400',
        },
        {
            id: 'query',
            icon: <Search size={20} />,
            label: 'Semantic Search',
            description: 'Retrieve top-k relevant chunks',
            color: 'text-cyan-400',
        },
        {
            id: 'generate',
            icon: <MessageSquare size={20} />,
            label: 'LLM Response',
            description: 'Generate contextual answers',
            color: 'text-violet-400',
        },
    ];

    // Start animation when in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setHasStarted(true);
                    setIsAnimating(true);
                }
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    // Animate through stages
    useEffect(() => {
        if (!isAnimating) return;

        const interval = setInterval(() => {
            setActiveStage((prev) => {
                if (prev >= stages.length - 1) {
                    return 0; // Loop back
                }
                return prev + 1;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [isAnimating, stages.length]);

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-5xl mx-auto"
        >
            {/* Section header */}
            <div className="text-center mb-10">
                <h3 className="text-2xl font-bold mb-2">RAG Pipeline Architecture</h3>
                <p className="text-muted-foreground">
                    Production RAG system built at Nevara AI — processing 1M+ tokens daily
                </p>
            </div>

            {/* Pipeline visualization */}
            <div className="relative p-8 rounded-2xl bg-card/30 border border-border backdrop-blur-sm">
                {/* Pipeline stages */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-2 items-center">
                    {stages.map((stage, index) => (
                        <React.Fragment key={stage.id}>
                            {/* Stage node */}
                            <motion.div
                                className={`relative flex flex-col items-center cursor-pointer group`}
                                onHoverStart={() => {
                                    setIsAnimating(false);
                                    setActiveStage(index);
                                }}
                                onHoverEnd={() => setIsAnimating(true)}
                            >
                                {/* Icon container */}
                                <motion.div
                                    className={`
                                        w-16 h-16 rounded-xl flex items-center justify-center
                                        border transition-all duration-300
                                        ${activeStage === index
                                            ? 'bg-primary/20 border-primary shadow-lg shadow-primary/20'
                                            : 'bg-stone-800/50 border-stone-700/50 hover:border-stone-600'}
                                    `}
                                    animate={{
                                        scale: activeStage === index ? 1.1 : 1,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className={`${activeStage === index ? 'text-primary' : stage.color} transition-colors`}>
                                        {stage.icon}
                                    </span>
                                </motion.div>

                                {/* Label */}
                                <span className={`
                                    mt-2 text-xs font-medium text-center transition-colors
                                    ${activeStage === index ? 'text-primary' : 'text-muted-foreground'}
                                `}>
                                    {stage.label}
                                </span>

                                {/* Active indicator */}
                                <AnimatePresence>
                                    {activeStage === index && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className="absolute -bottom-8"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            {/* Arrow connector */}
                            {index < stages.length - 1 && (
                                <motion.div
                                    className="hidden md:flex items-center"
                                    animate={{
                                        opacity: activeStage === index ? 1 : 0.3,
                                    }}
                                >
                                    <ArrowRight
                                        size={16}
                                        className={`
                                            ${activeStage === index ? 'text-primary' : 'text-stone-600'}
                                            transition-colors
                                        `}
                                    />
                                </motion.div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Data particle animation */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
                    <AnimatePresence>
                        {hasStarted && (
                            <motion.div
                                key={activeStage}
                                className="absolute top-1/2 w-3 h-3 rounded-full bg-primary/60 shadow-lg shadow-primary/40"
                                initial={{
                                    left: `${(activeStage / (stages.length - 1)) * 80 + 10}%`,
                                    opacity: 0,
                                    scale: 0
                                }}
                                animate={{
                                    left: `${((activeStage + 1) / (stages.length - 1)) * 80 + 10}%`,
                                    opacity: [0, 1, 1, 0],
                                    scale: [0.5, 1, 1, 0.5]
                                }}
                                transition={{ duration: 1.5, ease: 'easeInOut' }}
                            />
                        )}
                    </AnimatePresence>
                </div>

                {/* Description panel */}
                <motion.div
                    className="mt-12 p-4 rounded-lg bg-stone-800/30 border border-stone-700/30 text-center"
                    key={activeStage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <span className={`font-semibold ${stages[activeStage].color}`}>
                        {stages[activeStage].label}:
                    </span>{' '}
                    <span className="text-muted-foreground">
                        {stages[activeStage].description}
                    </span>
                </motion.div>

                {/* Tech stack badges */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {['LangChain', 'FAISS', 'Sentence Transformers', 'OpenAI API', 'FastAPI', 'AWS EC2'].map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-xs rounded-full bg-stone-800/50 text-stone-400 border border-stone-700/50"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default RAGPipelineViz;
