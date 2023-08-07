'use client';
import React, { useState } from 'react';
import { TagsInput } from "react-tag-input-component"; 
import styles from '/styles/create_post_page.module.css';
import { useRouter } from 'next/navigation';

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CircleIcon from '@mui/icons-material/Circle';
import Grid from '@mui/material/Grid';
import ImageIcon from '@mui/icons-material/Image';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

import Box from '@mui/material/Box';

export default function CreatePost3() {
    const router = useRouter();
    // const { image } = router.query;

    return (
        <main className={styles.main}>
            <a href='/landing_page'className={`${styles.h1} jetbrains-mono`}>The Singlets</a>
            {/* {image && <img src={image} alt="Preview" />} */}
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
                    <hr style={{ background: '#A2F07B' }} className={styles.progressBarLine} />
                    <p style={{ left: '-11px'}} className={styles.progressBarDescription}>Upload Image</p>
                </div>
                <div className={styles.progressBar}>
                    <p className={styles.progressBarNumber}>2</p>
                    <CircleIcon
                        sx={{
                            color: '#A2F07B',
                            fontSize: 35, 
                        }}
                    />
                    <hr style={{ background: '#A2F07B' }} className={styles.progressBarLine} />
                    <hr style={{ background: '#00C2FF' }} className={styles.progressBarLine} />
                    <p style={{ left: '4px'}} className={styles.progressBarDescription}>Tag Item</p>
                </div>
                <div className={styles.progressBar}>
                    <p className={styles.progressBarNumber}>3</p>
                    <RadioButtonCheckedIcon
                        sx={{
                            color: '#00C2FF',
                            fontSize: 35, 
                        }}
                    />
                    <p style={{ left: '8px'}} className={styles.progressBarDescription}>Submit</p>
                </div>
            </div>

            <a className={styles.button} style= {{ left: '25%', marginBottom: '7%' }} href='/create_post_page'>Back</a>
            <a className={styles.button} style= {{ right: '25%', marginBottom: '7%' }} href='/create_post_page3'>Submit</a>
            
            <br/>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginLeft: '10%' }}>
        <Grid container spacing={2} sx={{ width: '60%' }}>
        
        {/* Image column */}
        <Grid item xs={4}>
            <div className={styles.container}>
              <img
                src="/images/le_racoon.jpg"
                alt="Circle Image"
                className={styles.profileImage}
              />
            </div>
          </Grid>

          {/* Fields column */}
          <Grid item xs={8}>
            <Grid container spacing={2}>

              {/* Desc field */}
              <Grid item xs={8}>
                <InputLabel
                  htmlFor="standard-brandName"
                  sx={{ textAlign: 'left', fontSize: 13, color: 'black' }}
                >
                  Description <span style={{ color: 'red' }}>*</span>
                </InputLabel>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      id="outlined-multiline-static"
                      multiline
                      rows={4}
                      variant="outlined"
                      inputProps={{
                        style: { fontSize: 9 }, // Adjust the font size as needed
                      }}
                    />
                  </div>
                </Box>
              </Grid>

              {/* Tag field */}
              <Grid item xs={8}>
                <InputLabel
                  htmlFor="standard-itemName"
                  sx={{ textAlign: 'left', fontSize: 13, color: 'black', paddingBottom: '4px' }}
                >
                  Tag
                </InputLabel>
                <div style={{ width: '100%', marginLeft: '0.3rem' }}>
                <TagsInput
                    name="tags"
                    placeHolder="# Insert Tag"
                />
                </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Box>
    </main>
  )
}