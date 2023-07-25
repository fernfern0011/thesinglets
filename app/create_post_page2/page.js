'use client';
import React, { useEffect, useState } from 'react';
import TagItem from '/components/tag_item.js';
import styles from '/styles/create_post_page2.module.css';
import { useRouter } from 'next/navigation';

import { useMantineTheme, Text, Code, rem, Group, Tooltip } from '@mantine/core';
import { useMove } from '@mantine/hooks';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CircleIcon from '@mui/icons-material/Circle';
import ImageIcon from '@mui/icons-material/Image';

export default function CreatePost2() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    // Retrieve the selectedImage URL from local storage
    const storedImage = localStorage.getItem('selectedImage');
    if (storedImage) {
      setSelectedImage(storedImage);
    }
  }, []);
  const theme = useMantineTheme();
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref, active } = useMove(setValue);
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

    const x = Math.round(value.x * 100);
    const y = Math.round(value.y * 100);
    setValue({ x, y });
    localStorage.setItem('tagPosition', JSON.stringify({ x, y }));
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
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

    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Group className={styles.image} position="center">
          <div
            ref={ref}
            style={{
              width: '100%',
              height: '300px',
              backgroundImage: 'none',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              position: 'relative',
            }}
          >
            <Tooltip.Floating color='rgba(255, 0, 0, 0.7)' label='Click to Tag'>
            <img
              clasName={styles.uploadedImage}
              src={decodeURIComponent(selectedImage)}
              alt="Uploaded Image"
              style={{ maxHeight: '300px', maxWidth: '100%' }}
              />
            </Tooltip.Floating >
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
              <div
                style={{
                  position: 'absolute',
                  left: `calc(${value.x * 100}% - ${rem(7)})`,
                  top: `calc(${value.y * 100}% - ${rem(7)})`,
                  width: rem(10),
                  height: rem(10),
                  borderRadius: '100%',
                  backgroundColor: active ? theme.colors.teal[7] : theme.colors.red[7],
                }}
              />
            </Button>
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
      <Text className={styles.tagsContainer}>
        <ImageIcon className={styles.descriptionIcon}
          sx={{
            fontSize:'75px',
          }}/>
        <div className={styles.descriptionWords}>
          <p>BrandName</p> 
          <p>ItemName</p>
          <p>Colour</p>
        </div>   
      </Text>
      <Text className={styles.tagsContainer}>
      Values <Code>{`{ x: ${Math.round(value.x * 100)}, y: ${Math.round(value.y * 100)} }`}</Code>
      </Text>
    </div>
  </div>

          <a className={styles.button} style= {{ left: '25%' }} href='/create_post_page'>Back</a>
          <a className={styles.button} style= {{ right: '25%' }} href='/create_post_page3'>Next</a>
      </main>
  )
}