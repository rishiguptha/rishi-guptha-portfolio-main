import React from 'react';
import SectionTitle from './SectionTitle';
import { EXPERIENCE, EDUCATION, RESUME_URL } from '@/lib/constants';
import { Briefcase, GraduationCap, Download, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

const Resume: React.FC = () => {
    return (
        <section id="resume" className="section-container relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 grid-bg opacity-20 -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                    <SectionTitle title="MY JOURNEY" subtitle="Experience & Education" />
                    <MagneticButton
                        as="a"
                        href={RESUME_URL}
                        download
                        strength={0.3}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium shadow-glow hover:shadow-glow-lg transition-all"
                    >
                        <Download size={18} /> Download CV
                    </MagneticButton>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Experience Column */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-xl font-bold mb-8 flex items-center gap-3"
                        >
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <Briefcase size={20} />
                            </div>
                            Experience
                        </motion.h3>

                        <div className="space-y-6 relative">
                            {/* Timeline line */}
                            <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

                            {EXPERIENCE.map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative pl-12"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-[11px] top-6 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />

                                    <motion.div
                                        whileHover={{ x: 4 }}
                                        className="glass rounded-xl p-6 border border-border card-hover"
                                    >
                                        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                                            <div>
                                                <h4 className="font-bold text-lg">{job.title}</h4>
                                                <p className="text-primary font-medium">{job.company}</p>
                                            </div>
                                            <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                                                <Calendar size={12} />
                                                {job.date}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
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
                            className="text-xl font-bold mb-8 flex items-center gap-3"
                        >
                            <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                                <GraduationCap size={20} />
                            </div>
                            Education
                        </motion.h3>

                        <div className="space-y-6 relative">
                            {/* Timeline line */}
                            <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-secondary to-accent" />

                            {EDUCATION.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative pl-12"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-[11px] top-6 w-4 h-4 rounded-full bg-secondary ring-4 ring-background" />

                                    <motion.div
                                        whileHover={{ x: 4 }}
                                        className="glass rounded-xl p-6 border border-border card-hover"
                                    >
                                        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                                            <div>
                                                <h4 className="font-bold text-lg">{edu.degree}</h4>
                                                <p className="text-secondary font-medium">{edu.institution}</p>
                                            </div>
                                            <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                                                <Calendar size={12} />
                                                {edu.date}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
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