
import React from 'react';
import SectionTitle from './SectionTitle';
import ProfileImage from './ProfileImage';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SkillBadge from './SkillBadge';
import { SKILLS } from '@/lib/constants';
import { motion } from 'framer-motion';


const About: React.FC = () => {
  const contentRef = useScrollReveal();
  const skillsRef = useScrollReveal();

  return (
    <motion.section
      id="about"
      className="section-container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
    <section id="about" className="section-container">
      <SectionTitle title="ABOUT ME" subtitle="My Introduction" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1" ref={contentRef}>
          <h3 className="text-2xl font-bold mb-4">Data Science Grad Student at Stony Brook University</h3>
          <p className="text-muted-foreground mb-6">
          I am a Data Science graduate student at Stony Brook University, with a strong foundation in computer science and data analytics. I enjoy solving complex problems and turning data into actionable insights.</p>
          <p className="text-muted-foreground mb-6">My goal is to leverage my technical skills and experience to contribute to innovative projects and help organizations make data-driven decisions. I have worked on various projects ranging from political sentiment analysis to book recommendation systems, showcasing my ability to handle diverse data science tasks.
          </p>
          
          <div className="mb-8" ref={skillsRef}>
            <h4 className="text-lg font-medium mb-3">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium transition-transform duration-200 hover:scale-105 active:scale-95 focus-ring"
          >
            Let's Talk
          </a>
        </div>
        <div className="order-1 md:order-2 flex justify-center animate-float">
          <ProfileImage />
        </div>
      </div>
    </section>
    </motion.section>
  );
};

export default About;
