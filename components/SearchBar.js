import React from 'react'
import styles from '../styles/module/searchBar.module.css'

function SearchBar() {
  return (
    <div className={styles.searchBar}>
        <input type="text" placeholder="Search for artists, songs, or albums" />
    </div>
  )
}

export default SearchBar