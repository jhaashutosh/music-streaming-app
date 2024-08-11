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
  } from "react-icons/fa";
  import styles from "../styles/module/musicPlayer.module.css";
  
  const MusicPlayer = () => {
    return (
      <div
        className={`${styles.player} fixed bottom-0 left-0 right-0 p-4 bg-black flex items-center justify-between`}
      >
        {/* Song Info */}
        <div className="flex items-center">
          <div className="flex items-center">
            <img src="/images/album-cover.png" alt="Album Cover" className="h-12 w-12 rounded" />
            <div className="ml-4">
              <h4 className="text-white">Date</h4>
              <p className="text-gray-400">あれくん</p>
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
            <div className="bg-white p-2 rounded-full">
              <FaPause className="text-black" /> {/* Toggle between FaPause and FaPlay */}
            </div>
            <FaStepForward className="text-white" />
            <FaSync className="text-white" />
          </div>
    
          <div className="flex-grow w-full">
            <input type="range" className={`${styles.rangeInput} w-full`} />
          </div>
        </div>
  
        {/* Volume and Other Controls */}
        <div className="flex items-center space-x-4">
          <FaVolumeUp className="text-white" />
          <input type="range" className={`${styles.rangeInput} w-24`} />
          <FaMicrophone className="text-white" />
          <FaDesktop className="text-white" />
          <FaShareAlt className="text-white" />
        </div>
      </div>
    );
  };
  
  export default MusicPlayer;
  