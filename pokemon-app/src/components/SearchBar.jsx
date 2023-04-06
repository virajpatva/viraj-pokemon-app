import React from "react";
import { useState } from 'react'
function SearchBar({ PageLimit }) {
  const [pokemon, setPokemon] = useState('');
  return (
    <div className='search-bar'>
      <form onSubmit={(e) => { search(e) }} className='form'>
        <input
          className='search-box'
          type="text"
          required
          value={pokemon}
          onChange={(e) => setPokemon(e.target.value)}
        />
        <button type="submit" className='searchButton'>Search</button>
        <select className='pagination-box' id="pagination" onChange={PageLimit}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </form>
    </div>
  );
}

export default SearchBar;