import { useState, useRef, useEffect } from 'react'
import React from 'react'
import searchPokemons from '../Utility/API';
function ListingPage() {
  const baseURL = 'https://pokeapi.co/api/v2/';

  const [pageLimit, setPageLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [pokemon, setPokemon] = useState('');
  const [response, setResponse] = useState('');
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    console.log('use effect called........')
    setPokemonList(searchPokemons({ limit: pageLimit, offset: offset }))
  }, [pageLimit, offset])

  useEffect(() => {
    console.log(pokemonList);
  }, [pokemonList])

  const loadMore = () => { }
  const PageLimit = (event) => {
    const value = event.target.value || 10;
    setPageLimit(value);
    console.log()
  }
  function SearchBar() {
    return (
      <div className='search-bar'>
        <form onSubmit={(e) => { search(e) }} className='form'>
          <input
            className='search-box'
            type="text"
            required
            autoFocus="autoFocus"
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

  function LoadMore() {
    return (
      <div >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setOffset(offset + pageLimit)
          }}
        >
          <button className="offset-btn" type=" submit">Load More</button>
        </form>

      </div>

    )
  }
  function Prev() {
    return (
      <div >
        <form onSubmit={(e) => {
          e.preventDefault();
          if (offset > pageLimit) {
            setOffset(offset - pageLimit)
          } else {
            console.log('offset cannot be changed')
          }
        }}>
          <button className="offset-btn" type="submit">Prev</button>
        </form>
      </div>
    )
  }
  function Header() {
    return (
      <h1>Welcome to Pokemon Application</h1>
    )
  }
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
      <div className='listing-page-btn'>

        <LoadMore />
        <Prev />
      </div>
    </>
  )
}
export default ListingPage;

