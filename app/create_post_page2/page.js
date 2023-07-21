'use client';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '/styles/create_post_page.module.css';

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CircleIcon from '@mui/icons-material/Circle';
import ImageIcon from '@mui/icons-material/Image';

export default function CreatePost() {
    // const [selectedImage, setSelectedImage] = useState(null);

    return (
        <main className={styles.main}>
            <a href='/landing_page'className={`${styles.h1} jetbrains-mono`}>The Singlets</a>

            <div className={styles.progressBarContainer}>
                <div className={styles.progressBar}>
                    <p className={styles.progressBarNumber}>1</p>
                    <CircleIcon
                        sx={{
                            color: '#A2F07B',
                            fontSize: 35, 
                        }}
                    />
                    <hr style={{ background: '#A2F07B' }} className={styles.progressBarLine} />
                    <hr style={{ background: '#00C2FF' }} className={styles.progressBarLine} />
                    <p style={{ left: '-11px'}} className={styles.progressBarDescription}>Upload Image</p>
                </div>
                <div className={styles.progressBar}>
                    <p className={styles.progressBarNumber}>2</p>
                    <RadioButtonCheckedIcon
                        sx={{
                            color: '#00C2FF',
                            fontSize: 35, 
                        }}
                    />
                    <hr style={{ background: '#DCDCDC' }} className={styles.progressBarLine} />
                    <hr style={{ background: '#DCDCDC' }} className={styles.progressBarLine} />
                    <p style={{ left: '4px'}} className={styles.progressBarDescription}>Tag Item</p>
                </div>
                <div className={styles.progressBar}>
                    <p className={styles.progressBarNumber}>3</p>
                    <CircleIcon
                        sx={{
                            color: '#DCDCDC',
                            fontSize: 35, 
                        }}
                    />
                    <p style={{ left: '8px'}} className={styles.progressBarDescription}>Submit</p>
                </div>
            </div>

            <a className={styles.button} style= {{ left: '25%' }} href='/create_post_page'>Back</a>
            <a className={styles.button} style= {{ right: '25%' }} href='/create_post_page3'>Next</a>
        </main>
    )
}