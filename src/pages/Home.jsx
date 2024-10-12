import React from 'react';
import Hero from './Hero';
import SDGCard from '../components/SDGCard';
import sdgs from '../sdgs.json';  // Import the JSON data

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap -mx-4">
          {sdgs.map(sdg => (
            <SDGCard key={sdg.id} sdg={sdg} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
