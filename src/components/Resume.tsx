import React from 'react';
import SectionTitle from './SectionTitle';
import { EXPERIENCE, EDUCATION, RESUME_URL } from '@/lib/constants';
import { Briefcase, GraduationCap, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="section-container bg-white dark:bg-background border-t-4 border-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <SectionTitle title="MY JOURNEY" subtitle="Experience & Education" />
            <motion.a 
              href={RESUME_URL} 
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                <Button className="mb-12 md:mb-0">
                    <Download className="mr-2 h-5 w-5" /> DOWNLOAD CV
                </Button>
            </motion.a>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
            {/* Experience Column */}
            <div>
                <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl font-black uppercase mb-8 flex items-center gap-3 border-b-4 border-black dark:border-white pb-2"
                >
                    <Briefcase className="w-8 h-8" /> Experience
                </motion.h3>
                <div className="space-y-10 border-l-4 border-black dark:border-white ml-3 pl-8 py-2">
                    {EXPERIENCE.map((job, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Timeline Marker */}
                            <div className="absolute -left-[46px] top-0 w-6 h-6 bg-secondary border-2 border-black dark:border-white rounded-none"></div>
                            
                            <motion.div 
                                whileHover={{ x: 4, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)" }}
                                className="bg-white dark:bg-card border-2 border-black dark:border-white p-6 shadow-neo transition-all"
                            >
                                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                                    <div>
                                        <h4 className="text-xl font-bold uppercase">{job.title}</h4>
                                        <span className="text-primary font-black">{job.company}</span>
                                    </div>
                                    <span className="text-xs font-bold bg-black text-white px-2 py-1 whitespace-nowrap">
                                        {job.date}
                                    </span>
                                </div>
                                <p className="text-muted-foreground text-sm font-medium leading-relaxed border-t-2 border-dotted border-gray-300 pt-4 mt-2">
                                    {job.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Education Column */}
            <div>
                <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl font-black uppercase mb-8 flex items-center gap-3 border-b-4 border-black dark:border-white pb-2"
                >
                    <GraduationCap className="w-8 h-8" /> Education
                </motion.h3>
                <div className="space-y-10 border-l-4 border-black dark:border-white ml-3 pl-8 py-2">
                    {EDUCATION.map((edu, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                             {/* Timeline Marker */}
                             <div className="absolute -left-[46px] top-0 w-6 h-6 bg-primary border-2 border-black dark:border-white rounded-none"></div>

                             <motion.div 
                                whileHover={{ x: 4, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)" }}
                                className="bg-white dark:bg-card border-2 border-black dark:border-white p-6 shadow-neo transition-all"
                            >
                                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                                    <div>
                                        <h4 className="text-xl font-bold uppercase">{edu.degree}</h4>
                                        <span className="text-primary font-black">{edu.institution}</span>
                                    </div>
                                    <span className="text-xs font-bold bg-black text-white px-2 py-1 whitespace-nowrap">
                                        {edu.date}
                                    </span>
                                </div>
                                <p className="text-muted-foreground text-sm font-medium leading-relaxed border-t-2 border-dotted border-gray-300 pt-4 mt-2">
                                    {edu.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;