import { useState, useRef, useEffect } from 'react'
import React from 'react'
import searchPokemons, { searchPokemon } from '../Utility/API';
import Buttons from '../components/Buttons';
import SearchBar from '../components/SearchBar';
import ListingCard from '../components/ListingCard';
function ListingPage() {
  const [pageLimit, setPageLimit] = useState(10);
  const [offset, setOffset] = useState(0);
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

  return (
    <>
      <SearchBar PageLimit={PageLimit} />
      <div className='listing-table'>
        <ListingCard displayer={displayer} />
      </div>
      <div className='listing-page-btn'>
        <Buttons offset={offset} setOffset={setOffset} pageLimit={pageLimit} setPageLimit={setPageLimit} />
      </div>
    </>
  )
}
export default ListingPage;

