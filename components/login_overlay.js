import * as React from 'react'; 
import Button from '@mui/material/Button'; 
import Dialog from '@mui/material/Dialog'; 
import DialogContent from '@mui/material/DialogContent'; 
import DialogContentText from '@mui/material/DialogContentText'; 
import DialogTitle from '@mui/material/DialogTitle'; 
import styles from '/styles/components/login_overlay.module.css'; 
import FormDialogRegister from '/components/register_overlay.js'; 
 
export default function FormDialog({ isLoggedIn, onLoginStatusChange }) { 
  const [open, setOpen] = React.useState(false); 
  const handleClickOpen = () => { 
    setOpen(true); 
  }; 
  const handleClose = () => { 
    setOpen(false); 
  };
  
  const handleLogin = () => {
    event.preventDefault();
    handleClose();
    onLoginStatusChange(true);
  };
 
  return ( 
    <div> 
      {!isLoggedIn ? (
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
                    <input className={styles.formInput} type="text" name="email" id="email" /> 
                  </p> 
                  <p> 
                    <label className={styles.formLabel} htmlFor="password"> 
                      Password 
                    </label> 
                    <br /> 
                    <input className={styles.formInput} type="text" name="password" id="password" /> 
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