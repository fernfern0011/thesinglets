import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import styles from '/styles/components/dropdown.module.css';

const StyledMenu = styled((props) => (
  <Menu
  elevation={0}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
  {...props}
/>
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 0,
    marginTop: theme.spacing(1),
    minWidth: 115,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '0px 0',
    },
    '& .MuiMenuItem-root': {
      paddingRight: 0,
      paddingTop: 2,
      paddingBottom: 2,
      '.MuiFormControlLabel-label': {
        fontSize: 14,
        color: 'black',
      },
      '& .MuiSvgIcon-root': {
        fontSize: 14,
        color: 'black',
        marginRight: theme.spacing(0),
          '&.Mui-checked': {
            color: 'black',
          },
      },
    },
    '& .Mui-selected': {
      backgroundColor: 'rgba(255, 0, 0, 0.1)',
    },
    '& .Mui-selected:hover': {
      backgroundColor: 'rgba(255, 0, 0, 0.1)', // Change hover color to red when selected
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [selectedIndex, setSelectedIndex] = React.useState({
    tops: 0,
    bottoms: 0,
    shoes: 0
  });

  const handleListItemClick = (buttonName) => {
    setSelectedIndex((prevIndex) => ({
      ...prevIndex, // Copy the previous state
      [buttonName]: prevIndex[buttonName] === 0 ? 1 : 0 // Toggle the state for the clicked button
    }));
  };

  return (
    <div className={styles.main}>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          color: 'black', // Set the text color to red
          border: 'transparent',
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Add a shadow (right and bottom sides)
          textTransform: 'none',
          fontSize: 14,
          '&:hover': {
            backgroundColor: 'white', // Change background color to red on hover
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Add a shadow on hover (right and bottom sides)
            color: '#E50010',
          },
          '&.MuiButton-contained.Mui-selected': {
            color: 'red', // Set the text color to red for the selected state
          },
        }}
      >
        Category
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          disableRipple
          selected={selectedIndex.tops === 1}
          className={styles.checkbox}
        >
          <FormGroup>
            <FormControlLabel control={<Checkbox
              onClick={() => handleListItemClick('tops')}
              checked={selectedIndex.tops === 1}
              />} 
            label="Tops" />
          </FormGroup>
        </MenuItem>

        <MenuItem
          disableRipple
          selected={selectedIndex.bottoms === 1}
        >
          <FormGroup>
            <FormControlLabel  control={<Checkbox
              onClick={() => handleListItemClick('bottoms')}
              checked={selectedIndex.bottoms === 1}
              />}
            label="Bottoms" />  
          </FormGroup>
        </MenuItem>

        <MenuItem
          disableRipple
          selected={selectedIndex.shoes === 1}
        >
          <FormGroup>
            <FormControlLabel
            label="Shoes"
            control={<Checkbox
              onClick={() => handleListItemClick('shoes')}
              checked={selectedIndex.shoes === 1}
              />}
            />  
          </FormGroup>
        </MenuItem>


      </StyledMenu>
    </div>
  );
}