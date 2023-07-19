import * as React from 'react'; 
import Button from '@mui/material/Button'; 
import Dialog from '@mui/material/Dialog'; 
import DialogContent from '@mui/material/DialogContent'; 
import DialogContentText from '@mui/material/DialogContentText'; 
import DialogTitle from '@mui/material/DialogTitle'; 
import styles from '/styles/components/registration_overlay.module.css'; 
 
export default function FormDialogRegister({ onClose }) { 
  const [open, setOpen] = React.useState(false); 
 
  const handleClickOpen = () => { 
    setOpen(true); 
  }; 
 
  const handleClose = () => { 
    setOpen(false); 
    onClose(); // Call the onClose function from the parent component 
  }; 
 
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
                <form action="/example.html" method="POST" className="regis"> 
                  <p> 
                    <label className={styles.label} htmlFor="username"> 
                      Username 
                    </label> 
                    <br /> 
                    <input className={styles.input} type="text" name="username" id="username" /> 
                  </p> 
                  <p> 
                    <label className={styles.label} htmlFor="email"> 
                      Email 
                    </label> 
                    <br /> 
                    <input className={styles.input} type="text" name="email" id="email" /> 
                  </p> 
                  <p> 
                    <label className={styles.label} htmlFor="password"> 
                      Password 
                    </label> 
                    <br /> 
                    <input className={styles.input} type="text" name="password" id="password" /> 
                  </p> 
                  <p> 
                    <label className={styles.label} htmlFor="confirmation"> 
                      Confirm Password 
                    </label> 
                    <br /> 
                    <input className={styles.input} type="text" name="confirmation" id="confirmation" /> 
                  </p> 
                </form> 
                <form className={styles.submit}> 
                  <input type="submit" value="REGISTER" className={styles.lowerButton} style={{ width: '210px' }} /> 
                </form> 
              </div> 
            </main> 
          </DialogContentText> 
        </DialogContent> 
      </Dialog> 
    </div> 
  ); 
}