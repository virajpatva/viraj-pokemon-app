import { useState, useRef, useEffect } from 'react'
import React from 'react'
import searchPokemons, { searchPokemon } from '../Utility/API';
function ListingPage() {
  const baseURL = 'https://pokeapi.co/api/v2/';

  const [pageLimit, setPageLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [pokemon, setPokemon] = useState('');
  const [pokemonList, setPokemonList] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  const [displayer, setDisplayer] = useState([]);
  useEffect((() => {
    fetchDetails();
  }), []);

  useEffect(() => {
    fetchDetails();
  }, [pageLimit, offset])

  useEffect(() => {
    if (pokemonList.data) {
      const array = pokemonList.data.results;
      setDisplayList([]);
      console.log(array);
      let urlArray = [];
      { array.map((ab) => (urlArray.push(ab.url))) }
      setDisplayList(urlArray);
    } else {
      console.log('no element found')
    }
  }, [pokemonList]);

  useEffect(() => {
    displayListFetcher();
  }, [displayList])

  const PageLimit = (event) => {
    const value = event.target.value || 10;
    setPageLimit(value);
    console.log()
  }

  const fetchDetails = async () => {
    setPokemonList(await searchPokemons({ limit: pageLimit, offset: offset }))
  }

  const displayListFetcher = async () => {
    setDisplayer([]);
    let resp = [];
    for (let i = 0; i < displayList.length; i++) {
      const response = await searchPokemon({ link: displayList[i] });
      resp.push(response);
    }
    setDisplayer(resp);
    console.log(displayer)
  }

  function ListingCard() {
    return (
      <>
        {displayer.map((props) => (<><div className='pokemon-card'>
          <div className="image">
            <img className='list-page-image' src={props.image_url} alt="" />
          </div>
          <div className="details">
            <div className="basic-details">
              <p><strong>Name : </strong>{props.name}</p>
              <p><strong>Height : </strong>{props.height}</p>
              <p><strong>Weight : </strong>{props.weight}</p>
            </div>
            <div className='ability-listing-page'>
              {props.ability.map((ab) => (<div className='ability'>{ab.ability.name}</div>))}
            </div>
          </div>
        </div></>))}

      </>

    );
  }


  function Header() {
    return (
      <h1>Welcome to Pokemon Application</h1>
    )
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
            setOffset(0);
            console.error('offset cannot be changed')
          }
        }}>
          <button className="offset-btn" type="submit">Prev</button>
        </form>
      </div>
    )
  }

  return (
    <>
      <Header />
      <SearchBar />
      <div className='listing-table'>
        <ListingCard />
      </div>
      <div className='listing-page-btn'>
        <LoadMore />
        <Prev />
      </div>
    </>
  )
}
export default ListingPage;

