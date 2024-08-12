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
    <div className={`${styles.featureContainer} relative w-full rounded-2xl p-10 py-20 mt-5 flex flex-col lg:flex lg:flex-row items-center justify-between md:hidden`}>
      <div className="z-10 max-w-md text-center lg:text-left">
        <h2 className="text-[#5A5A5A] text-2xl md:text-3xl font-bold mb-4">Featured Album</h2>
        <p className="text-[#5A5A5A] mb-6 text-sm md:text-base">
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