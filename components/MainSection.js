import FeaturedSection from './FeaturedSection';
import styles from '../styles/module/main.module.css';
import Header from './Header';
import MusicCardRibbon from './MusicCardRibbon';

const MainSection = () => {


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


  return (
    <div className={`${styles.main} flex flex-col overflow-hidden`}>
      <Header />
      <FeaturedSection />
      <div style={{ overflowY: 'auto', scrollBehavior: 'smooth'}}>
        <MusicCardRibbon songsArray = {hits} heading = {'Top Hits'}/>
        <MusicCardRibbon songsArray = {hits} heading = {'New Releases'} />
      </div>
    </div>
  );
};

export default MainSection;