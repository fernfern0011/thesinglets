'use client';
import React, { useState } from 'react';
import styles from '/styles/components/overlay1.module.css';

function Overlay1() {
    const [overlayVisible, setOverlayVisible] = useState(false);
    function openOverlay() {
    setOverlayVisible(true);
    }

    function closeOverlay() {
    setOverlayVisible(false);
    }

    return (
        <main>
            <button className={`${styles.open} ${styles.loginButton}`} onClick={openOverlay}>Login</button>
            {overlayVisible && (
                <div id="overlay" className={`${styles.overlayPopup} ${'overlay'}`} style={{justifyContent:"center"}}>
                <div className={`${styles.popup} ${"popup"}`}>
                    <button className={styles.close} onClick={closeOverlay}>X</button>
                    <iframe className={styles.iframe} src="/login_page"></iframe>
                </div>
                </div>
            )}
        </main>

    );
}

export default Overlay1;