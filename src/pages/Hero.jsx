import React from 'react';

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/images/hero.jpg')` }}
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-black to-gray-900 opacity-70"></div>
      
      {/* Hero content */}
      <div className="relative h-full flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white text-center mb-6 animate-fade-in">
          Sustainable Development Goals
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 text-center max-w-3xl leading-relaxed animate-fade-in delay-500">
          Taking action towards a better and more sustainable future for all. Learn how we can collectively achieve these global goals.
        </p>

        {/* Scroll down indicator */}
        <div className="absolute bottom-10 flex justify-center w-full animate-bounce">
          <div className="text-gray-300">
            <span className="text-xl md:text-2xl">↓</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
