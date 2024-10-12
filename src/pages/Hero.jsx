import React from 'react';

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url('/images/hero.jpg')` }}>
      <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold text-center">
          Sustainable Development Goals
        </h1>
      </div>
    </div>
  );
};

export default Hero;
