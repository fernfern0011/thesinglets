import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import styles from '/styles/components/tag_item_manual_contents.module.css'; 

export default function TagItemManualContents() {
  const [selectedOption, setSelectedOption] = React.useState('');
  const [brandName, setBrandName] = React.useState('');
  const [itemName, setItemName] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [color, setColor] = React.useState('');

  const handleBrandNameChange = (event) => {
    setBrandName(event.target.value);
  };
  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };
  const handleCategoryChange = (option) => {
    setCategory(option);
    setSelectedOption(option);
  };
  const handleColorChange = (option) => {
    setColor(option);
    setSelectedOption(option);
  };

  React.useEffect(() => {
    localStorage.setItem('brandName', brandName);
    localStorage.setItem('itemName', itemName);
    localStorage.setItem('category', category);
    localStorage.setItem('color', color);
  }, [selectedOption, brandName, itemName, category, color]);

  const category_options = ['Tops', 'Pants']; // add stuff here to add more options in Category
  const color_options = ['White', 'Black']

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
                sx={{ textAlign: 'left', fontSize: 13 }}
              >
                Brand Name
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
                sx={{ width: '30ch' }}
                value={brandName}
                onChange={handleBrandNameChange}
              />
            </Grid>

            {/* Item Name field */}
            <Grid item xs={12}>
              <InputLabel
                htmlFor="standard-itemName"
                sx={{ textAlign: 'left', fontSize: 13 }}
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
                sx={{ width: '30ch' }}
                value={itemName}
                onChange={handleItemNameChange}
              />
            </Grid>

            {/* Category field */}
            <Grid item xs={12}>
              <InputLabel
                htmlFor="standard-category"
                sx={{ textAlign: 'left', fontSize: 13 }}
              >
                Category
              </InputLabel>
              <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                {category_options.map((category_options) => (
                  <Button
                    key={category_options}
                    variant={selectedOption === category_options ? 'contained' : 'outlined'}
                    onClick={() => handleCategoryChange(category_options)}
                    sx={{
                      textTransform: 'none',
                      borderRadius: '5px',
                      marginRight: '10px',
                      backgroundColor: selectedOption === category_options ? '#007bff' : 'transparent',
                      color: selectedOption === category_options ? 'white' : 'black',
                    }}
                  >
                    {category_options}
                  </Button>
                ))}
              </div>
            </Grid>

            {/* Color field */}
            <Grid item xs={12}>
              <InputLabel
                htmlFor="standard-color"
                sx={{ textAlign: 'left', fontSize: 13 }}
              >
                Color
              </InputLabel>
              <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                {color_options.map((color_options) => (
                  <Button
                    key={color_options}
                    variant={selectedOption === color_options ? 'contained' : 'outlined'}
                    onClick={() => handleColorChange(color_options)}
                    sx={{
                      textTransform: 'none',
                      borderRadius: '5px',
                      marginRight: '10px',
                      backgroundColor: selectedOption === color_options ? '#007bff' : 'transparent',
                      color: selectedOption === color_options ? 'white' : 'black',
                    }}
                  >
                    {color_options}
                  </Button>
                ))}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}