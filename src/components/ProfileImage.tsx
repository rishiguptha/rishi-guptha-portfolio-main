
import React, { useState } from 'react';

const ProfileImage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-60 h-60 md:w-80 md:h-80 mx-auto group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient animation */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 ${isHovered ? 'animate-pulse' : 'animate-pulse-subtle'} transition-all duration-500`} />
      
      {/* Loading shimmer */}
      <div className={`absolute inset-0 bg-secondary animate-shimmer bg-[length:400%_100%] ${isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`} style={{ backgroundImage: 'linear-gradient(to right, transparent 0%, #f0f0f0 50%, transparent 100%)' }} />
      
      {/* Image container with border */}
      <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl">
        {/* Gradient border on hover */}
        <div className={`absolute inset-0 rounded-full border-2 border-primary/30 ${isHovered ? 'scale-105 opacity-100' : 'scale-100 opacity-0'} transition-all duration-500`}></div>
        
        {/* Profile image */}
        <img
          src="/profile.jpeg"
          alt="Profile"
          className={`w-full h-full object-cover transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} ${isHovered ? 'scale-110' : 'scale-100'}`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      
      {/* Decorative elements */}
      <div className={`absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full transition-all duration-300 ${isHovered ? 'scale-125' : 'scale-100'}`}></div>
      <div className={`absolute -top-2 -left-2 w-8 h-8 bg-primary/50 rounded-full transition-all duration-300 ${isHovered ? 'scale-125' : 'scale-100'}`}></div>
    </div>
  );
};

export default ProfileImage;
