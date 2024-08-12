import FeaturedSection from './FeaturedSection';
import styles from '../styles/module/main.module.css';
import Header from './Header';
import MusicCardRibbon from './MusicCardRibbon';
import { musicList as hits } from '@/data/MusicData';

const MainSection = ({currentMusic, setCurrentMusic}) => {

  return (
    <div className={`${styles.main} flex flex-col overflow-hidden`}>
      {/* <Header /> */}
      <FeaturedSection />
      <div style={{ overflowY: 'auto', scrollBehavior: 'smooth'}}>
        <MusicCardRibbon heading = {'Top Hits'}/>
        <MusicCardRibbon heading = {'New Releases'} />
        <MusicCardRibbon heading = {'Made For You'} />
        <MusicCardRibbon heading = {'Global Top 50'} />
      </div>
    </div>
  );
};

export default MainSection;