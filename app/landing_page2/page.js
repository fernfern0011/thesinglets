import React from 'react';
import TabComponent from '/components/tabs.js';
import Dropdown from '/components/dropdown.js';
import Overlay1 from '/components/overlay1.js';
import Search from '/components/search.js';

import styles from '/styles/landing_page.module.css';

const LandingPage = () => (
  <main className={styles.main}>
    <h1 className={`${styles.h1} jetbrains-mono`}>The Singlets</h1>
    <Overlay1 />
    <Search />
    <Dropdown />
    <TabComponent />
  </main>
);

export default LandingPage;