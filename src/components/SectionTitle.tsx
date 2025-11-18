import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <motion.div 
      className="mb-16 relative inline-block"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      {/* Decorative block behind */}
      <div className="absolute top-0 left-0 w-full h-full bg-secondary transform translate-x-2 translate-y-2 -z-10 border-2 border-black hidden md:block"></div>
      
      <div className="bg-white dark:bg-card border-2 border-black dark:border-white p-4 md:p-6 inline-block">
        <h2 className="text-sm md:text-base font-black uppercase tracking-widest text-primary mb-1 border-b-2 border-black dark:border-white pb-1 inline-block">
          {title}
        </h2>
        <p className="text-3xl md:text-5xl font-black text-foreground uppercase mt-2 leading-none">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
};

export default SectionTitle;