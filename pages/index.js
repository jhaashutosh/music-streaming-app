import { useState } from 'react';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import MainSection from '../components/MainSection';
import MusicPlayer from '../components/MusicPlayer';

export default function Home() {

  const [currentMusic, setCurrentMusic] = useState({
    id: 1,
    imagePath: '/musicCovers/music1.jpg',
    title: 'Song 1',
    singer: 'asvnakjsvbajvn janvlanvlj',
    musicPath: '/music/music1.mp3',
  });

  return (
    <div className="flex h-screen w-full justify-between">
      <div className='w-full mb-16 flex'>
        <LeftSidebar />
        <MainSection currentMusic={currentMusic} setCurrentMusic={setCurrentMusic}/>
        <RightSidebar currentMusic={currentMusic} setCurrentMusic={setCurrentMusic} />
      </div>
      <MusicPlayer currentMusic={currentMusic} />
    </div>
  );
}
