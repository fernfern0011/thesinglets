import React from 'react';
import styles from '/styles/components/post.module.css';

const PostExample2 = () => (
    <div className={styles.post}>
        <br></br>
        <a href='#'>
            <img className={styles.postImage} src="/images/images.jpg" alt="image1 FOR U"></img>
        </a>
        <br></br>
        <img className={styles.upvote} src="/images/upward-arrow-icon-2.jpg" alt="up arrow"></img>
        <p className={styles.voteNumber}>14</p>
        <img className={styles.downvote} src="/images/upward-arrow-icon-2.jpg" alt="down arrow"></img>
        <p className={styles.voteNumber}>2</p>
        <br></br>
        <a className={styles.profileLink} href="/profile page">ryoryorooooo</a>
        <p className={styles.postDescription}>Lorem Ipsum is simply dummy text of the printing</p>
    </div>
);

export default PostExample2;