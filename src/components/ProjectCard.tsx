// src/components/ProjectCard.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubLink: string;
  readme: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  githubLink,
  readme,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
      }}
      onClick={() => setIsActive(!isActive)}
      className="group relative overflow-hidden rounded-xl glass-panel transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={`${imageUrl}?auto=format&fit=crop&w=800&q=80`}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
        />
      </div>

      <div className="p-6 relative z-10 flex flex-col min-h-[250px]">
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-2 transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* View Project Modal */}
        <ProjectModal
          project={{
            title,
            description,
            technologies,
            imageUrl,
            readme,
            githubLink,
          }}
        />
      </div>

      {/* Active Overlay */}
      {isActive && (
        <div className="absolute inset-0 bg-primary/20 pointer-events-none z-0" />
      )}
    </motion.div>
  );
};

export default ProjectCard;