import React, { useState, useMemo } from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = useMemo(() => {
    const allCategories = PROJECTS.flatMap(p => p.categories || []);
    const uniqueCategories = Array.from(new Set(allCategories));
    return ['All', ...uniqueCategories];
  }, []);

  const filteredProjects = useMemo(() => {
    let filtered = [...PROJECTS];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.categories?.includes(selectedCategory));
    }

    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    return filtered;
  }, [selectedCategory, searchTerm]);

  return (
    <section id="projects" className="section-container bg-secondary/10 border-t-4 border-black dark:border-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="MY WORK" subtitle="Featured Projects" />

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 space-y-8 bg-white dark:bg-card border-2 border-black dark:border-white p-6 shadow-neo"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black dark:text-white w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-background border-2 border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 font-bold text-sm border-2 border-black dark:border-white transition-all duration-200 ${selectedCategory === category
                    ? 'bg-primary text-white shadow-neo-sm'
                    : 'bg-white dark:bg-black text-black dark:text-white hover:bg-secondary'
                  }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid with Layout Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-16 border-2 border-dashed border-gray-400"
              >
                <h3 className="text-xl font-bold uppercase mb-2">No projects found</h3>
                <button
                  onClick={() => { setSelectedCategory('All'); setSearchTerm(''); }}
                  className="underline font-bold text-primary hover:text-secondary-foreground transition-colors"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;