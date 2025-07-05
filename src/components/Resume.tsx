import React from 'react';
import SectionTitle from './SectionTitle';
import { EXPERIENCE, EDUCATION, RESUME_URL } from '@/lib/constants';
import { Briefcase, GraduationCap, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const TimelineItem: React.FC<{
  icon: React.ReactNode;
  date: string;
  title: string;
  subtitle: string;
  description?: string;
  isLast?: boolean;
}> = ({ icon, date, title, subtitle, description, isLast }) => {
  return (
    <motion.div 
      className="relative pl-12"
      variants={itemVariants}
      whileHover={{
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        borderColor: "hsl(var(--primary))"
      }}
    >
      <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
        {icon}
      </div>
      {!isLast && (
        <div className="absolute left-4 top-10 w-px h-full bg-border -translate-x-1/2"></div>
      )}
      <div className="flex-grow pb-12">
        <p className="text-sm font-medium text-primary mb-1">{date}</p>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-md text-muted-foreground mb-3">{subtitle}</p>
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
      </div>
    </motion.div>
  );
};

const Resume: React.FC = () => {
  return (
    <section id="resume" className="section-container">
      <div className="container mx-auto px-4">
        <SectionTitle title="MY RESUME" subtitle="Education & Experience" />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Experience Column */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Briefcase size={28} className="text-primary" />
              Experience
            </h2>
            <div className="relative">
              {EXPERIENCE.map((item, index) => (
                <TimelineItem
                  key={item.title}
                  icon={<Briefcase size={16} />}
                  date={item.date}
                  title={item.title}
                  subtitle={item.company}
                  description={item.description}
                  isLast={index === EXPERIENCE.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap size={28} className="text-primary" />
              Education
            </h2>
            <div className="relative">
              {EDUCATION.map((item, index) => (
                <TimelineItem
                  key={item.degree}
                  icon={<GraduationCap size={16} />}
                  date={item.date}
                  title={item.degree}
                  subtitle={item.institution}
                  description={item.description}
                  isLast={index === EDUCATION.length - 1}
                />
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <motion.a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download My Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
