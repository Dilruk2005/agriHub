import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About AgriHub</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600">
            AgriHub is Sri Lanka's premier digital agricultural machinery platform, 
            designed to revolutionize the agricultural sector by connecting farmers 
            with modern machinery and services.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To empower Sri Lankan farmers with accessible, affordable, and modern 
            agricultural technology through a centralized digital platform.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            A thriving agricultural sector in Sri Lanka where every farmer has access 
            to the machinery and resources needed for sustainable farming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;