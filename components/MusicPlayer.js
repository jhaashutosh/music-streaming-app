import React, { useState, useRef, useEffect, useContext, memo, useCallback } from 'react';
import {
  FaHeart, FaPlus, FaPlay, FaPause, FaStepBackward, FaStepForward, FaRandom,
  FaSync, FaVolumeUp, FaMicrophone, FaDesktop, FaShareAlt, FaMicrophoneSlash,
} from "react-icons/fa";
import styles from "../styles/module/musicPlayer.module.css";
import CurrentMusicContext from '../context/currentMusicContext';
import { musicList as songsArray } from '@/data/MusicData';
import Favourites from '../context/favouritesContext';
import Collections from '../context/collectionsContext';
import { MdCollectionsBookmark as CollectionsIcon } from "react-icons/md";

const MusicPlayer = () => {
  const { currentMusic, isMusicChanged, setCurrentMusic, setIsMusicChanged } = useContext(CurrentMusicContext);
  const { favourites, setFavourites } = useContext(Favourites);
  const { collections, setCollections } = useContext(Collections);
  const { id, title, singer, musicPath } = currentMusic;
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const [isFavourite, setIsFavourite] = useState(false);
  const [isPresentInCollection, setIsPresentInCollection] = useState(false);

  useEffect(() => {
    if (audioRef.current && musicPath && isMusicChanged) {
      audioRef.current.src = musicPath;
      audioRef.current.play();
      setIsPlaying(true);
      setCurrentTime(0);
    }
    favourites.find((music) => (music.id === id)) ? setIsFavourite(true) : setIsFavourite(false);
    collections.find((music) => (music.id === id)) ? setIsPresentInCollection(true) : setIsPresentInCollection(false);
  }, [isMusicChanged, musicPath]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;

      const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
      };

      const handleTimeUpdate = () => {
        requestAnimationFrame(() => {
          setCurrentTime(audioRef.current.currentTime);
        });
      };

      audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
          audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        }
      };
    }
  }, [volume]);

  const nextButtonClick = () => {
    const song = songsArray.find(song => song.id === id);
    if (song && songsArray[songsArray.indexOf(song) + 1]) {
      setCurrentMusic(songsArray[songsArray.indexOf(song) + 1]);
      setIsMusicChanged(true);
    }
    else {
      setCurrentMusic(songsArray[0]);
      setIsMusicChanged(true);
    }
  }

  const backButtonClick = () => {
    const song = songsArray.find(song => song.id === id);
    if (song && songsArray[songsArray.indexOf(song) - 1]) {
      setCurrentMusic(songsArray[songsArray.indexOf(song) - 1]);
      setIsMusicChanged(true);
    }
    else {
      setCurrentMusic(songsArray[songsArray.length - 1]);
      setIsMusicChanged(true);
    }
  }

  const moveToZero = () => {
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  }

  const handleRandomClick = () => {
    const randomIndex = Math.floor(Math.random() * songsArray.length);
    setCurrentMusic(songsArray[randomIndex]);
    setIsMusicChanged(true);
  }

  const togglePlayPause = useCallback(() => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsPlaying(prev => !prev);
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(prev => !prev);
    }
  }, [isMuted]);

  const handleVolumeChange = useCallback((e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  }, []);

  const handleProgressChange = useCallback((rangeVal) => {
    const seekTime = (rangeVal / 100) * duration;
    setCurrentTime(seekTime);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  }, [duration]);

  const addToFavourites = () => {
    const song = songsArray.find(song => song.id === id);
    const isPresent = favourites.find(fav => fav.id === id);
    if (!isPresent) {
      setFavourites(prev => [...prev, song]);
      setIsFavourite(true);
    }
    else {
      setFavourites(prev => prev.filter(fav => fav.id !== id));
      setIsFavourite(false);
    }
  }

  const addToCollections = () => {
    const song = songsArray.find(song => song.id === id);
    const isPresent = collections.find(col => col.id === id);
    if (!isPresent) {
      setCollections(prev => [...prev, song]);
      setIsPresentInCollection(true);
    }
    else {
      setCollections(prev => prev.filter(col => col.id !== id));
      setIsPresentInCollection(false);
    }
  }

  const progressValue = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`${styles.player} fixed bottom-0 left-0 right-0 p-4 bg-black flex items-center justify-between`}>
      <div className="flex items-center" style={{ width: '400px' }}>
        <div className="flex items-center">
          <div className="ml-4">
            <h4 className="text-white truncate">{title}</h4>
            <p className="text-gray-400 text-sm truncate">{singer}</p>
          </div>
        </div>
        <div className="flex items-center ml-6 space-x-4">
          <FaHeart style={{ color: isFavourite ? 'red' : 'white' }} onClick={addToFavourites} className="text-white cursor-pointer" />
          {isPresentInCollection ? <CollectionsIcon onClick={addToCollections} className='text-white cursor-pointer' />: <FaPlus onClick={addToCollections} className="text-white cursor-pointer" />}
        </div>
      </div>

      <div className="controls flex items-center space-x-4 text-white w-full flex-col px-24">
        <div className="flex items-center space-x-4">
          <FaRandom onClick={handleRandomClick} className="text-white" />
          <FaStepBackward onClick={backButtonClick} className="text-white cursor-pointer" />
          <div className="bg-white p-2 rounded-full cursor-pointer" onClick={togglePlayPause}>
            {isPlaying ? <FaPause className="text-black" /> : <FaPlay style={{ paddingLeft: '3px' }} className="text-black" />}
          </div>
          <FaStepForward onClick={nextButtonClick} className="text-white cursor-pointer" />
          <FaSync onClick={moveToZero} className="text-white" />
        </div>

        <div className="flex-grow w-full">
          <input
            type="range"
            className={`${styles.rangeInput} w-full`}
            min="0"
            max="100"
            value={progressValue}
            onChange={(e) => handleProgressChange(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <FaVolumeUp className="text-white" />
        <input
          type="range"
          className={`${styles.rangeInput} w-24`}
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        {!isMuted ? <FaMicrophoneSlash className="text-white cursor-pointer" onClick={toggleMute} /> : <FaMicrophone className="text-white" onClick={toggleMute} />}
      </div>

      <audio ref={audioRef} />
    </div>
  );
};

export default memo(MusicPlayer);
