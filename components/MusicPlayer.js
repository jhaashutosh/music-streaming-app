import React, { useState, useRef, useEffect } from 'react';
import {
  FaHeart,
  FaPlus,
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaRandom,
  FaSync,
  FaVolumeUp,
  FaMicrophone,
  FaDesktop,
  FaShareAlt,
  FaMicrophoneSlash,
} from "react-icons/fa";
import styles from "../styles/module/musicPlayer.module.css";

const MusicPlayer = ({ musicPath = '/music/music1.mp3', title = 'Song 1', singer = 'ash' }) => {
  console.log({ musicPath, title, singer });
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;

      const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
      };

      const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
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

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    audioRef.current.muted = !isMuted; // Corrected the logic here
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value;
  };

  const handleProgressChange = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    setCurrentTime(seekTime);
    audioRef.current.currentTime = seekTime;
  };

  const progressValue = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className={`${styles.player} fixed bottom-0 left-0 right-0 p-4 bg-black flex items-center justify-between`}
    >
      {/* Song Info */}
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="ml-4">
            <h4 className="text-white truncate">{title}</h4>
            <p className="text-gray-400 text-sm truncate">{singer}</p>
          </div>
        </div>
        <div className="flex items-center ml-6 space-x-4">
          <FaHeart className="text-white" />
          <FaPlus className="text-white" />
        </div>
      </div>

      {/* Controls */}
      <div className="controls flex items-center space-x-4 text-white w-full flex-col px-24">
        <div className="flex items-center space-x-4">
          <FaRandom className="text-white" />
          <FaStepBackward className="text-white" />
          <div
            className="bg-white p-2 rounded-full cursor-pointer"
            onClick={togglePlayPause}
          >
            {isPlaying ? (
              <FaPause className="text-black" />
            ) : (
              <FaPlay className="text-black" />
            )}
          </div>
          <FaStepForward className="text-white" />
          <FaSync className="text-white" />
        </div>

        <div className="flex-grow w-full">
          <input
            type="range"
            className={`${styles.rangeInput} w-full`}
            min="0"
            max="100"
            value={progressValue}
            onChange={handleProgressChange}
          />
        </div>
      </div>

      {/* Volume and Other Controls */}
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
        {!isMuted ? <FaMicrophoneSlash className="text-white" onClick={toggleMute} /> : <FaMicrophone className="text-white" onClick={toggleMute} />}
        <FaDesktop className="text-white" />
        <FaShareAlt className="text-white" />
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src={musicPath} />
    </div>
  );
};

export default MusicPlayer;