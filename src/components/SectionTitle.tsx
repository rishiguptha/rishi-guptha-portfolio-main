import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      {subtitle && (
        <span className="text-sm text-muted-foreground uppercase tracking-widest mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-display-sm font-bold tracking-tight text-foreground">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionTitle;