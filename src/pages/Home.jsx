import React from 'react';
import Hero from './Hero';
import SDGCard from '../components/SDGCard';
import sdgs from '../sdgs.json'; // Import the JSON data

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto p-6 bg-gray-900 text-gray-100">
        <h2 className="text-4xl font-bold text-center text-indigo-400 mb-8">Our Sustainable Development Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sdgs.map((sdg) => (
            <SDGCard key={sdg.id} sdg={sdg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
