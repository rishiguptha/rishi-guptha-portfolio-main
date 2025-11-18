import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Target, Coffee, Trophy } from 'lucide-react';
import { TECHNICAL_SKILLS } from '@/lib/constants';
import ProfileImage from './ProfileImage';
import SectionTitle from './SectionTitle';

const About = () => {
  const driveItems = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Tackling complex data challenges with innovative solutions.",
      color: "bg-blue-400"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Impact-Driven",
      description: "Building models that create real-world value.",
      color: "bg-purple-400"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "Staying ahead with constant skill development.",
      color: "bg-green-400"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Coffee & Code",
      description: "Late nights, strong coffee, and clean code.",
      color: "bg-orange-400"
    }
  ];

  return (
    <section id="about" className="section-container bg-secondary/10 border-b-4 border-black dark:border-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="WHO AM I?" subtitle="About Me" />

        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Profile Image Column */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -50, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
             <ProfileImage />
          </motion.div>

          {/* Text Content Column */}
          <motion.div
            className="lg:col-span-7 space-y-6 bg-white dark:bg-card border-2 border-black dark:border-white p-8 shadow-neo"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
             <h3 className="text-2xl font-bold border-l-8 border-primary pl-4 uppercase">
               Data Scientist Researcher
             </h3>
             <p className="text-lg font-medium leading-relaxed">
               I'm a graduate student at <span className="bg-primary text-white px-1">Stony Brook University</span> uncovering stories hidden within data. My goal is to leverage my technical skills to build intelligent systems that solve real-world problems.
             </p>
             <p className="text-lg font-medium leading-relaxed">
               When I'm not wrangling data, you can find me exploring new technologies or enjoying a good book.
             </p>
          </motion.div>
        </div>

        {/* What Drives Me */}
        <div className="mb-20">
          <h3 className="heading-md mb-8">WHAT DRIVES ME</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {driveItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)", translate: "4px 4px" }}
                viewport={{ once: true }}
                className="border-2 border-black dark:border-white bg-white dark:bg-card p-6 shadow-neo transition-all"
              >
                <div className={`w-12 h-12 ${item.color} border-2 border-black flex items-center justify-center mb-4 shadow-sm`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-sm font-medium text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="heading-md mb-8">TECH STACK</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(TECHNICAL_SKILLS).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-2 border-black dark:border-white bg-white dark:bg-card"
              >
                <div className="bg-black dark:bg-white text-white dark:text-black p-3 font-bold uppercase flex items-center gap-2">
                    <Code className="w-5 h-5" /> {category}
                </div>
                <div className="p-6 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <motion.span 
                      key={skill} 
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      className="px-3 py-1 border-2 border-black dark:border-white bg-secondary text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;