import React, { useState } from 'react';
import styles from '../styles/navbar.module.css'
import Image from 'next/image';
import { FaHome, FaFolderOpen, FaDownload, FaHeart, FaTimes, FaBars } from 'react-icons/fa';
import { GoDot as DotIcon } from "react-icons/go";
import { FaAngleDown as DownIcon, FaAngleUp as UpIcon } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import CurrentMusicContext from '../context/currentMusicContext';
import FavouritesContext from '../context/favouritesContext';
import CollectionsContext from '../context/collectionsContext';

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showFavourites, setShowFavourites] = useState(true);
  const [showCollections, setShowCollections] = useState(true);
  const { currentMusic, setCurrentMusic } = useContext(CurrentMusicContext);
  const { favourites } = useContext(FavouritesContext);
  const { collections } = useContext(CollectionsContext);
  const { musicPath } = currentMusic;

  const handleDownloadClick = () => {
    toast.success('Download Started!!');
  };

  return (
    <div className={`relative ${styles.navbar}`}>
      <div className="flex items-center justify-between p-4 bg-gray-800 fixed top-0 left-0 right-0 z-40">
        <Image src="/images/logo.png" width={50} height={50} alt="Logo" />
        <FaBars className="text-white text-2xl cursor-pointer" onClick={() => setShowDrawer(true)} />
      </div>

      {showDrawer && (
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-90 z-50 ${styles.drawer}`}>
          <div className="flex flex-col h-full bg-gray-800 text-white">
            <div className="flex items-center justify-between p-4">
              <FaTimes className="text-white text-2xl cursor-pointer" onClick={() => setShowDrawer(false)} />
            </div>
            <nav className="flex flex-col p-4 w-full space-y-4">
              <a href="#" className="flex items-center">
                <FaHome className="mr-2" /> Home
              </a>
              <div className='flex items-center justify-between' onClick={() => setShowCollections(!showCollections)}>
                <a href="#" className="flex items-center">
                  <FaFolderOpen className="mr-2" /> Collections
                </a>
                {showCollections ? <UpIcon fontSize={12} /> : <DownIcon fontSize={12} />}
              </div>
              {showCollections && <div className="flex flex-col space-y-2 ml-4">
                {collections && collections.length > 0 ?
                  (collections.map((collection, index) => (
                    <span onClick={() => setCurrentMusic(collection)} key={index} className="flex items-center text-xs cursor-pointer">
                      <DotIcon className="mr-2" /> {collection.title}
                    </span>
                  ))) :
                  <span className="text-xs">No collections found</span>
                }
              </div>}
              <a href={musicPath} onClick={handleDownloadClick} download={musicPath} className="flex items-center">
                <FaDownload className="mr-2" /> Download
              </a>
              <div className='flex items-center justify-between' onClick={() => setShowFavourites(!showFavourites)}>
                <a href="#" className="flex items-center">
                  <FaHeart className="mr-2" /> Favourites
                </a>
                {showFavourites ? <UpIcon fontSize={12} /> : <DownIcon fontSize={12} />}
              </div>
              {showFavourites && <div className="flex flex-col space-y-2 ml-4">
                {favourites && favourites.length > 0 ?
                  (favourites.map((favourite, index) => (
                    <span onClick={() => setCurrentMusic(favourite)} key={index} className="flex items-center text-xs cursor-pointer">
                      <DotIcon className="mr-2" /> {favourite.title}
                    </span>
                  ))) : <p className='text-xs'>No Favourites</p>
                }
              </div>}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;