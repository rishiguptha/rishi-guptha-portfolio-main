import React, { useRef } from 'react';
import SectionTitle from './SectionTitle';
import { EXPERIENCE, EDUCATION, RESUME_URL } from '@/lib/constants';
import { Briefcase, GraduationCap, Download, Award, MapPin, Calendar, Building, CheckCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

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
      duration: 0.6,
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
  index: number;
}> = ({ icon, date, title, subtitle, description, isLast, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      className="relative pl-12 group"
      variants={itemVariants}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Timeline connector */}
      {!isLast && (
        <motion.div 
          className="absolute left-4 top-12 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-border -translate-x-1/2"
          initial={{ height: 0 }}
          animate={isInView ? { height: "calc(100% - 3rem)" } : { height: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
        />
      )}
      
      {/* Icon container */}
      <motion.div 
        className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-primary text-white shadow-lg group-hover:scale-110 transition-transform duration-300"
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.2 + 0.1,
          type: "spring",
          bounce: 0.5
        }}
      >
        {icon}
      </motion.div>

      {/* Content card */}
      <motion.div 
        className="modern-card mb-8 group-hover:shadow-xl transition-all duration-300"
        whileHover={{ 
          y: -5,
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
        }}
      >
        {/* Date badge */}
        <motion.div 
          className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
        >
          <Calendar className="w-3 h-3" />
          {date}
        </motion.div>

        {/* Title and company */}
        <motion.h3 
          className="text-xl font-bold text-gradient mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
        >
          {title}
        </motion.h3>
        
        <motion.div 
          className="flex items-center gap-2 text-muted-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
        >
          <MapPin className="w-4 h-4" />
          <span className="font-medium">{subtitle}</span>
        </motion.div>

        {description && (
          <motion.p 
            className="text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

const Resume: React.FC = () => {
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const isExperienceInView = useInView(experienceRef, { once: true, margin: "-100px" });
  const isEducationInView = useInView(educationRef, { once: true, margin: "-100px" });

  const achievements = [
    { icon: <Award className="w-5 h-5" />, title: "Data Science Excellence", value: "Top 10%" },
    { icon: <Briefcase className="w-5 h-5" />, title: "Project Success Rate", value: "95%" },
    { icon: <GraduationCap className="w-5 h-5" />, title: "Academic Performance", value: "3.8 GPA" },
  ];

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            My professional journey in data science and machine learning
          </p>
          
          <motion.a
            href={RESUME_URL}
            download
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gradient flex items-center justify-center">
            <Building className="w-8 h-8 mr-3 text-blue-400" />
            Work Experience
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-12">
              {EXPERIENCE.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900"
                    whileHover={{ scale: 1.2 }}
                  ></motion.div>
                  
                  {/* Content */}
                  <div className="ml-20 modern-card group hover:scale-105 transition-all duration-300">
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex items-start space-x-4 flex-1">
                          {/* Company Logo */}
                          <motion.div
                            className="flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                          >
                            <img
                              src={job.logo}
                              alt={`${job.company} logo`}
                              className="w-8 h-8 object-contain"
                              onError={(e) => {
                                // Fallback to first letter if logo fails to load
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `<span class="text-blue-400 font-bold text-lg">${job.company.charAt(0)}</span>`;
                                }
                              }}
                            />
                          </motion.div>
                          
                          {/* Job Info */}
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-foreground group-hover:text-blue-500 transition-colors">
                              {job.title}
                            </h4>
                            <p className="text-lg text-blue-500 font-medium">{job.company}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm">{job.date}</span>
                        </div>
                      </div>
                      <p className="text-foreground/80 leading-relaxed">{job.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gradient flex items-center justify-center">
            <GraduationCap className="w-8 h-8 mr-3 text-green-400" />
            Education
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="modern-card group hover:scale-105 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4 flex-1">
                      {/* University Logo */}
                      <motion.div
                        className="flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <img
                          src={edu.logo}
                          alt={`${edu.institution} logo`}
                          className="w-8 h-8 object-contain"
                          onError={(e) => {
                            // Fallback to graduation cap if logo fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `<svg class="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>`;
                            }
                          }}
                        />
                      </motion.div>
                      
                      {/* Education Info */}
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-foreground group-hover:text-green-500 transition-colors mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-green-500 font-medium mb-2">{edu.institution}</p>
                        <div className="flex items-center text-muted-foreground mb-3">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm">{edu.date}</span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-3 rounded-xl bg-gradient-to-br from-green-600/20 to-blue-600/20 border border-green-500/30"
                    >
                      <GraduationCap className="w-6 h-6 text-green-500" />
                    </motion.div>
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
