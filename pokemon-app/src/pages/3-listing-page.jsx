import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'

const search = (e) => {
  e.preventDeafault;
  console.log('search pikachu here')
}
const loadMore = (e) => {
  e.preventDeafault;
  console.log('load more....');
}
function ListingPage() {
  return (
    <>
      <Header />
      <SearchBar />
      <div className='listing-table'>

        <ListingCard name='bulbasur' height='7' weight='69' ability={['overgrow', 'runaway']} url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' />
        <ListingCard name='bulbasur' height='7' weight='69' ability={['overgrow', 'runaway']} url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' />
        <ListingCard name='bulbasur' height='7' weight='69' ability={['overgrow', 'runaway']} url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' />
        <ListingCard name='bulbasur' height='7' weight='69' ability={['overgrow', 'runaway']} url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' />
        <ListingCard name='bulbasur' height='7' weight='69' ability={['overgrow', 'runaway']} url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' />
        <ListingCard name='bulbasur' height='7' weight='69' ability={['overgrow', 'runaway']} url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' />
        <ListingCard name='bulbasur' height='7' weight='69' ability={['overgrow', 'runaway']} url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' />
        <ListingCard name='bulbasur' height='7' weight='69' ability={['overgrow', 'runaway']} url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' />
        <ListingCard name='bulbasur' height='7' weight='69' ability={['overgrow', 'runaway']} url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' />
        <ListingCard name='bulbasur' height='7' weight='69' ability={['overgrow', 'runaway']} url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' />
        <ListingCard name='bulbasur' height='7' weight='69' ability={['overgrow', 'runaway']} url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' />
        <ListingCard name='bulbasur' height='7' weight='69' ability={['overgrow', 'runaway']} url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' />
        <ListingCard name='bulbasur' height='7' weight='69' ability={['overgrow', 'runaway']} url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' />
        <ListingCard name='bulbasur' height='7' weight='69' ability={['overgrow', 'runaway']} url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' />

      </div>
      <LoadMore />
    </>
  )
}
function Header() {
  return (
    <h1>Welcome to Pokemon Application</h1>
  )
}

function ListingCard({ name, height, weight, ability, url }) {
  return (
    <div className='pokemon-card'>
      <div className="image">

        <img src={url} alt="" />
      </div>
      <div className="details">
        <div className="basic-details">
          <p>Name : {name}</p>
          <p>Height : {height}</p>
          <p>Weight : {weight}</p>
        </div>
        <div className="ability">
          <p>ability: {ability}</p>
        </div>

      </div>

    </div>
  );
}
function SearchBar() {
  return (
    <div className='search-bar'>
      <form onSubmit={search}>
        <input className='search-box' type="text" />
        <select className='pagination-box' id="pagination">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">30</option>

        </select>
      </form>
    </div>
  );
}
function LoadMore() {
  return (
    <div className="load-more-btn">
      <form onSubmit={loadMore}>
        <button type="submit">LoadMore</button>
      </form>
    </div>
  )
}
export default ListingPage;

