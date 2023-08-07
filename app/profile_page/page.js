"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '/styles/profile_page.module.css';
import PostExample1 from '/components/postExample1.js';
import PostExample2 from '/components/postExample2.js';
import PostExample3 from '/components/postExample3.js';
import { useSessionStorage } from '../../sessionChecker';
import ButtonMUI from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function SearchBarTabs({}) {
  const isLoggedIn = useSessionStorage();
  const [userInfo, setUserInfo] = useState({});
  const userUsernameFromSession = typeof window !== 'undefined' ? sessionStorage.getItem('userUsername') : null;

  useEffect(() => {
    // Fetch user information from the server
    const fetchUserData = async () => {
      try {
        // Step 1: Fetch the list of all accounts
        const response = await axios.get('http://localhost:3500/api/account/getAllAccounts');
        const accounts = response.data;

        // Step 2: Find the matching account by accUsername
        const matchingAccount = accounts.find((account) => account.accUsername === userUsernameFromSession);
        // console.log(matchingAccount._id); 

        if (matchingAccount) {
          // Step 3: Fetch the user information using the accID
          const userInfoResponse = await axios.get(`http://localhost:3500/api/userinfo/getUserInfo`);
          const userInfoArray = userInfoResponse.data;
          const matchingUserInfo = userInfoArray.find((userInfo) => userInfo.accID === matchingAccount._id);
          setUserInfo(matchingUserInfo); // Assuming the response is an array of one user's info
        } else {
          console.error('Account with the given username not found');
        }
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };
    fetchUserData();
  }, [userUsernameFromSession]); // Add userUsernameFromSession as a dependency to fetch data when it changes

  if (!isLoggedIn) {
    return null;
  }

  return (
    <main className={styles.main}>
      <a href='/landing_page' className={`${styles.h1} jetbrains-mono`}>The Singlets</a>

      <div className={styles.profilePic}>
        <AccountCircleIcon sx={{ fontSize: 120 }} />
      </div>
      <div className={styles.profile}>
        <div className={styles.profileInfo}>
          <p className={styles.name}>{userUsernameFromSession}</p>
          <p className={styles.handle}>@{userInfo.nickname}</p>
          <p>{userInfo.bio}</p>
        </div>
        <ButtonMUI
          className={styles.editButton}
          variant="contained"
          fullWidth='True'
          size='small'
        >
          Edit Profile
        </ButtonMUI>
        <div className={styles.following}>
          <p className={styles.following1}>0 Post</p>
          <a className={styles.following1} href="Follower Overlay">0 Follower</a>
          <a className={styles.following1} href="Following Overlay">0 Following</a>
        </div>
      </div>
      
      <hr className={styles.horizontalLine} />
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
  );
}

export default SearchBarTabs;
