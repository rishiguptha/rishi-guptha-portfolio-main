import React, { useState, useMemo, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter } from 'lucide-react';

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
  const [searchTerm, setSearchTerm] = useState('');

  const categories = useMemo(() => {
    const allCategories = PROJECTS.flatMap(p => p.categories || []);
    const uniqueCategories = Array.from(new Set(allCategories));
    console.log('Available categories:', uniqueCategories);
    return ['All', ...uniqueCategories];
  }, []);

  const filteredProjects = useMemo(() => {
    console.log('Filtering with category:', selectedCategory);
    console.log('All projects:', PROJECTS.length);
    
    let filtered = [...PROJECTS]; // Create a copy to avoid mutation
    
    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => {
        const hasCategory = p.categories && p.categories.includes(selectedCategory);
        console.log(`Project "${p.title}" categories:`, p.categories, 'includes', selectedCategory, ':', hasCategory);
        return hasCategory;
      });
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    console.log('Filtered projects count:', filtered.length);
    return filtered;
  }, [selectedCategory, searchTerm]);

  // Debug effect
  useEffect(() => {
    console.log('Projects data structure:', PROJECTS.map(p => ({
      title: p.title,
      categories: p.categories
    })));
  }, []);

  const handleCategoryChange = (category: string) => {
    console.log('Category selected:', category);
    setSelectedCategory(category);
  };

  return (
    <section id="projects" className="section-container">
      <div className="container mx-auto px-4">
        <SectionTitle title="MY PROJECTS" subtitle="A Selection of My Work" />

        {/* Search and Filter Controls */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-card/80 backdrop-blur-lg border border-border/50 rounded-2xl focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Category Filters */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span>Filter by category:</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 border ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg border-primary'
                      : 'bg-card/80 backdrop-blur-lg border-border/50 text-foreground hover:bg-primary/10 hover:border-primary/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            Showing {filteredProjects.length} of {PROJECTS.length} projects
            {searchTerm && (
              <span className="text-primary ml-1">
                matching "{searchTerm}"
              </span>
            )}
            {selectedCategory !== 'All' && (
              <span className="text-primary ml-1">
                in category "{selectedCategory}"
              </span>
            )}
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div key={`${project.title}-${selectedCategory}`}>
                <ProjectCard project={project} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                <p className="text-muted-foreground mb-4">
                  No projects match your current filters. Try adjusting your search or category selection.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchTerm('');
                  }}
                  className="bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-3 rounded-full font-medium"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="max-w-2xl mx-auto glass-effect rounded-2xl p-8"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities, innovative projects, and ways to solve complex data challenges together.
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gradient px-8 py-4 rounded-full font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
