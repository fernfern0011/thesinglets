import React, { useEffect, useState } from 'react';
import styles from '/styles/landing_page.module.css';

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

    const [overlayVisible, setOverlayVisible] = useState(false);
    function openOverlay() {
      setOverlayVisible(true);
    }
    
    function closeOverlay() {
      setOverlayVisible(false);
    }

  return (
    <main className={styles.main}>
      <div className={styles.landing_page}>
      <h1 className={`${styles.h1} jetbrains-mono`}>The Singlets</h1>

{/* Login Button */}
      <button className={`${styles.open} ${styles.loginButton}`} onClick={openOverlay}>Login</button>
      {overlayVisible && (
        <div id="overlay" className={`${styles.overlayPopup} ${'overlay'}`} style={{justifyContent:"center"}}>
          <div className={`${styles.popup} ${"popup"}`}>
            <button className={styles.close} onClick={closeOverlay}>X</button>
            <iframe className={styles.iframe} src="/login_page"></iframe>
          </div>
        </div>
      )}

{/* Tab Buttons */}
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

      <a className={styles.search} href='/search_page'>
          <img src="/icons8-search-30.png" alt="Image description"></img>
      </a>
      
      <select name="gender" className={styles.dropdown}>
        <option value="all">All</option>
        <option value="men">Men</option>
        <option value="woman">Woman</option>
      </select>

      <select name="brand" className={styles.dropdown}>
        <option value="Zara">Zara</option>
        <option value="Mango">Mango</option>
      </select>

      <select name="category" className={styles.dropdown}>
        <option value="category">Category</option>
        <option value="tops">Tops</option>
        <option value="bottoms">Bottoms</option>
      </select>

      <select name="colour" className={styles.dropdown}>
        <option value="colour">Colour</option>
        <option value="black">Black</option>
        <option value="white">White</option>
        <option value="red">Red</option>
      </select>

{/* For You Tab */}
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

{/* Following Tab */}
      <div id="following" className={`${"tabcontent"}`}>
        <div className={styles.post}>
          <a href='POST PAGE'>
              <img className={styles.postImage} src="/images.jpg" alt="image1 FOR U"></img>
          </a>
          <br></br>
          <img className={styles.upvote} src="/upward-arrow-icon-2.jpg" alt="up arrow"></img>
          <p className={styles.voteNumber}>14</p>
          <img className={styles.downvote} src="/upward-arrow-icon-2.jpg" alt="down arrow"></img>
          <p className={styles.voteNumber}>2</p>
          <br></br>
          <a className={styles.profileLink} href="/profile page">ryoryorooooo</a>
          <p className={styles.postDescription}>Lorem Ipsum is simply dummy text of the printing</p>
          </div>

          <div className={styles.post}>
          <a href='POST PAGE'>
              <img className={styles.postImage} src="/images.jpg" alt="image1 FOR U"></img>
          </a>
          <br></br>
          <img className={styles.upvote} src="/upward-arrow-icon-2.jpg" alt="up arrow"></img>
          <p className={styles.voteNumber}>14</p>
          <img className={styles.downvote} src="/upward-arrow-icon-2.jpg" alt="down arrow"></img>
          <p className={styles.voteNumber}>2</p>
          <br></br>
          <a className={styles.profileLink} href="/profile page">ryoryorooooo</a>
          <p className={styles.postDescription}>Lorem Ipsum is simply dummy text of the printing</p>
          </div>

          <div className={styles.post}>
          <a href='POST PAGE'>
              <img className={styles.postImage} src="/images.jpg" alt="image1 FOR U"></img>
          </a>
          <br></br>
          <img className={styles.upvote} src="/upward-arrow-icon-2.jpg" alt="up arrow"></img>
          <p className={styles.voteNumber}>14</p>
          <img className={styles.downvote} src="/upward-arrow-icon-2.jpg" alt="down arrow"></img>
          <p className={styles.voteNumber}>2</p>
          <br></br>
          <a className={styles.profileLink} href="/profile page">ryoryorooooo</a>
          <p className={styles.postDescription}>Lorem Ipsum is simply dummy text of the printing</p>
          </div>

          <div className={styles.post}>
          <a href='POST PAGE'>
              <img className={styles.postImage} src="/images.jpg" alt="image1 FOR U"></img>
          </a>
          <br></br>
          <img className={styles.upvote} src="/upward-arrow-icon-2.jpg" alt="up arrow"></img>
          <p className={styles.voteNumber}>14</p>
          <img className={styles.downvote} src="/upward-arrow-icon-2.jpg" alt="down arrow"></img>
          <p className={styles.voteNumber}>2</p>
          <br></br>
          <a className={styles.profileLink} href="/profile page">ryoryorooooo</a>
          <p className={styles.postDescription}>Lorem Ipsum is simply dummy text of the printing</p>
          </div>

          <div className={styles.post}>
          <a href='POST PAGE'>
              <img className={styles.postImage} src="/images.jpg" alt="image1 FOR U"></img>
          </a>
          <br></br>
          <img className={styles.upvote} src="/upward-arrow-icon-2.jpg" alt="up arrow"></img>
          <p className={styles.voteNumber}>14</p>
          <img className={styles.downvote} src="/upward-arrow-icon-2.jpg" alt="down arrow"></img>
          <p className={styles.voteNumber}>2</p>
          <br></br>
          <a className={styles.profileLink} href="/profile page">ryoryorooooo</a>
          <p className={styles.postDescription}>Lorem Ipsum is simply dummy text of the printing</p>
          </div>
      </div>

{/* Hashtag Tab */}
      <div id="hashtag" className={`${"tabcontent"}`}>
        <div className={styles.post}>
          <br></br>
          <a href='POST PAGE'>
              <img className={styles.postImage} src="6fee8ba216efcdf25ea6fa3db8d066f1.jpg" alt="image1 FOR U"></img>
          </a>
          <br></br>
          <img className={styles.upvote} src="/upward-arrow-icon-2.jpg" alt="up arrow"></img>
          <p className={styles.voteNumber}>14</p>
          <img className={styles.downvote} src="/upward-arrow-icon-2.jpg" alt="down arrow"></img>
          <p className={styles.voteNumber}>2</p>
          <br></br>
          <a className={styles.profileLink} href="/profile page">angelmuah</a>
          <p className={styles.postDescription}>Lorem Ipsum is simply dummy text of the printing</p>
        </div>

        <div className={styles.post}>
          <br></br>
          <a href='POST PAGE'>
              <img className={styles.postImage} src="6fee8ba216efcdf25ea6fa3db8d066f1.jpg" alt="image1 FOR U"></img>
          </a>
          <br></br>
          <img className={styles.upvote} src="/upward-arrow-icon-2.jpg" alt="up arrow"></img>
          <p className={styles.voteNumber}>14</p>
          <img className={styles.downvote} src="/upward-arrow-icon-2.jpg" alt="down arrow"></img>
          <p className={styles.voteNumber}>2</p>
          <br></br>
          <a className={styles.profileLink} href="/profile page">angelmuah</a>
          <p className={styles.postDescription}>Lorem Ipsum is simply dummy text of the printing</p>
        </div>

        <div className={styles.post}>
          <br></br>
          <a href='POST PAGE'>
              <img className={styles.postImage} src="6fee8ba216efcdf25ea6fa3db8d066f1.jpg" alt="image1 FOR U"></img>
          </a>
          <br></br>
          <img className={styles.upvote} src="/upward-arrow-icon-2.jpg" alt="up arrow"></img>
          <p className={styles.voteNumber}>14</p>
          <img className={styles.downvote} src="/upward-arrow-icon-2.jpg" alt="down arrow"></img>
          <p className={styles.voteNumber}>2</p>
          <br></br>
          <a className={styles.profileLink} href="/profile page">angelmuah</a>
          <p className={styles.postDescription}>Lorem Ipsum is simply dummy text of the printing</p>
        </div>

        <div className={styles.post}>
          <br></br>
          <a href='POST PAGE'>
              <img className={styles.postImage} src="6fee8ba216efcdf25ea6fa3db8d066f1.jpg" alt="image1 FOR U"></img>
          </a>
          <br></br>
          <img className={styles.upvote} src="/upward-arrow-icon-2.jpg" alt="up arrow"></img>
          <p className={styles.voteNumber}>14</p>
          <img className={styles.downvote} src="/upward-arrow-icon-2.jpg" alt="down arrow"></img>
          <p className={styles.voteNumber}>2</p>
          <br></br>
          <a className={styles.profileLink} href="/profile page">angelmuah</a>
          <p className={styles.postDescription}>Lorem Ipsum is simply dummy text of the printing</p>
        </div>

        <div className={styles.post}>
          <br></br>
          <a href='POST PAGE'>
              <img className={styles.postImage} src="6fee8ba216efcdf25ea6fa3db8d066f1.jpg" alt="image1 FOR U"></img>
          </a>
          <br></br>
          <img className={styles.upvote} src="/upward-arrow-icon-2.jpg" alt="up arrow"></img>
          <p className={styles.voteNumber}>14</p>
          <img className={styles.downvote} src="/upward-arrow-icon-2.jpg" alt="down arrow"></img>
          <p className={styles.voteNumber}>2</p>
          <br></br>
          <a className={styles.profileLink} href="/profile page">angelmuah</a>
          <p className={styles.postDescription}>Lorem Ipsum is simply dummy text of the printing</p>
        </div>
        
      </div>


    </div>
    </main>
  );
}
