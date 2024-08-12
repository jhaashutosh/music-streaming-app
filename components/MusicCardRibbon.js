import React, { useState, useRef, useEffect, useContext } from 'react';
import Card from './MusicCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { musicList as songsArray } from '@/data/MusicData';
import CurrentMusicContext from '../context/currentMusicContext';

const MusicCardRibbon = ({heading}) => {
  const {setCurrentMusic, setIsMusicChanged} = useContext(CurrentMusicContext)
  const [visibleCards, setVisibleCards] = useState(4);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setVisibleCards(5);
      } else if (width >= 1024) {
        setVisibleCards(4);
      } else if (width >= 768) {
        setVisibleCards(3);
      } else {
        setVisibleCards(2);
      }
    };

    window.addEventListener('resize', updateVisibleCards);
    updateVisibleCards();

    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    setCardWidth(containerWidth / visibleCards);
  }, [visibleCards]);

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += cardWidth;
    }
  };

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= cardWidth;
    }
  };

  return (
    <div className="mt-8 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-white font-bold">{heading}</h2>
        <button className="text-blue-500">See All</button>
      </div>
      <div className="relative" ref={containerRef}>
        <div
          className="flex overflow-hidden"
          ref={scrollContainerRef}
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex">
            {songsArray.map((hit) => (
              <div
                key={hit.id}
                style={{ minWidth: `${cardWidth}px` }}
                className="flex-shrink-0"
                onClick={() => {
                    setIsMusicChanged(true)
                    setCurrentMusic(hit);
                  }
                }
              >
                <Card
                  imagePath={hit.imagePath}
                  title={hit.title}
                  singer={hit.singer}
                  onClick={() => console.log(`Playing ${hit.musicPath}`)}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 rounded-full"
        >
          <FaArrowLeft className="text-white" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 rounded-full"
        >
          <FaArrowRight className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default MusicCardRibbon;