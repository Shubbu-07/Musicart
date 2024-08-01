import React from 'react'
import searchIcon from '../Assets/search.svg'

const Searchbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar my-5">
      <input 
        type="text" 
        placeholder="Search by Product Name" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
        <img src={searchIcon} alt="" className="search-icon" />
    </div>
  )
}

export default Searchbar