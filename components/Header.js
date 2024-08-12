import styles from '../styles/Header.module.css';
import SearchBar from './SearchBar';
import { BsThreeDots as MenuIcon } from "react-icons/bs";

export default function Header() {
  return (
    <header className={`${styles.header} bg-secondary-color`}>
      <SearchBar />
      {/* <div className={styles.menu}>
        <MenuIcon />
      </div> */}
    </header>
  );
}
