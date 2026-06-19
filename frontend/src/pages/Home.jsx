import React from 'react';
import Hero from '../components/home/Hero';
import Statistics from '../components/home/Statistics';
import MachineryOverview from '../components/home/MachineryOverview';
import FeaturedServices from '../components/home/FeaturedServices';

const Home = () => {
  return (
    <div className="space-y-12">
      <Hero />
      <Statistics />
      <MachineryOverview />
      <FeaturedServices />
    </div>
  );
};

export default Home;