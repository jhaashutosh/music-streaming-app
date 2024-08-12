import { useState } from 'react';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import MainSection from '../components/MainSection';
import MusicPlayer from '../components/MusicPlayer';
import CurrentMusicContext from '../context/currentMusicContext';
import FavouritesContext from '../context/favouritesContext';
import CollectionsContext from '../context/collectionsContext';
import { Toaster } from "react-hot-toast";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [currentMusic, setCurrentMusic] = useState({
    id: 1,
    imagePath: '/musicCovers/music1.jpg',
    title: 'Shadows of the Night',
    singer: 'The Midnight Symphony',
    musicPath: '/music/music1.mp3',
    time: '3m'
  });

  const [isMusicChanged, setIsMusicChanged] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const [collections, setCollections] = useState([]);

  return (
    <CurrentMusicContext.Provider value={{ currentMusic, setCurrentMusic, isMusicChanged, setIsMusicChanged }}>
      <FavouritesContext.Provider value={{ favourites, setFavourites }}>
        <CollectionsContext.Provider value={{ collections, setCollections }}>
          <div className="flex h-screen w-full justify-between">
            <div className='w-full mb-16 flex'>
              <Navbar />
              <LeftSidebar />
              <MainSection />
              <RightSidebar />
            </div>
            <MusicPlayer />
          </div>
          <Toaster position="top-right" />
        </CollectionsContext.Provider>
      </FavouritesContext.Provider>
    </CurrentMusicContext.Provider>
  );
}
