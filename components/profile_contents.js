import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function ProfileContents() {
  const [gender, setGender] = React.useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <Grid container spacing={2} sx={{ marginLeft: '-70px' }} >
        {/* Nickname field */}
        <Grid item xs={12} >
          <InputLabel
            htmlFor="standard-nickname"
            sx={{ textAlign: 'left', fontSize: 13 }}
          >
            Nickname
          </InputLabel>
          <TextField
            id="standard-nickname"
            label=""
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            inputProps={{ style: { textAlign: 'left', height: '13px' } }} // Align the input text to the left
            sx={{ width: '52.5ch' }}
          />
        </Grid>

        {/* Username field */}
        <Grid item xs={12}>
          <InputLabel
            htmlFor="standard-username"
            sx={{ textAlign: 'left', fontSize: 13 }}
          >
            Username
          </InputLabel>
          <TextField
            id="standard-username"
            label=""
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            inputProps={{ style: { textAlign: 'left', height: '13px'} }} // Align the input text to the left
            sx={{ width: '52.5ch' }}
          />
        </Grid>

        {/* Gender field */}
        <Grid item xs={12}>
          <InputLabel
            htmlFor="demo-simple-select-standard"
            sx={{ textAlign: 'left', fontSize: 13 }}
          >
            Gender
          </InputLabel>
          <FormControl fullWidth variant="standard">
            <Select
              id="demo-simple-select-standard"
              value={gender}
              onChange={handleChange}
              label=""
              inputProps={{ style: { textAlign: 'left'} }} // Align the input text to the left
              sx={{ width: '39.5ch' }}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Bio field */}
        <Grid item xs={12}>
          <InputLabel
            htmlFor="standard-bio"
            sx={{ textAlign: 'left', fontSize: 13 }}
          >
            Bio
          </InputLabel>
          <TextField
            id="standard-bio"
            label=""
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            inputProps={{ style: { textAlign: 'left', height: '13px'} }} // Align the input text to the left
            sx={{ width: '52.5ch' }}
          />
        </Grid>
      </Grid>
    </div>
  );
}