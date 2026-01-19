import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import TerminalSkills from './TerminalSkills';
import RAGPipelineViz from './RAGPipelineViz';

const About: React.FC = () => {
  return (
    <section id="about" className="section-container">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle title="About" />

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-4">
              I'm a software and data engineer with a passion for building
              systems that turn complex data into actionable insights.
              Currently finishing my <span className="text-foreground font-medium">MS in Data Science</span> at
              Stony Brook University.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My experience spans from architecting real-time AI coaching platforms
              at Nevara AI to building enterprise data governance systems at Kimberly-Clark.
              I love the challenge of making data accessible and useful at scale.
            </p>
          </motion.div>

          {/* Terminal Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <TerminalSkills />
          </motion.div>

          {/* RAG Pipeline Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <RAGPipelineViz />
          </motion.div>

          {/* What I Do */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-10 border-t border-border"
          >
            <h3 className="text-sm text-muted-foreground uppercase tracking-widest mb-6">
              What I Do
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Data Engineering',
                  description: 'ETL pipelines, data warehousing, and real-time streaming with Spark, Airflow, and Snowflake.'
                },
                {
                  title: 'ML & AI Systems',
                  description: 'Model development and deployment, RAG systems, and production ML pipelines.'
                },
                {
                  title: 'Full-Stack Development',
                  description: 'Building end-to-end applications with React, FastAPI, and cloud infrastructure.'
                }
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <h4 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;