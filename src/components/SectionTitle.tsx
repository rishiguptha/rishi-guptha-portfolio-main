import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
        {title}
      </h2>
      <p className="text-3xl md:text-4xl font-bold text-foreground">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionTitle;
