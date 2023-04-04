import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'

function DetailsPage() {
  return (
    <>
      <Header name='Pikachu' />
      <BackButton />
      <Pokemon name='bulbasur' height='7' weight='69' ability={['overgrow', 'runaway']} url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' />


    </>
  )
}
function Header({ name }) {
  return (
    <>
      <h1>Welcome to Pokemon Application {name}</h1>
      <h2>Pokemon Details {name}</h2>
    </>
  )
}
function BackButton() {
  return (
    <>
      <button type="submit">Back</button>
    </>
  )
}
function Pokemon({ name, height, weight, ability, url }) {
  return (
    <div className='pokemon-details'>
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
export default DetailsPage;