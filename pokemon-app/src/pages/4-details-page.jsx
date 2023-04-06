import { useEffect, useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { searchPokemonDetails } from '../Utility/API'
import BackButton from '../components/BackButton'
import Pokemon from '../components/PokemonDisplayer'
Pokemon
function DetailsPage({ id }) {
  const [details, setDetails] = useState((searchPokemonDetails({ id })));
  useEffect((() => {
    fetchDetails();
  }), []);
  useEffect(() => { console.log(details) }, [details]);
  const fetchDetails = async () => {
    const response = await searchPokemonDetails({ id });
    setDetails(response)
  }

  return (
    <>
      <BackButton />
      <Pokemon details={details} />
    </>
  )
}

export default DetailsPage;