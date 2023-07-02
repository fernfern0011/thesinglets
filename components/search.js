import React from 'react';
import styles from '/styles/components/search.module.css';

const Search = () => (
    <a className={styles.search} href='/search_page'>
        <img src="/images/icons8-search-30.png" alt="Image description"></img>
    </a>
)

export default Search;