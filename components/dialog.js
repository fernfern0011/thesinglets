'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import styles from '/styles/login_page.module.css';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
      <DialogActions>

      </DialogActions>

      <DialogContent>
      <Button onClick={handleClose}>X</Button>
      <div className={styles.form}>
          <h1 className={styles.h1}><strong>Login</strong></h1>
          
          <form action="/example.html" method="POST">
          <p>
              <label className={styles.formLabel} htmlFor="email">Email</label><br />
              <input className={styles.formInput} type="text" name="email" id="email" />
          </p>
          <p>
              <label className={styles.formLabel} htmlFor="password">Password</label><br />
              <input className={styles.formInput} type="text" name="password" id="password" />
          </p>
          </form>
          
          <form className={styles.input}>
          <input className={`${styles.lowerButton} ${styles.inputHover}`} type="submit" value="LOGIN" style={{ width: '210px' }} />
          </form>
          <a className={styles.register} href="/registration_page">Register</a>
          </div>
      </DialogContent>

      </Dialog>
    </div>
  );
}
