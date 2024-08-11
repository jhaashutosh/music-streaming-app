import React from 'react'
import styles from '../styles/module/searchBar.module.css'
import { FaSearch as SearchIcon } from "react-icons/fa";

function SearchBar() {
  return (
    <div className={styles.searchBar}>
        <SearchIcon color='black' />
        <input className={styles.input} type="text" placeholder="Search for artists, songs, or albums" />
    </div>
  )
}

export default SearchBar