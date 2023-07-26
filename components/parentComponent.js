import React from 'react';
import SearchBar from 'components/searchBar.js';

function ParentComponent() {
    const handleSearch = (searchTerm) => {
      // Perform search logic here based on the searchTerm
      // For example, you can use the searchTerm to filter data and display search results
      console.log('Search term:', searchTerm);
    };
  
    return (
      <div>
        <h1>Search Bar Example</h1>
        <SearchBar onSearch={handleSearch} />
        {/* Render search results based on the handleSearch function */}
      </div>
    );
  }
  
  export default ParentComponent;