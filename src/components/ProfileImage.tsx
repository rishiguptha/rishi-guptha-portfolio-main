import React from 'react';

const ProfileImage: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto group">
      {/* Offset Shadow/Border */}
      <div className="absolute inset-0 bg-black transform translate-x-4 translate-y-4 rounded-none transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
      
      {/* Image Container */}
      <div className="relative bg-white p-4 border-2 border-black z-10 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
        <div className="aspect-square overflow-hidden border-2 border-black grayscale group-hover:grayscale-0 transition-all duration-500">
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4 text-center font-black uppercase tracking-widest text-xl">
            Rishi G. Mankala
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;