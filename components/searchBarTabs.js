'use client';
import React, { useEffect } from 'react';
import styles from '/styles/components/tabs.module.css';

function SearchBarTabs() {
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
        <main>
            <div className={styles.tab}>
            <button className={styles.tablinks} onClick={(evt) => openTab(evt, 'outfits')}>
                Outfits
            </button>
            <button className={styles.tablinks} onClick={(evt) => openTab(evt, 'people')}>
                People
            </button>
            <button className={styles.tablinks} onClick={(evt) => openTab(evt, 'hashtag')}>
                Hashtag
            </button>
        </div>
        <hr className={styles.horizontalLine}/>

        <div id="outfits" className={`${"tabcontent"}`}>
            <b>Search Keyword Ranking 1</b>
        </div>

        <div id="people" className={`${"tabcontent"}`}>
            <b>Search Keyword Ranking 2</b>
        </div>

        <div id="hashtag" className={`${"tabcontent"}`}>
            <b>Search Keyword Ranking 3</b>
        </div>

      </main>
    )
}

export default SearchBarTabs;