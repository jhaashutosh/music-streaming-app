import FeaturedSection from './FeaturedSection';
import TopHitsSection from './TopHitsSection';
import NewReleasesSection from './NewReleasesSection';
import styles from '../styles/module/main.module.css';
import Header from './Header';

const MainSection = () => {
  return (
    <div className={`${styles.main} flex flex-col`}>
      <Header />
      <FeaturedSection />
      <TopHitsSection />
      <NewReleasesSection />
    </div>
  );
};

export default MainSection;