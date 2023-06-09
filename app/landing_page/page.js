'use client';
import React, { useEffect } from 'react';
import SearchPage from '/app/search_page/page.js';
import FormDialog from '/components/login_overlay.js';

import PostExample1 from '/components/postExample1.js';
import PostExample2 from '/components/postExample2.js';
import PostExample3 from '/components/postExample3.js';
// import styles from '/styles/components/tabs.module.css';

import DropdownGender from '/components/dropdownGender.js';
import DropdownBrand from '/components/dropdownBrand.js';
import DropdownCategory from '/components/dropdownCategory.js';
import DropdownColour from '/components/dropdownColour.js';


import styles from '/styles/landing_page.module.css';

export default function LandingPage() {
  useEffect(() => {
    // By default, open the first tab
    document.getElementsByClassName(styles.tablinks)[0].click();
  }, []);

  function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName('tabcontent');
    const tablinks = document.getElementsByClassName(styles.tablinks);

    // Hide all tab content
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }

    // Remove the "active" class from all tab buttons
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove(styles.active);
    }

    // Show the selected tab content and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add(styles.active);
  }

  return (
    <main className={styles.main}>
      <h1 className={`${styles.h1} jetbrains-mono`}>The Singlets</h1>
      <FormDialog />
      <SearchPage />
      <br></br>
      <div>
            <div className={styles.tab}>
            <button className={styles.tablinks} onClick={(evt) => openTab(evt, 'forYou')}>
            For You
            </button>
            <button className={styles.tablinks} onClick={(evt) => openTab(evt, 'following')}>
            Following
            </button>
            <button className={styles.tablinks} onClick={(evt) => openTab(evt, 'hashtag')}>
            Hashtag
            </button>
        </div>
        <hr className={styles.horizontalLine}/>

        <div id="forYou" className={`${"tabcontent"}`}>
          <DropdownGender />
          <DropdownBrand />
          <DropdownCategory />
          <DropdownColour />
          <br></br>
          <PostExample1 />
          <PostExample3 />
          <PostExample2 />
        </div>

{/* Following Tab */}
      <div id="following" className={`${"tabcontent"}`}>
        {/* <Dropdown /> */}
        <PostExample2 />
      </div>

{/* Hashtag Tab */}
      <div id="hashtag" className={`${"tabcontent"}`}>
        {/* <Dropdown /> */}
        <PostExample3 />
      </div>

      </div>
    </main>

  );
}
