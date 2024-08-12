import React, { useContext } from 'react';
import Image from 'next/image';
import styles from '../styles/module/featuredSection.module.css';
import CurrentMusicContext from '../context/currentMusicContext';

const FeaturedSection = () => {
  const { setCurrentMusic, setIsMusicChanged } = useContext(CurrentMusicContext);

  function playMusicHandler() {
    setIsMusicChanged(true);
    setCurrentMusic({
      imagePath: '/musicCovers/music2.jpg',
      title: 'New Song',
      singer: 'Ash King',
      musicPath: '/music/music2.mp3',
    });
  }

  return (
    <div className="relative w-full bg-gradient-to-r from-[#4E605C] to-[#1E2120] rounded-2xl p-10 py-20 mt-5 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#57635F] rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 hidden lg:block"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#57635F] rounded-full opacity-20 translate-x-1/2 translate-y-1/2 hidden lg:block"></div>

      <div className="z-10 max-w-md text-center lg:text-left">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">Featured Album</h2>
        <p className="text-gray-200 mb-6 text-sm md:text-base">
          Dive into the latest hits and classics. Experience music like never before.
        </p>
        <button
          onClick={playMusicHandler}
          className="bg-[#EFA727] text-black px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-[#d89521] transition duration-300"
        >
          Listen Now
        </button>
      </div>

      <div className="z-10 mt-8 lg:mt-0">
        <Image
          src="/images/featured-image.png"
          alt="Featured Album"
          width={250}
          height={250}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default FeaturedSection;