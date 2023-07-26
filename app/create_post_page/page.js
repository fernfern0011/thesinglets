'use client';
import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import styles from '/styles/create_post_page.module.css';

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CircleIcon from '@mui/icons-material/Circle';
import ImageIcon from '@mui/icons-material/Image';

export default function CreatePost1() {
    const [selectedImage, setSelectedImage] = useState(null);
    const router = useRouter();
  
    const handleInputChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setSelectedImage(URL.createObjectURL(file));
      }
    };
  
    const handleNextClick = () => {
      if (selectedImage) {
        // Save the selectedImage URL to local storage
        localStorage.setItem('selectedImage', selectedImage);
  
        // Navigate to "CreatePostPage2"
        router.push('/create_post_page2');
      }
    };

    return (
        <main className={styles.main}>
            <a href='/landing_page'className={`${styles.h1} jetbrains-mono`}>The Singlets</a>

            <div className={styles.progressBarContainer}>
                <div className={styles.progressBar}>
                    <p className={styles.progressBarNumber}>1</p>
                    <RadioButtonCheckedIcon
                        sx={{
                            color: '#00C2FF',
                            fontSize: 35, 
                        }}
                    />
                    <hr style={{ background: '#00C2FF' }} className={styles.progressBarLine} />
                    <hr style={{ background: '#DCDCDC' }} className={styles.progressBarLine} />
                    <p style={{ left: '-11px'}} className={styles.progressBarDescription}>Upload Image</p>
                </div>
                <div className={styles.progressBar}>
                    <p className={styles.progressBarNumber}>2</p>
                    <CircleIcon
                        sx={{
                            color: '#DCDCDC',
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

            <div className={styles.uploadImageContainer}>
                {selectedImage ? (
                    <div className={styles.uploadImage}>
                        <label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleInputChange}
                                hidden
                            />
                            <img src={selectedImage} alt="Uploaded" className={styles.imagePreview} />
                        </label>
                        <div className={styles.url}>
                            <p className={styles.imageURL}>{selectedImage}</p>
                        </div>
                    </div>

                ) : (
                    <label className={styles.uploadImage}>
                        <div className={styles.uploadImageIcon}>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleInputChange}
                            hidden
                        />
                        <ImageIcon className={styles.icon} />
                        <p>Upload Image</p>
                        </div>
                    </label>
                )}
            </div>
            <a className={styles.button} style= {{ left: '25%' }} href='/landing_page'>Cancel</a>
            <button
                className={styles.button}
                style={{ right: '25%' }}
                onClick={handleNextClick}
                disabled={!selectedImage}
            >
                Next
            </button>
        </main>
    )
}
