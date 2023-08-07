'use Client';

import { useDisclosure } from '@mantine/hooks';
import { Drawer, Group } from '@mantine/core';
import { useSessionStorage } from '../sessionChecker';
import { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import styles from '/styles/components/profileDrawer.module.css';

// export default function ProfileDrawer({ isLoggedIn, onLoginStatusChange }) {
export default function ProfileDrawer() {
  const [opened, { open, close }] = useDisclosure(false);
  const sessionLog = useSessionStorage();
  const sessionUsername = typeof window !== 'undefined' ? sessionStorage.getItem('userUsername') : null;
  console.log(sessionLog)
  const handleLogout = () => {
    typeof window !== 'undefined' ? sessionStorage.clear() : null;
    // Call the onLoginStatusChange function to update the login status to false
    // onLoginStatusChange(false);
    close(); // Close the drawer after logout
  };
  
  return (
    <>
      <Drawer
        position="right"
        opened={opened}
        onClose={close}
        size="25%"
        >
        <IconButton href="#">
          <AccountCircleIcon sx={{ fontSize: 75 }}/>
        </IconButton>
        <div className={styles.profile}>
          <a href="#">Dylanny</a>
          <a className={styles.handle} href="/profile_page">@dylanny</a>
        </div>

        <div className={styles.options}>
          <IconButton disableRipple='true' href="/profile_page">
            <Person2OutlinedIcon sx={{ fontSize: 30 }}/>
          </IconButton>
          <a href="#">Profile</a>
          <br></br>
          <IconButton disableRipple='true' href="/create_post_page">
            <ControlPointOutlinedIcon sx={{ fontSize: 30 }}/>
          </IconButton>
          <a href="/create_post_page">Create Post</a>
          <br></br>
          <IconButton disableRipple='true' href="profilePage">
            <SettingsOutlinedIcon sx={{ fontSize: 30 }}/>
          </IconButton>
          <a href="#">Settings</a>
        </div>

        <Button className={styles.logout} variant="contained" fullWidth='True' onClick={handleLogout}>Logout</Button>
      </Drawer>

      <Group position="right">
        {sessionLog ?  (
        <Button
          outline='none'
          className={styles.button}
          onClick={open}
          style={{ textTransform: 'none' }}
        >
          <AccountCircleIcon className={styles.profileButton} sx={{ fontSize: 25 }}/>
          {sessionUsername}
        </Button>
        ) : null}
      </Group>
    </>
  );
}