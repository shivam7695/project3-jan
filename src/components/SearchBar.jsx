import React from 'react';

const SearchBar = ({ searchQuery, onSearchChange, onSearch }) => {
  return (
    
    <div className="search-bar ">
        <div className='logo'>
            <img src="standard collection 11.png" alt="" />
            <img src="KeazoNBOOKS.png" alt="" />
        
        
        </div>
      <input type="text" placeholder="Search books..." value={searchQuery} onChange={(e) => onSearchChange(e.target.value)} />
      <button onClick={onSearch}>Search</button>

      <div className='ID'>
        <img src="bx_bx-book-heart.png" alt="" />
        <img src="ic_round-notifications-none.png" alt="" />
        <img src="fluent_premium-person-20-regular.png" alt="" />
        <img src="IMG20210528181544.png" alt="" />
      </div>
    </div>
  );
};

export default SearchBar;
