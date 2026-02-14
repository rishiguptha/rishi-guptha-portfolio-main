import React from 'react';
import SectionTitle from './SectionTitle';
import { EXPERIENCE, EDUCATION, RESUME_URL } from '@/lib/constants';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Resume: React.FC = () => {
    return (
        <section id="resume" className="section-container">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
                        <SectionTitle title="Experience" />
                        <a
                            href={RESUME_URL}
                            download
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                        >
                            <Download size={16} /> Download Resume
                        </a>
                    </div>

                    {/* Experience */}
                    <div className="mb-20">
                        <div className="space-y-12">
                            {EXPERIENCE.map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                                        {/* Date */}
                                        <div className="md:w-32 shrink-0">
                                            <span className="text-sm text-muted-foreground font-mono">
                                                {job.date}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 pb-12 border-b border-border last:border-0">
                                            <h3 className="text-lg font-medium mb-1 group-hover:text-primary transition-colors">
                                                {job.title}
                                            </h3>
                                            <p className="text-muted-foreground mb-4">
                                                {job.company} · {job.location}
                                            </p>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {job.description}
                                            </p>
                                            {job.highlights && (
                                                <div className="flex flex-wrap gap-2 mt-4">
                                                    {job.highlights.map((highlight, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="text-xs px-2 py-1 rounded bg-primary/10 text-primary"
                                                        >
                                                            {highlight}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <h3 className="text-sm text-muted-foreground uppercase tracking-widest mb-8">
                            Education
                        </h3>
                        <div className="space-y-8">
                            {EDUCATION.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8"
                                >
                                    <div className="md:w-32 shrink-0">
                                        <span className="text-sm text-muted-foreground font-mono">
                                            {edu.date}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium mb-1">{edu.degree}</h4>
                                        <p className="text-muted-foreground">{edu.institution}</p>
                                    </div>
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