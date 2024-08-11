import styles from '../styles/Header.module.css';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className={`${styles.header} bg-secondary-color`}>
      <SearchBar />
      <div className={styles.menu}>
        <img src="/images/menu.png" alt="menu" />
      </div>
    </header>
  );
}
