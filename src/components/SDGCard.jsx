import React from 'react';
import { Link } from 'react-router-dom';

const SDGCard = ({ sdg }) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
      <Link to={`/sdg/${sdg.slug}`}>
        <div className="relative w-full" style={{ paddingBottom: '75%' }}> {/* Aspect Ratio 4:3 */}
          <img
            src={sdg.image}
            alt={sdg.title}
            className="absolute top-0 left-0 w-full h-full "
            style={{
              filter: 'brightness(0.9)', // Slightly darken the image for better blending
            }}
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold text-indigo-400 mb-2">{sdg.title}</h3>
          <p className="text-gray-300">{sdg.description.substring(0, 80)}...</p>
        </div>
      </Link>
    </div>
  );
};

export default SDGCard;
