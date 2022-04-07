import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function SearchHead() {
  return (
    <div className="search-head in-block">
      <div className="search-submit"><SearchIcon className="search-icon" /></div>
      <input className="search-input" type="search" placeholder="Search for products and more"></input>
    </div>
  )
}

export { SearchHead };