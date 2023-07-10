'use client';
import React from 'react';
import LandingPageTabs from '/components/landingPageTabs.js';
import Search from '/components/search.js';
import FormDialog from '/components/login_overlay.js';

import styles from '/styles/landing_page.module.css';

const LandingPage = () => (
  <main className={styles.main}>
    <h1 className={`${styles.h1} jetbrains-mono`}>The Singlets</h1>
    <FormDialog />
    <Search />
    <LandingPageTabs />
  </main>
);

export default LandingPage;