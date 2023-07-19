'use client'
import { useState } from 'react';
import { backendUrl } from 'config/backendUrl';
import validator from 'validator';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// Styling imports
import styles from '/styles/components/registration_overlay.module.css';

// Component imports
import ToastNotification from './toastNotification';

export default function FormDialogRegister({ onClose }) {
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  // For Toast Notification
  const [snackbar, setSnackbar] = useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onClose(); // Call the onClose function from the parent component 
  };

  // POST request to create a new account
  const createNewAccount = async (event) => {
    event.preventDefault();

    // Reset Error message
    setErrorMessage({})

    var err = 0, falseInput = false;

    // nameRegex: Alphabets with 4 different special characters allowed.
    // passwordRegex: 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character & at least 8 characters
    const nameRegex = new RegExp(/^[a-zA-Z0-9]+(([',._-][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/);
    const passwordRegex = new RegExp(/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/);

    // If it does not fulfil the name regex
    if (nameRegex.test(event.target.accUsername.value) == false ||
      event.target.accUsername.value == "") {
      err += 1;
      setErrorMessage((prevError) => {
        prevError.accUsername = true;
        return ({ ...prevError });
      });
      falseInput = true;
    };

    // If input is not an email
    if (validator.isEmail(event.target.accEmail.value) == false) {
      err += 1;
      setErrorMessage((prevError) => {
        prevError.accEmail = true;
        return ({ ...prevError });
      });
      falseInput = true;
    };

    // If input does not pass the password requirement
    if (passwordRegex.test(event.target.accPassword.value) == false) {
      err += 1;
      setErrorMessage((prevError) => {
        prevError.accPassword = true;
        return ({ ...prevError });
      });
      falseInput = true;
    };

    // If password does not match
    if (event.target.accPasswordConfirmation.value !== event.target.accPassword.value ||
      event.target.accPasswordConfirmation.value == "") {
      err += 1;
      setErrorMessage((prevError) => {
        prevError.accPasswordConfirmation = true;
        return ({ ...prevError });
      });
      falseInput = true;
    };

    // If there is no error, call the api
    if (err === 0) {
      const res = await fetch(`${backendUrl}/api/account/createNewAccount`, {
        body: JSON.stringify(
          {
            accUsername: event.target.accUsername.value,
            accEmail: event.target.accEmail.value,
            accPassword: event.target.accPassword.value,
          }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
      }).catch(error => {
        const err = error;
        console.log(err);
      });

      const status = await res.status;

      switch (status) {
        case 201:
          window.location.reload();
          break;
        case 409:
          setErrorMessage(true);
          setSnackbar({ children: 'Email already existed', severity: 'error' });
          break;
        default:
          setErrorMessage(true);
          setSnackbar({ children: 'Account cannot be created', severity: 'error' });
          break;
      };
    };
  }

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className={styles.overlayButton}
      >
        Register
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={styles.register}>Register</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <main className={styles.main}>
              <div className={styles.form}>
                <form className="regis" onSubmit={createNewAccount}>
                  <div>
                    <label className={styles.label} htmlFor="accUsername">Username</label>
                    <br />
                    <input className={styles.input} type="text" name="accUsername" id="accUsername" />
                    {(errorMessage.accUsername && <p className={styles.errorMessage}>Username cannot be empty or have special characters</p>)}
                  </div>

                  <div>
                    <label className={styles.label} htmlFor="accEmail">Email</label>
                    <br />
                    <input className={styles.input} type="text" name="accEmail" id="accEmail" />
                    {(errorMessage.accEmail && <p className={styles.errorMessage}>Email is invalid</p>)}
                  </div>

                  <div>
                    <label className={styles.label} htmlFor="accPassword">Password</label>
                    <br />
                    <input className={styles.input} type="password" name="accPassword" id="accPassword" />
                    {(errorMessage.accPassword && <p className={styles.errorMessage}>Password needs to have:
                      <ul className={styles.passwordRequirementList}>
                        <li>1 uppercase &amp; lowercase letter,</li>
                        <li>1 number,</li>
                        <li>1 special character,</li>
                        <li>at least 8 characters</li>
                      </ul></p>)
                    }
                  </div>
                  <div>
                    <label className={styles.label} htmlFor="accPasswordConfirmation">Confirm Password</label>
                    <br />
                    <input className={styles.input} type="password" name="accPasswordConfirmation" id="accPasswordConfirmation" />
                    {(errorMessage.accPasswordConfirmation && <p className={styles.errorMessage}>Confirm Password is invalid or does not match</p>)}
                  </div>

                  <Button className={`${styles.submit} ${styles.lowerButton}`} type='submit'>Register</Button>
                  {!!snackbar && (<ToastNotification onClose={handleCloseSnackbar} snackbarData={snackbar} />)}
                </form>
              </div>
            </main>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}