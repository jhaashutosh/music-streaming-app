import styles from '../styles/module/rightSidebar.module.css';
import ListContainer from './ListContainer';

const RightSidebar = ({currentMusic, setCurrentMusic}) => {

  const recentlyPlayedArr = [
    {
      id: 1,
      imagePath: '/musicCovers/music1.jpg',
      title: 'Song 1',
      singer: 'asvnakjsvbajvn janvlanvlj',
      musicPath: '/music/music1.mp3',
    },
    {
      id: 2,
      imagePath: '/musicCovers/music2.jpg',
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

  const myPlaylistsArr = [
    {
      id: 1,
      imagePath: '/musicCovers/music1.jpg',
      title: 'Song 1',
      singer: 'asvnakjsvbajvn janvlanvlj',
      musicPath: '/music/music1.mp3',
    },
    {
      id: 2,
      imagePath: '/musicCovers/music2.jpg',
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
  ]

  return (
    <div className={`${styles.sidebar} flex flex-col p-6`}>
      <div className="w-full profile flex gap-4 items-center justify-start">
        <img src="/images/profile.jpeg" alt="Profile" className="rounded-full w-8 h-8" />
        <h4 className="text-white text-center">Ashutosh</h4>
      </div>
      <div className="w-full overflow-y-auto">
        <ListContainer title={'Recently Played'}/>
        <ListContainer title={'My Playlists'}/>
      </div>  
    </div>
  );
};

export default RightSidebar;
