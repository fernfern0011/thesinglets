'use client';
// import React, { useState } from 'react';
// import styles from '/styles/components/overlay1.module.css';

// function Overlay1() {
//     const [overlayVisible, setOverlayVisible] = useState(false);
//     function openOverlay() {
//     setOverlayVisible(true);
//     }

//     function closeOverlay() {
//     setOverlayVisible(false);
//     }

//     return (
//         <main>
//             <button className={`${styles.open} ${styles.loginButton}`} onClick={openOverlay}>Login</button>
//             {overlayVisible && (
//                 <div id="overlay" className={`${styles.overlayPopup} ${'overlay'}`} style={{justifyContent:"center"}}>
//                 <div className={`${styles.popup} ${"popup"}`}>
//                     <button className={styles.close} onClick={closeOverlay}>X</button>
//                     <iframe className={styles.iframe} src="/login_page"></iframe>
//                 </div>
//                 </div>
//             )}
//         </main>

//     );
// }

// export default Overlay1;

// Overlay1.js
import React, { useState } from 'react';
import styles from '/styles/components/overlay1.module.css';
import LoginPage from '../app/login_page/page.js';
import RegistrationPage from '../app/registration_page/page.js';

function Overlay1({ page }) {
  const [overlayVisible, setOverlayVisible] = useState(false);

  function openOverlay() {
    setOverlayVisible(true);
  }

  function closeOverlay() {
    setOverlayVisible(false);
  }

  return (
    <main>
      <button className={`${styles.open} ${styles.loginButton}`} onClick={openOverlay}>
        {page === 'login' ? 'Login' : 'Register'}
      </button>
      {overlayVisible && (
        <div id="overlay" className={`${styles.overlayPopup} ${'overlay'}`} style={{ justifyContent: 'center' }}>
          <div className={`${styles.popup} ${'popup'}`}>
            <button className={styles.close} onClick={closeOverlay}>
              X
            </button>
            {page === 'login' ? <LoginPage /> : <RegistrationPage />}
          </div>
        </div>
      )}
    </main>
  );
}

export default Overlay1;