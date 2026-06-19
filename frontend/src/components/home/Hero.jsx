import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Digital Agricultural Machinery Hub
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Connecting Sri Lankan farmers with modern agricultural machinery through a centralized digital platform
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/auth/register"
              className="px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-lg transition-colors"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-colors backdrop-blur-sm"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;