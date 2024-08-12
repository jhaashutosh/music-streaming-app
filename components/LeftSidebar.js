import React, { useContext, useState } from 'react';
import styles from '../styles/module/leftSidebar.module.css';
import Image from 'next/image';
import { FaHome, FaSearch, FaFolderOpen, FaDownload, FaHeart, FaFileAlt } from 'react-icons/fa';
import CurrentMusicContext from '../context/currentMusicContext';
import FavouritesContext from '../context/favouritesContext';
import CollectionsContext from '../context/collectionsContext';
import { toast } from 'react-hot-toast';
import { GoDot as DotIcon } from "react-icons/go";
import { FaAngleDown as DownIcon } from "react-icons/fa";
import { FaAngleUp as UpIcon } from "react-icons/fa";

const LeftSidebar = () => {

  const { currentMusic, setCurrentMusic } = useContext(CurrentMusicContext);
  const { favourites } = useContext(FavouritesContext);
  const { collections } = useContext(CollectionsContext);
  const [showFavourites, setShowFavourites] = useState(true);
  const [showCollections, setShowCollections] = useState(true);
  const { musicPath } = currentMusic;

  const handleDownloadClick = () => {
    toast.success('Downloaded Started!!');
  };
  
  return (
    <div className={`${styles.sidebar} flex flex-col p-6`}>
      <div className="logo mb-8">
        <Image src="/images/logo.png" style={{ marginLeft: '-30px' }} width={100} height={100} alt="Logo" />
      </div>
      <nav className="flex flex-col space-y-4">
        <a href="#" className="text-white flex items-center">
          <FaHome className="mr-2" /> Home
        </a>
        <a href="#" className="text-gray-400 flex items-center">
          <FaSearch className="mr-2" /> Discover
        </a>
        <div className='flex items-center justify-between text-gray-400' onClick={() => setShowCollections(!showCollections)}>
          <a href="#" className="text-gray-400 flex items-center">
            <FaFolderOpen className="mr-2" /> Collections
          </a>
          {showCollections ? <UpIcon fontSize={12} /> : <DownIcon fontSize={12} />}
        </div>
        {showCollections && <div className="text-gray-400 flex flex-col space-y-2">
              {collections && collections.length > 0 ? 
                (collections.map((collection, index) => (
                  <span onClick={() => setCurrentMusic(collection)} key={index} className="text-gray-400 flex items-center ml-2 text-xs cursor-pointer">
                    <DotIcon className="mr-2" /> {collection.title}
                  </span>
                ))) : 
                <span className="text-gray-400 flex items-center ml-2 text-xs">No collections found</span>
              }
          </div>}
      </nav>
      <div className="mt-12">
        <h3 className="text-white">LIBRARY</h3>
        <nav className="flex flex-col space-y-4 mt-4">
          <a href={musicPath} onClick={handleDownloadClick} download={musicPath} className="text-gray-400 flex items-center">
            <FaDownload className="mr-2" /> Download
          </a>
          <div className='flex items-center justify-between text-gray-400' onClick={() => setShowFavourites(!showFavourites)}>
            <a href="#" className="flex items-center">
              <FaHeart className="mr-2" /> Favourites
            </a>
            {showFavourites ? <UpIcon fontSize={12} /> : <DownIcon fontSize={12} />}
          </div>
          {showFavourites && <div className="text-gray-400 flex flex-col space-y-2">
            {favourites && favourites.length > 0  ? 
              (favourites.map((favourite, index) => (
                <span onClick={() => setCurrentMusic(favourite)} key={index} className="text-gray-400 flex items-center ml-2 text-xs cursor-pointer">
                  <DotIcon className="mr-2" /> {favourite.title}
                </span>
              ))) : <p className='text-gray-400 text-xs ml-2'>No Favourites</p>
            }
          </div>}
        </nav>
      </div>
    </div>
  );
};

export default LeftSidebar;