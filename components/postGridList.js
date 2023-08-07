import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { GridList, GridListTile, GridListTileBar } from '@mui/material';
import styles from '/styles/components/post.module.css';

const PostGridList = ({}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the server
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3500/api/post/getAllPosts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className={styles.postGrid}>
      {posts.map((item) => (
        <div className={styles.post} key={item._id}>
          <br />
          <a href='#'>
          <img className={styles.postImage} src={'https://placehold.co/100x100'} alt="" />
          </a>
          <br />
          <img className={styles.upvote} src="/images/upward-arrow-icon-2.jpg" alt="up arrow" />
          <p className={styles.voteNumber}>14</p>
          <img className={styles.downvote} src="/images/upward-arrow-icon-2.jpg" alt="down arrow" />
          <p className={styles.voteNumber}>2</p>
          <br />
          <a className={styles.profileLink} href={`/profile/${item.accID}`}>{item.accID}</a>
          <p className={styles.postDescription}>{item.description}</p>
          <p className={styles.postHashtag}>{item.hashtag}</p>
          <p className={styles.postItemTag}>{item.itemTag}</p>
          <p>{item.gender}</p>
        </div>
      ))}
    </div>
  );
};

export default PostGridList;
