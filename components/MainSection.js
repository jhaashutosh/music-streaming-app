import FeaturedSection from './FeaturedSection';
import styles from '../styles/module/main.module.css';
import Header from './Header';
import MusicCardRibbon from './MusicCardRibbon';

const MainSection = ({currentMusic, setCurrentMusic}) => {

  const hits = [
    {
      id: 1,
      imagePath: '/musicCovers/music1.jpg',
      title: 'Song 1',
      singer: 'asvnakjsvbajvn janvlanvlj',
      musicPath: '/music/music1.mp3',
    },
    {
      id: 2,
      imagePath: '/musicCovers/music2.avif',
      title: 'Song 2',
      singer: 'asnbakb va dvadv',
      musicPath: '/music/music2.mp3',
    },
    {
      id: 3,
      imagePath: '/musicCovers/music3.jpg',
      title: 'Song 12',
      singer: 'Samsnv kajvjasn v',
      musicPath: '/music/music3.mp3',
    },
    {
      id: 4,
      imagePath: '/musicCovers/music4.png',
      title: 'Song 1222',
      singer: 'askvbajhsbv adv',
      musicPath: '/music/music4.mp3',
    },
    {
      id: 5,
      imagePath: '/musicCovers/music5.jpg',
      title: 'Song 122222',
      singer: 'asnvc asbckjasb vcav',
      musicPath: '/music/music5.mp3',
    },
    {
      id: 6,
      imagePath: '/musicCovers/music6.jpg',
      title: 'Song 1',
      singer: 'Singer 122asmcnbasc222',
      musicPath: '/music/music1.mp3',
    },
    {
      id: 7,
      imagePath: '/musicCovers/music7.webp',
      title: 'Song 1',
      singer: 'Singer 122222222222',
      musicPath: '/music/music2.mp3',
    },
    {
      id: 8,
      imagePath: '/musicCovers/music8.jpg',
      title: 'Song 1',
      singer: 'Singer 122222233444',
      musicPath: '/music/music3.mp3',
    },
    {
      id: 9,
      imagePath: '/musicCovers/music3.jpg',
      title: 'Song 1',
      singer: 'Singer 122222asfjb233444',
      musicPath: '/music/music4.mp3',
    },
  ];


  return (
    <div className={`${styles.main} flex flex-col overflow-hidden`}>
      <Header />
      <FeaturedSection />
      <div style={{ overflowY: 'auto', scrollBehavior: 'smooth'}}>
        <MusicCardRibbon currentMusic = {currentMusic} setCurrentMusic = {setCurrentMusic} songsArray = {hits} heading = {'Top Hits'}/>
        <MusicCardRibbon currentMusic = {currentMusic} setCurrentMusic = {setCurrentMusic} songsArray = {hits} heading = {'New Releases'} />
      </div>
    </div>
  );
};

export default MainSection;