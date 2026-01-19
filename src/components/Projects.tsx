import React, { useState, useMemo } from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';

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
    <section id="projects" className="section-container relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30 -z-10" />

      <div className="container mx-auto px-6">
        <SectionTitle title="MY WORK" subtitle="Featured Projects" />

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12"
        >
          {/* Search input */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects by name, tech, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-4 rounded-xl glass border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'glass border border-border hover:border-primary/50'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm text-muted-foreground mb-8"
        >
          Showing {filteredProjects.length} of {PROJECTS.length} projects
        </motion.p>

        {/* Grid with Layout Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-16"
              >
                <div className="glass rounded-2xl p-12 border border-border max-w-md mx-auto">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold mb-2">No projects found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search or filters
                  </p>
                  <button
                    onClick={() => { setSelectedCategory('All'); setSearchTerm(''); }}
                    className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all"
                  >
                    Clear Filters
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;