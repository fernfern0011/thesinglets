import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

import SearchBarTabs from '/components/searchBarTabs.js';
import styles from '../../styles/search_page.module.css';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, px:4, py: 2, width:600 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className={styles.searchIcon} variant="outlined" onClick={handleClickOpen}>
        <SearchIcon fontSize='inherit'/>
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle  id="customized-dialog-title" onClose={handleClose}>

        <Box sx={{ '& > :not(style)': { m: 0 } }}>
              <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">
                </InputLabel>
                <Input
                  className={styles.input}
                  id="input-with-icon-adornment"
                  placeholder='Search'
                  disableUnderline='True'
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon className={styles.icon}/>
                    </InputAdornment>
                  }
                />
              </FormControl>
              </Box>

        </BootstrapDialogTitle>
        <DialogContent>
          <Typography>
          <div className={styles.searchTabs}>
            <SearchBarTabs/>
          </div>
          </Typography>
          <Typography gutterBottom>

          </Typography>
          <Typography>

          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>

          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}