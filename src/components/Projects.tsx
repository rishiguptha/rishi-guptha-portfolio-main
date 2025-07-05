import React, { useState, useMemo } from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '@/lib/constants';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const allCategories = PROJECTS.flatMap(p => p.categories);
    return ['All', ...Array.from(new Set(allCategories))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return PROJECTS;
    }
    return PROJECTS.filter(p => p.categories.includes(selectedCategory));
  }, [selectedCategory]);

  return (
    <section id="projects" className="section-container bg-secondary/50">
      <div className="container mx-auto px-4">
        <SectionTitle title="MY PROJECTS" subtitle="A Selection of My Work" />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background text-foreground hover:bg-primary/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Project Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
