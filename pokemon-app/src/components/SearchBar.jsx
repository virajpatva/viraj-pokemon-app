import React from "react";
import { useState } from 'react'
function SearchBar({ PageLimit }) {
  const [pokemon, setPokemon] = useState('');
  return (
    <div className='search-bar'>
      <form onSubmit={(e) => { search(e) }} className='search-bar-form'>
        <div className="search-bar-from-controller">
          <input
            className='search-bar-form-controller-searchbox'
            type="text"
            required
            value={pokemon}
            onChange={(e) => setPokemon(e.target.value)}
          />
        </div>
        <div className="search-bar-form-controller">
          <button type="submit" className='search-bar-form-controller-button'>Search</button>
        </div>
        <div className="search-bar-form-controller">
          <select className='search-bar-form-controller-dropdown' id="pagination" onChange={PageLimit}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;