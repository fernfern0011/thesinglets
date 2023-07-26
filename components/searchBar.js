import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <TextField
      id="search"
      type="search"
      value={searchTerm}
      onChange={handleChange}
      fullWidth // This will make the TextField take the full width of its container (the overlay)
      sx={{
        maxWidth: 600,
        "& .MuiInputBase-root": {
          height: "35px", // Adjust the height to make the search bar thinner vertically
          borderRadius: "18px",
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}