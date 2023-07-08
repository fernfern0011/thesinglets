import React from 'react';
import SearchBarTabs from '/components/searchBarTabs.js';
import styles from '../../styles/search_page.module.css';

function SearchPage() {

  return (
    <main className={styles.main}>
      <div className={styles.searchContainer}>
        <form className={styles.searchBar} action="/example.html" method="POST" class='regis'>
          <img className={styles.searchIcon} src="/images/icons8-search-30.png" alt="Image description"></img>
          <input className={styles.input} placeholder='Search' type="text" name="input" id="input" />
        </form>
      </div>

      <SearchBarTabs />


        </main>
    )
  }

export default SearchPage;