import { useEffect, useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { searchPokemonDetails } from '../Utility/API'
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

  function BackButton() {
    return (
      <>
        <button type="submit">Back</button>
      </>
    )
  }
  function Pokemon() {
    const ability = details.ability || [];
    return (
      <>
        <div className='pokemon-details'>
          <div className="image">
            <img src={details.image_url} alt="" className='image-details' />
          </div>
          <div className="details">
            <div className="basic-details">
              <ul>
                <li><strong>Name : </strong>{details.name}</li>
                <li><strong>Height : </strong>{details.height}</li>
                <li><strong>Weight : </strong>{details.weight}</li>
                <li><strong>Base Experience : </strong>{details.base_experience}</li>
                <li><strong>Order : </strong>{details.order}</li>

              </ul>
              <div className="abilitybox">
                {ability.map((ab) => (<div className='ability'>{ab.ability.name}</div>))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <BackButton />
      <Pokemon details={details} />
    </>
  )
}

export default DetailsPage;