import React from 'react';
import SectionTitle from './SectionTitle';
import { SKILLS } from '@/lib/constants';
import { motion } from 'framer-motion';
import ProfileImage from './ProfileImage';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="section-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <SectionTitle title="ABOUT ME" subtitle="A Glimpse Into My World" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Left Column: Profile Image */}
          <motion.div 
            className="md:col-span-1 flex justify-center"
            variants={itemVariants}
          >
            <ProfileImage />
          </motion.div>

          {/* Right Column: Bio and Skills */}
          <div className="md:col-span-2">
            <motion.div variants={containerVariants}>
              <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-4">
                Data Scientist & Engineer
              </motion.h3>
              <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-6">
                I'm a graduate student at Stony Brook University with a passion for uncovering stories hidden within data. My goal is to leverage my technical skills to build intelligent systems that solve real-world problems and drive impactful decisions.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-8">
                When I'm not wrangling data, you can find me exploring new technologies or enjoying a good book. Feel free to reach out—I'm always open to new challenges and collaborations.
              </motion.p>
            </motion.div>
            
            <motion.div variants={containerVariants}>
              <motion.h4 variants={itemVariants} className="text-2xl font-bold mb-4">Core Skills</motion.h4>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                {SKILLS.slice(0, 12).map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full font-medium text-sm"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
