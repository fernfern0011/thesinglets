'use client';
import React, { useEffect } from 'react';
import styles from '../../styles/profile_page.module.css';
import PostExample1 from '../../components/postExample1.js';
import PostExample2 from '../../components/postExample2.js';
import PostExample3 from '../../components/postExample3.js';
import Profile from '../../components/profile.js';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
        <main className={styles.main}>
            <a href='/landing_page'className={`${styles.h1} jetbrains-mono`}>The Singlets</a>

            <div className={styles.profilePic}>
                <AccountCircleIcon sx={{ fontSize: 120 }}/>
            </div>
            <div className={styles.profile}>
                <div className={styles.profileInfo}>
                    <p className={styles.name}>dylanny</p>
                    <p className={styles.handle}>@dylanny</p>
                    <p>Male | 176cm</p>
                    <p>Nothing to describe here</p>
                </div>
                <Profile 
                    classname={styles.editButton}
                />
                <div className={styles.following}>
                    <p className={styles.following1}>0 Post</p>
                    <a className={styles.following1} href="Follower Overlay">0 Follower</a>
                    <a className={styles.following1} href="Following Overlay">0 Following</a>
                </div>

            </div>

            <hr className={styles.horizontalLine}/>
            <div className={styles.tab}>
            <button className={styles.tablinks} onClick={(evt) => openTab(evt, 'posts')}>
                Posts
            </button>
            <button className={styles.tablinks} onClick={(evt) => openTab(evt, 'saved')}>
                Saved
            </button>
            <button className={styles.tablinks} onClick={(evt) => openTab(evt, 'upvoted')}>
                Upvoted
            </button>
            <button className={styles.tablinks} onClick={(evt) => openTab(evt, 'myCloset')}>
                My Closet
            </button>
        </div>

        <div id="posts" className={`${"tabcontent"}`}>
            <PostExample1 />
            <PostExample3 />
            <PostExample2 />
        </div>

        <div id="saved" className={`${"tabcontent"}`}>
            <PostExample1 />
            <PostExample3 />
        </div>

        <div id="upvoted" className={`${"tabcontent"}`}>
            <PostExample3 />
            <PostExample2 />
        </div>

        <div id="myCloset" className={`${"tabcontent"}`}>
            <PostExample1 />
        </div>

      </main>
    )
}

export default SearchBarTabs;