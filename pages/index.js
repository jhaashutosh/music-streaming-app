import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import MainSection from '../components/MainSection';
import MusicPlayer from '../components/MusicPlayer';

export default function Home() {
  return (
    <div className="flex h-screen w-full justify-between">
      <div className='w-full mb-16 flex'>
        <LeftSidebar />
        <MainSection />
        <RightSidebar />
      </div>
      <MusicPlayer />
    </div>
  );
}
