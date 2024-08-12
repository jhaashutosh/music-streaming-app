import React from 'react';

const Card = ({ imagePath, title, singer, onClick }) => {
  return (
    <div
      className="bg-transparent rounded-lg shadow-lg p-4 text-white cursor-pointer"
      onClick={onClick}
    >
      <img
        src={imagePath}
        alt={title}
        className="rounded-lg w-full h-40 object-cover"
      />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="text-gray-400">{singer}</p>
    </div>
  );
};

export default Card;