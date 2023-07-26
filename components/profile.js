import * as React from 'react'; 
import Button from '@mui/material/Button'; 
import Dialog from '@mui/material/Dialog'; 
import DialogContent from '@mui/material/DialogContent'; 
import DialogContentText from '@mui/material/DialogContentText'; 

import styles from '/styles/components/profile.module.css'; 
import ProfileContents from '/components/profile_contents.js';

export default function Profile() { 
  const [open, setOpen] = React.useState(false); 
 
  const handleClickOpen = () => { 
    setOpen(true); 
  }; 
 
  const handleClose = () => { 
    setOpen(false); 
  }; 
 
  return ( 
    <div> 
      <Button  
        variant="outlined"  
        onClick={handleClickOpen} 
        className={styles.overlayButton} 
      > 
        Profile 
      </Button> 
      <Dialog open={open} onClose={handleClose} maxWidth="md"> 
        
        <DialogContent sx={{ minWidth: '400px', width: '100%', maxWidth: '100%' }}> 
          <DialogContentText> 
            <main className={styles.main}> 
              <div className={styles.form}> 
                <form action="/example.html" method="POST">

                    <div className={styles.container}>      
                        <img
                        src="/images/le_racoon.jpg"
                        alt="Circle Image"
                        className={styles.profileImage}
                        />
                    </div>

                    <Button className={styles.changePhoto}>change photo</Button>
                    <Button variant="text" className={styles.done}>Done</Button>
                    <ProfileContents />
                </form> 
 
                </div> 
            </main> 
          </DialogContentText> 
        </DialogContent> 
      </Dialog> 
    </div> 
  ); 
}