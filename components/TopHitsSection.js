import React, { useState, useRef, useEffect } from 'react';
import Card from './MusicCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const TopHitsSection = () => {
  const [visibleCards, setVisibleCards] = useState(4);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);


  const hits = [
    {
      id: 1,
      imagePath: '/music/music1.jpg',
      title: 'Song 1',
      singer: 'asvnakjsvbajvn janvlanvlj',
      musicPath: '/path/to/music1.mp3',
    },
    {
      id: 2,
      imagePath: '/music/music2.avif',
      title: 'Song 2',
      singer: 'asnbakb va dvadv',
      musicPath: '/path/to/music1.mp3',
    },
    {
      id: 3,
      imagePath: '/music/music3.jpg',
      title: 'Song 12',
      singer: 'Samsnv kajvjasn v',
      musicPath: '/path/to/music1.mp3',
    },
    {
      id: 4,
      imagePath: '/music/music4.png',
      title: 'Song 1222',
      singer: 'askvbajhsbv adv',
      musicPath: '/path/to/music1.mp3',
    },
    {
      id: 5,
      imagePath: '/music/music5.jpg',
      title: 'Song 122222',
      singer: 'asnvc asbckjasb vcav',
      musicPath: '/path/to/music1.mp3',
    },
    {
      id: 6,
      imagePath: '/music/music6.jpg',
      title: 'Song 1',
      singer: 'Singer 122asmcnbasc222',
      musicPath: '/path/to/music1.mp3',
    },
    {
      id: 7,
      imagePath: '/music/music7.webp',
      title: 'Song 1',
      singer: 'Singer 122222222222',
      musicPath: '/path/to/music1.mp3',
    },
    {
      id: 8,
      imagePath: '/music/music8.jpg',
      title: 'Song 1',
      singer: 'Singer 122222233444',
      musicPath: '/path/to/music1.mp3',
    },
    {
      id: 9,
      imagePath: '/music/music3.jpg',
      title: 'Song 1',
      singer: 'Singer 122222asfjb233444',
      musicPath: '/path/to/music1.mp3',
    },
  ];

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
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-white font-bold">Top Hits</h2>
        <button className="text-blue-500">See All</button>
      </div>
      <div className="relative" ref={containerRef}>
        <div
          className="flex overflow-hidden"
          ref={scrollContainerRef}
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex">
            {hits.map((hit) => (
              <div
                key={hit.id}
                style={{ minWidth: `${cardWidth}px` }}
                className="flex-shrink-0"
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

export default TopHitsSection;