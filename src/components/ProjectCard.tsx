// src/components/ProjectCard.tsx
import React, { useState, useRef, useEffect } from 'react';
import ProjectModal from './ProjectModal';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, imageUrl }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setRotation({ x: rotateX, y: rotateY });
  };

  const resetRotation = () => setRotation({ x: 0, y: 0 });

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-xl h-full glass-panel transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        resetRotation();
      }}
      onMouseMove={handleMouseMove}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
          : 'perspective(1000px) rotateX(0) rotateY(0)',
        transition: isHovered ? 'none' : 'transform 0.5s ease-out',
      }}
    >
      <div className="aspect-video overflow-hidden">
        <div
          className={`absolute inset-0 bg-secondary animate-shimmer bg-[length:400%_100%] ${isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
          style={{
            backgroundImage: 'linear-gradient(to right, transparent 0%, #f0f0f0 50%, transparent 100%)',
          }}
        />
        <img 
          src={`${imageUrl}?auto=format&fit=crop&w=800&q=80`} 
          alt={title} 
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} ${isHovered ? 'scale-110' : 'scale-100'}`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      <div className="p-6 relative z-10 flex flex-col min-h-[250px]">
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={tech} className="px-2 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Replace the plain button with our ProjectModal component */}
        <ProjectModal project={{ title, description, technologies, imageUrl }} />
      </div>

      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className={`absolute top-0 right-0 w-8 h-8 transform rotate-45 transition-all duration-300 ${isHovered ? 'scale-125' : 'scale-100'}`}></div>
      </div>
    </div>
  );
};

export default ProjectCard;
