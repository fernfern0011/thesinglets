'use client';
import React, { useEffect, useState } from 'react';
import TagItem from '/components/tag_item.js';
import styles from '/styles/create_post_page2.module.css';

import { useMantineTheme, Text, Code, rem, Group, Tooltip } from '@mantine/core';
import { useMove } from '@mantine/hooks';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CircleIcon from '@mui/icons-material/Circle';
import ImageIcon from '@mui/icons-material/Image';

export default function CreatePost2() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [brandName, setBrandName] = useState('');
  const [itemName, setItemName] = useState('');
  const [color, setColor] = useState('');
  useEffect(() => {
    // Retrieve the selectedImage URL from local storage
    const storedImage = localStorage.getItem('selectedImage');
    if (storedImage) {
      setSelectedImage(storedImage);
    }
    const formValues = JSON.parse(localStorage.getItem('tag')) || {};
    setBrandName(formValues.brandName || '');
    setItemName(formValues.itemName || '');
    setColor(formValues.color || '');
  }, []);

  const theme = useMantineTheme();
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if (localStorage.getItem('tag1') && localStorage.getItem('tag2') && localStorage.getItem('tag3') && localStorage.getItem('tag4')) {
      null
    } else {
      setAnchorEl(event.currentTarget);
      localStorage.setItem('tagPosition', JSON.stringify({ x, y }));
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const cleartag1 = () => {
    localStorage.removeItem('tag1');
    window.location.reload();
  };
  const cleartag2 = () => {
    localStorage.removeItem('tag2');
    window.location.reload();
  };
  const cleartag3 = () => {
    localStorage.removeItem('tag3');
    window.location.reload();
  };
  const cleartag4 = () => {
    localStorage.removeItem('tag4');
    window.location.reload();
  };

  const [tag1, setTag1] = useState(null);
  useEffect(() => {
    // Retrieve the tag data from local storage
      const storedTag1 = JSON.parse(localStorage.getItem('tag1'));
      if (storedTag1) {
        // Set the retrieved tag data in the tag1 state
        setTag1({
          brandName: storedTag1.brandName,
          itemName: storedTag1.itemName,
          category: storedTag1.category,
          color: storedTag1.color,
          xPosition: storedTag1.xPosition,
          yPosition: storedTag1.yPosition,
        });
      }
  }, []);
  const [tag2, setTag2] = useState(null);
  useEffect(() => {
    // Retrieve the tag data from local storage
      const storedTag2 = JSON.parse(localStorage.getItem('tag2'));
      if (storedTag2) {
        // Set the retrieved tag data in the tag1 state
        setTag2({
          brandName: storedTag2.brandName,
          itemName: storedTag2.itemName,
          category: storedTag2.category,
          color: storedTag2.color,
          xPosition: storedTag2.xPosition,
          yPosition: storedTag2.yPosition,
        });
      }
  }, []);
  const [tag3, setTag3] = useState(null);
  useEffect(() => {
    // Retrieve the tag data from local storage
      const storedTag3 = JSON.parse(localStorage.getItem('tag3'));
      if (storedTag3) {
        // Set the retrieved tag data in the tag1 state
        setTag3({
          brandName: storedTag3.brandName,
          itemName: storedTag3.itemName,
          category: storedTag3.category,
          color: storedTag3.color,
          xPosition: storedTag3.xPosition,
          yPosition: storedTag3.yPosition,
        });
      }
  }, []);
  const [tag4, setTag4] = useState(null);
  useEffect(() => {
    // Retrieve the tag data from local storage
      const storedTag4 = JSON.parse(localStorage.getItem('tag4'));
      if (storedTag4) {
        // Set the retrieved tag data in the tag1 state
        setTag4({
          brandName: storedTag4.brandName,
          itemName: storedTag4.itemName,
          category: storedTag4.category,
          color: storedTag4.color,
          xPosition: storedTag4.xPosition,
          yPosition: storedTag4.yPosition,
        });
      }
  }, []);

  return (
    <main className={styles.main}>
        <a href='/landing_page'className={`${styles.h1} jetbrains-mono`}>The Singlets</a>
      
        <div className={styles.progressBarContainer}>
        <Tooltip.Floating color='rgba(255, 0, 0, 0.7)' label='Click to Tag'>
          <Button
            className={styles.buttonOverlay}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx= {{
              height: '300px',
              width: '272px',
            }}
          >
          </Button>
        </Tooltip.Floating >
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

    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Group className={styles.image} position="center">
          <div
            style={{
              width: '100%',
              height: '300px',
              backgroundImage: 'none',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              position: 'relative',
            }}
          >
            <img
              clasName={styles.uploadedImage}
              src={decodeURIComponent(selectedImage)}
              alt="Uploaded Image"
              style={{ maxHeight: '300px', maxWidth: '100%' }}
              />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem ><TagItem /></MenuItem>
            </Menu>
          </div>
        </Group>
      </div>
    <div className={styles.tagSection}>
      {tag1 ? (
        <Text className={styles.tagsContainer}>
          <ImageIcon className={styles.descriptionIcon}
            sx={{
              fontSize:'75px',
            }}/>
          <div className={styles.descriptionWords}>
            <p>{tag1.brandName}</p> 
            <p>{tag1.itemName}</p>
            <p>{tag1.color}</p>
          </div>
          <button id="xButton" onClick={cleartag1}>
            X
          </button>   
        </Text>
      ) : null }
      {tag2 && (tag2.brandName) ? (
        <Text className={styles.tagsContainer}>
          <ImageIcon className={styles.descriptionIcon}
            sx={{
              fontSize:'75px',
            }}/>
          <div className={styles.descriptionWords}>
            <p>{tag2.brandName}</p> 
            <p>{tag2.itemName}</p>
            <p>{tag2.color}</p>
          </div>   
          <button id="xButton" onClick={cleartag2}>
            X
          </button> 
        </Text>
      ) : null }
      {tag3 && (tag3.brandName) ? (
        <Text className={styles.tagsContainer}>
          <ImageIcon className={styles.descriptionIcon}
            sx={{
              fontSize:'75px',
            }}/>
          <div className={styles.descriptionWords}>
            <p>{tag3.brandName}</p> 
            <p>{tag3.itemName}</p>
            <p>{tag3.color}</p>
          </div>   
          <button id="xButton" onClick={cleartag3}>
            X
          </button> 
        </Text>
      ) : null }
      {tag4 && (tag4.brandName) ? (
        <Text className={styles.tagsContainer}>
          <ImageIcon className={styles.descriptionIcon}
            sx={{
              fontSize:'75px',
            }}/>
          <div className={styles.descriptionWords}>
            <p>{tag4.brandName}</p> 
            <p>{tag4.itemName}</p>
            <p>{tag4.color}</p>
          </div>   
          <button id="xButton" onClick={cleartag4}>
            X
          </button> 
        </Text>
      ) : null }
    </div>
  </div>

          <a className={styles.button} style= {{ left: '25%' }} href='/create_post_page'>Back</a>
          <a className={styles.button} style= {{ right: '25%' }} href='/create_post_page3'>Next</a>
      </main>
  )
}