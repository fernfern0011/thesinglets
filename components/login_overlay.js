'use client'
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button'; 
import Dialog from '@mui/material/Dialog'; 
import DialogContent from '@mui/material/DialogContent'; 
import DialogContentText from '@mui/material/DialogContentText'; 
import DialogTitle from '@mui/material/DialogTitle'; 
import styles from '/styles/components/login_overlay.module.css'; 
import FormDialogRegister from '/components/register_overlay.js'; 
import dynamic from 'next/dynamic';
import axios from 'axios';
import { useRouter } from "next/navigation";
import {useSessionStorage} from '../sessionChecker';
 
export default function FormDialog({ isLoggedIn, onLoginStatusChange }) { 
  const [open, setOpen] = React.useState(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const sessionLog = useSessionStorage();

  // if(sessionLog){
  //   return null;
  // }
  console.log(sessionLog)
  console.log(isLoggedIn)
  
  const handleClickOpen = () => { 
    setOpen(true); 
  }; 
  
  const handleClose = () => { 
    setOpen(false); 
  };
  
  const handleLogin = () => {
    event.preventDefault();
    console.log(email, password);

    //make login get request from router to get email and password
    axios.get(`http://localhost:3500/api/account/login/${email}/${password}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(({ data }) => {
        console.log(data)

        //if email exists
        if (data) {

            // If input password matches with hashed password from database
            sessionStorage.setItem('userEmail', email);
            sessionStorage.setItem('userUsername', data.accUsername);

            // Redirect to the landing page after successful login
            handleClose();
            onLoginStatusChange(true);
          }

          //if password is incorrect
          else {
            alert('Incorrect password. Please try again.');
          }
      })

      //If email not found
      .catch((error) => {
        alert('Error. Please try again.');
        console.log('ERROR: ' + error);
      });

  };
 
  return ( 
    <div> 
      {!sessionLog ? (
        <Button  
          variant="outlined"  
          onClick={handleClickOpen} 
          className={styles.overlayButton} 
        > 
          Login 
        </Button>
      ) : null }

      <Dialog open={open} onClose={handleClose}> 
        <DialogTitle className={styles.login}>Login</DialogTitle> 
        <DialogContent> 
          <DialogContentText> 
            <main className={styles.main}> 
              <div className={styles.form}> 
                <form action="/example.html" method="POST"> 
                  <p> 
                    <label className={styles.formLabel} htmlFor="email"> 
                      Email 
                    </label> 
                    <br /> 
                    <input className={styles.formInput} type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/> 
                  </p> 
                  <p> 
                    <label className={styles.formLabel} htmlFor="password"> 
                      Password 
                    </label> 
                    <br /> 
                    <input className={styles.formInput} type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/> 
                  </p> 
                </form> 
 
                <form className={styles.input}>
                    <input
                      className={`${styles.lowerButton} ${styles.inputHover}`}
                      type="submit"
                      value="LOGIN"
                      style={{ width: '210px' }}
                      onClick={handleLogin}
                    /> 
                </form> 
 
                <FormDialogRegister onClose={handleClose} /> 
              </div> 
            </main> 
          </DialogContentText> 
        </DialogContent> 
      </Dialog> 
    </div> 
  ); 
}