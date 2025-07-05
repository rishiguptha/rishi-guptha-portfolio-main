// src/components/ProjectCard.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Calendar, Code2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubLink?: string;
    liveLink?: string;
    categories?: string[];
    readme?: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, technologies, imageUrl, githubLink, liveLink, categories } = project;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="group relative h-full"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="modern-card h-full flex flex-col overflow-hidden relative">
        {/* Image Container with Overlay */}
        <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
          <motion.img 
            src={imageUrl || '/placeholder.svg'} 
            alt={title} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Floating Action Buttons */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute top-4 right-4 flex gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                {githubLink && (
                  <motion.a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass-effect rounded-full text-white hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={18} />
                  </motion.a>
                )}
                {liveLink && (
                  <motion.a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass-effect rounded-full text-white hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Categories Badge */}
          {categories && categories.length > 0 && (
            <div className="absolute bottom-4 left-4">
              <Badge 
                variant="secondary" 
                className="glass-effect text-white border-white/20"
              >
                {categories[0]}
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          {/* Title */}
          <motion.h3 
            className="text-xl font-bold mb-3 text-gradient line-clamp-2"
            layoutId={`title-${title}`}
          >
            {title}
          </motion.h3>
          
          {/* Description */}
          <motion.p 
            className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed line-clamp-3"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {description}
          </motion.p>
          
          {/* Technologies */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 4).map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Badge 
                    variant="outline" 
                    className="text-xs px-2 py-1 hover:bg-primary/10 transition-colors"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
              {technologies.length > 4 && (
                <Badge variant="outline" className="text-xs px-2 py-1">
                  +{technologies.length - 4}
                </Badge>
              )}
            </div>
          </div>

          {/* Footer with Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Eye className="w-3 h-3" />
              <span>View Details</span>
            </div>
            
            <div className="flex items-center gap-3">
              {githubLink && (
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-1"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`GitHub for ${title}`}
                >
                  <Github size={18} />
                </motion.a>
              )}
              {liveLink && (
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-1"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Live link for ${title}`}
                >
                  <ExternalLink size={18} />
                </motion.a>
              )}
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 -z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.05 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              style={{
                filter: "blur(20px)",
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProjectCard;