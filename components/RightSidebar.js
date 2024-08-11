import styles from '../styles/module/rightSidebar.module.css';
import ListContainer from './ListContainer';

const RightSidebar = () => {


  const recentlyPlayedArr = [
    {
      id: 1,
      imagePath: '/music/music1.jpg',
      title: 'Song 1',
      singer: 'ash',
      musicPath: '/path/to/music1.mp3',
    },
    {
      id: 2,
      imagePath: '/music/music3.jpg',
      title: 'Song 2',
      singer: 'ash',
      musicPath: '/path/to/music1.mp3',
    },
    {
      id: 3,
      imagePath: '/music/music4.png',
      title: 'Song 12',
      singer: 'ash',
    },
  ];

  const myPlaylistsArr = [
    {
      id: 1,
      imagePath: '/music/music1.jpg',
      title: 'Song 1',
      singer: 'ash',
      musicPath: '/path/to/music1.mp3',
    },
    {
      id: 2,
      imagePath: '/music/music3.jpg',
      title: 'Song 2',
      singer: 'ash',
      musicPath: '/path/to/music1.mp3',
    },
    {
      id: 3,
      imagePath: '/music/music4.png',
      title: 'Song 12',
      singer: 'ash',
    },
  ]

  return (
    <div className={`${styles.sidebar} flex flex-col p-6`}>
      <div className="w-full profile flex gap-4 items-center justify-start">
        <img src="/images/profile.jpeg" alt="Profile" className="rounded-full w-8 h-8" />
        <h4 className="text-white text-center">Ashutosh</h4>
      </div>
      <div className="w-full overflow-y-auto">
        <ListContainer title={'Recently Played'} data={recentlyPlayedArr} />
        <ListContainer title={'My Playlists'} data={myPlaylistsArr} />
      </div>  
    </div>
  );
};

export default RightSidebar;
