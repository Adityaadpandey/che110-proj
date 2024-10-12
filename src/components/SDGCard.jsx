import React from 'react';
import { Link } from 'react-router-dom';

const SDGCard = ({ sdg }) => {
  return (
    <Link to={`/sdg/${sdg.slug}`} className="w-full md:w-1/4 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={sdg.image} alt={sdg.title} className="w-full h-48 object-cover"/>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{sdg.title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default SDGCard;
