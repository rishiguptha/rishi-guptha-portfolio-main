import React, { useState, useMemo } from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import RAGPipelineViz from './RAGPipelineViz';
import { PROJECTS } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Github, ExternalLink, X } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  categories?: string[];
  readme?: string;
  githubLink?: string;
  liveLink?: string;
  metrics?: string[];
  featured?: boolean;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = useMemo(() => {
    const allCategories = PROJECTS.flatMap(p => p.categories || []);
    const uniqueCategories = Array.from(new Set(allCategories));
    return ['All', ...uniqueCategories];
  }, []);

  const filteredProjects = useMemo(() => {
    let projects = PROJECTS;
    if (selectedCategory !== 'All') {
      projects = projects.filter(p => p.categories?.includes(selectedCategory));
    }
    if (!showAll && selectedCategory === 'All') {
      projects = projects.filter(p => p.featured);
    }
    return projects;
  }, [selectedCategory, showAll]);

  const hiddenCount = PROJECTS.length - PROJECTS.filter(p => p.featured).length;

  return (
    <section id="projects" className="section-container bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Projects" />

          {/* RAG Pipeline - Featured Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <RAGPipelineViz />
          </motion.div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  if (category !== 'All') setShowAll(true);
                }}
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </div>

          {/* Show all toggle */}
          {selectedCategory === 'All' && hiddenCount > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mt-10"
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm text-muted-foreground hover:text-foreground rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                {showAll ? (
                  <>Show Featured <ChevronUp size={16} /></>
                ) : (
                  <>View All Projects ({hiddenCount} more) <ChevronDown size={16} /></>
                )}
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl bg-card border border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal image */}
              {selectedProject.imageUrl && (
                <div className="h-48 overflow-hidden rounded-t-xl">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-8">
                {/* Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-card/80 backdrop-blur-sm hover:bg-muted transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                {/* Title & links */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <div className="flex gap-2 shrink-0">
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github size={18} className="text-muted-foreground" />
                      </a>
                    )}
                    {selectedProject.liveLink && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={18} className="text-muted-foreground" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Categories */}
                {selectedProject.categories && selectedProject.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.categories.map((cat) => (
                      <span
                        key={cat}
                        className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                )}

                {/* Full description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Metrics */}
                {selectedProject.metrics && selectedProject.metrics.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
                      Key Metrics
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.metrics.map((metric, idx) => (
                        <span
                          key={idx}
                          className="text-sm px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-medium"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1.5 rounded-lg bg-stone-800/50 text-stone-300 border border-stone-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub CTA */}
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                  >
                    <Github size={16} />
                    View on GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
