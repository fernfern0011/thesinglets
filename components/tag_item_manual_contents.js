import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import styles from '/styles/components/tag_item_manual_contents.module.css'; 

export default function TagItemManualContents() {

  const [selectedOption, setSelectedOption] = React.useState('');
  const [brandName, setBrandName] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [color, setColor] = React.useState('');
  const [isBrandNameValid, setBrandNameValid] = React.useState(true);
  const [isCategoryValid, setCategoryValid] = React.useState(true);
  const [isColorValid, setColorValid] = React.useState(true);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleBrandNameChange = (event) => {
    setBrandName(event.target.value);
    setBrandNameValid(true); // Reset the validation when the field is edited
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setCategoryValid(true); // Reset the validation when the field is edited
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
    setColorValid(true); // Reset the validation when the field is edited
  };

  const handleSubmit = () => {
    // Perform validation before submitting the form
    if (brandName.trim() === '') {
      setBrandNameValid(false);
    }
    if (category.trim() === '') {
      setCategoryValid(false);
    }
    if (color.trim() === '') {
      setColorValid(false);
    }
    
    // If all fields are valid, proceed with form submission
    if (brandName.trim() !== '' && category.trim() !== '' && color.trim() !== '') {
      // Perform any other actions or submit the form
      console.log("Form submitted successfully!");
    }
  };

  const category_options = ['Tops', 'Pants']; // add stuff here to add more options in Category
  const color_options = ['White', 'Black'];

  return (
    <div>
      <Grid container spacing={2}>
        {/* Image column */}
        <Grid item xs={4}>
          <div className={styles.container}>      
            <img
              src="/images/le_racoon.jpg"
              alt="Circle Image"
              className={styles.profileImage}
            />
          </div>
        </Grid>

        {/* Fields column */}
        <Grid item xs={8}>
          <Grid container spacing={2}>
            
            {/* Brand Name field */}
            <Grid item xs={12}>
              <InputLabel
                htmlFor="standard-brandName"
                sx={{ textAlign: 'left', fontSize: 13, color:'black' }}
              >
                Brand Name <span style={{ color: 'red' }}>*</span>
              </InputLabel>
              <TextField
                id="standard-brandName"
                label=""
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                inputProps={{ style: { textAlign: 'left', height: '13px' } }}
                sx={{ width: '90%' }}
                value={brandName}
                onChange={handleBrandNameChange}
                error={!isBrandNameValid}
                helperText={!isBrandNameValid && "Brand Name is required"}
                placeHolder="Please input brand name"
              />
            </Grid>

            {/* Item Name field */}
            <Grid item xs={12}>
              <InputLabel
                htmlFor="standard-itemName"
                sx={{ textAlign: 'left', fontSize: 13, color: 'black' }}
              >
                Item Name
              </InputLabel>
              <TextField
                id="standard-itemName"
                label=""
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                inputProps={{ style: { textAlign: 'left', height: '13px'} }}
                sx={{ width: '90%' }}
                placeHolder="Please input item name"
              />
            </Grid>

            {/* Category field */}
            <Grid item xs={12}>
              <InputLabel
                htmlFor="standard-category"
                sx={{ textAlign: 'left', fontSize: 13, color: 'black' }}
              >
                Category <span style={{ color: 'red' }}>*</span>
              </InputLabel>
              <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                {category_options.map((category_option) => (
                  <Button
                    key={category_option}
                    variant={selectedOption === category_option ? 'contained' : 'outlined'}
                    onClick={() => handleOptionChange(category_option)}
                    sx={{
                      textTransform: 'none',
                      fontSize: '8px',
                      borderRadius: '3px',
                      marginRight: '9px',
                      borderColor: '#d0d0d0',
                      backgroundColor: selectedOption === category_option ? 'black' : '#d0d0d0',
                      color: selectedOption === category_option ? 'black' : 'black', // Change 'red' to 'black'
                      width: '30px', // Adjust the width as needed
                      height: '25px', // Adjust the height as needed
                      '&.MuiButton-outlined': {
                        backgroundColor: '#d0d0d0', // Set the default background color for outlined buttons
                      },
                    }}
                  >
                    {category_option}
                  </Button>
                ))}
              </div>
              {!isCategoryValid && <span style={{ color: 'red', fontSize: 12 }}>Category is required</span>}
            </Grid>

            {/* Color field */}
            <Grid item xs={12}>
              <InputLabel
                htmlFor="standard-color"
                sx={{ textAlign: 'left', fontSize: 13, color: 'black' }}
              >
                Color <span style={{ color: 'red' }}>*</span>
              </InputLabel>
              <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                {color_options.map((color_option) => (
                  <div
                    key={color_option}
                    onClick={() => handleOptionChange(color_option)}
                    className={`color-option ${selectedOption === color_option ? styles.active : ''}`}
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      backgroundColor: color_option.toLowerCase(),
                      margin: '0 8px',
                      cursor: 'pointer',
                      border: selectedOption === color_option ? '2px solid #cf0214' : '2px solid #d0d0d0',
                    }}
                  />
                ))}
              </div>
              {!isColorValid && <span style={{ color: 'red', fontSize: 12 }}>Color is required</span>}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <div style={{ textAlign: 'right', marginBottom: '10px' }}>
        <Button variant="text" className={styles.done} onClick={handleSubmit}>Done</Button>
      </div> */}
    </div>
  );
}