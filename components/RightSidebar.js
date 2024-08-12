import styles from '../styles/module/rightSidebar.module.css';
import ListContainer from './ListContainer';

const RightSidebar = ({currentMusic, setCurrentMusic}) => {

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
