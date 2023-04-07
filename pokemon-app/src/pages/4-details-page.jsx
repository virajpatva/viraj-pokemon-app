import { useEffect, useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { searchPokemonDetails } from '../Utility/API'
import BackButton from '../components/BackButton'
import Pokemon from '../components/PokemonDisplayer'
import {
  useParams,
} from "react-router-dom";
Pokemon
function DetailsPage() {
  const params = useParams();
  const id = params.id;
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