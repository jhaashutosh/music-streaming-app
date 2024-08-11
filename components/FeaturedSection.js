import React from 'react';
import Image from 'next/image';
import styles from '../styles/module/featuredSection.module.css';

const FeaturedSection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#4E605C] to-[#1E2120] rounded-2xl p-10 py-20 mt-5 flex items-center justify-between overflow-hidden relative">
      
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#57635F] rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#57635F] rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="z-10 max-w-md">
        <h2 className="text-white text-3xl font-bold mb-4">Featured Album</h2>
        <p className="text-gray-200 mb-6">
          Dive into the latest hits and classics. Experience music like never before.
        </p>
        <button className="bg-[#EFA727] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#d89521] transition duration-300">
          Listen Now
        </button>
      </div>

      <div className="z-10">
        <Image
          src="/images/featured-image.png"
          alt="Featured Album"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default FeaturedSection;