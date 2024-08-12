import React, { useContext } from 'react';
import Slider from 'react-slick';
import Card from './MusicCard';
import { musicList as songsArray } from '@/data/MusicData';
import CurrentMusicContext from '../context/currentMusicContext';

const CustomPrevArrow = ({ className, style, onClick }) => (
  <button
    className={`slick-prev ${className}`}
    style={{ ...style, left: 0, zIndex: 1 }}
    onClick={onClick}
  >
    &#9664;
  </button>
);

const CustomNextArrow = ({ className, style, onClick }) => (
  <button
    className={`slick-next ${className}`}
    style={{ ...style, right: 0, zIndex: 1 }}
    onClick={onClick}
  >
    &#9654;
  </button>
);

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const MusicCardRibbon = ({ heading }) => {
  const { setCurrentMusic, setIsMusicChanged } = useContext(CurrentMusicContext);

  return (
    <div className="mt-8 mb-8 bg-none relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-white font-bold">{heading}</h2>
        <button className="text-blue-500">See All</button>
      </div>
      <div className="relative">
        <Slider {...sliderSettings}>
          {songsArray.map((hit) => (
            <div
              key={hit.id}
              className="flex-shrink-0"
              onClick={() => {
                  setIsMusicChanged(true);
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
        </Slider>
      </div>
    </div>
  );
};

export default MusicCardRibbon;