import React, { useEffect } from 'react';
import styles from '../../styles/search_page.module.css'

export default function Registration() {
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
            <img src="/icons8-search-30.png" alt="Image description"></img>

            <form action="/example.html" method="POST" class='regis'>
                    <p>
                        <label className={styles.label} for="username">Search</label><br />
                        <input className={styles.input} type="text" name="username" id="username" />
                    </p>
            </form>

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
            <div className={styles.post}>
                <br></br>
                <a href='POST PAGE'>
                    <img className={styles.postImage} src="/9ddd4a877e18d4318e8329f6b4b74b7e.jpg" alt="image1 FOR U"></img>
                </a>
                <br></br>
                <img className={styles.upvote} src="/upward-arrow-icon-2.jpg" alt="up arrow"></img>
                <p className={styles.voteNumber}>14</p>
                <img className={styles.downvote} src="/upward-arrow-icon-2.jpg" alt="down arrow"></img>
                <p className={styles.voteNumber}>2</p>
                <br></br>
                <a className={styles.profileLink} href="/profile page">iamlittlefernnnn</a>
                <p className={styles.postDescription}>Lorem Ipsum is simply dummy text of the printing</p>
            </div>
        </div>

        </main>
    )
}
