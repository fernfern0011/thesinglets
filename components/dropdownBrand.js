import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import styles from '/styles/components/dropdown.module.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const brand = [
  'Zara',
  'Mango'
];

export default function DropdownBrand() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div className={styles.dropdown}>
        <FormControl sx={{ m: 1, width: 150 }}>
            <InputLabel id="brand-label">Brand</InputLabel>
            <Select
            labelId="brand-label"
            id="brand-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Brand" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
            >
            {brand.map((name) => (
                <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
                </MenuItem>
            ))}
            </Select>
        </FormControl>
        </div>
  );
}