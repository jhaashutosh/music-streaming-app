import styles from '../styles/module/rightSidebar.module.css';
import ListContainer from './ListContainer';

const RightSidebar = ({currentMusic, setCurrentMusic}) => {

  const recentlyPlayedArr = [
    {
      id: 1,
      imagePath: '/musicCovers/music1.jpg',
      title: 'Song 1',
      singer: 'ash',
      musicPath: '/music/music1.mp3',
    },
    {
      id: 2,
      imagePath: '/musicCovers/music3.jpg',
      title: 'Song 2',
      singer: 'ashu',
      musicPath: '/music/music2.mp3',
    },
    {
      id: 3,
      imagePath: '/musicCovers/music4.png',
      title: 'Song 12',
      singer: 'ashutosh',
      musicPath: '/music/music3.mp3',
    },
  ];

  const myPlaylistsArr = [
    {
      id: 1,
      imagePath: '/musicCovers/music1.jpg',
      title: 'Song 1',
      singer: 'ash',
      musicPath: '/music/music1.mp3',
    },
    {
      id: 2,
      imagePath: '/musicCovers/music3.jpg',
      title: 'Song 2',
      singer: 'ashu',
      musicPath: '/music/music2.mp3',
    },
    {
      id: 3,
      imagePath: '/musicCovers/music4.png',
      title: 'Song 12',
      singer: 'ashutosh',
      musicPath: '/music/music3.mp3',
    },
  ]

  return (
    <div className={`${styles.sidebar} flex flex-col p-6`}>
      <div className="w-full profile flex gap-4 items-center justify-start">
        <img src="/images/profile.jpeg" alt="Profile" className="rounded-full w-8 h-8" />
        <h4 className="text-white text-center">Ashutosh</h4>
      </div>
      <div className="w-full overflow-y-auto">
        <ListContainer currentMusic={currentMusic} setCurrentMusic={setCurrentMusic} title={'Recently Played'} data={recentlyPlayedArr} />
        <ListContainer currentMusic={currentMusic} setCurrentMusic={setCurrentMusic} title={'My Playlists'} data={myPlaylistsArr} />
      </div>  
    </div>
  );
};

export default RightSidebar;
