import { useState, useRef, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
const baseURL = 'https://pokeapi.co/api/v2/';

const searchPokemons = async ({ limit, offset }) => {
  const link = `${baseURL}` + "pokemon" + `?offset=${offset}&limit=${limit}`;
  const response = await axios.get(link)
  return response;
}

export const searchPokemonDetails = async ({ id }) => {
  const link = `${baseURL}` + "pokemon" + `/${id}`;
  const response = await axios.get(link);
  const finalResponse = {
    name: response.data.name,
    base_experience: response.data.base_experience,
    height: response.data.height,
    weight: response.data.weight,
    ability: response.data.abilities,
    image_url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
    order: response.data.order
  }
  return finalResponse;
}
export const searchPokemon = async ({ link }) => {
  const response = await axios.get(link);
  const id = response.data.id
  const finalResponse = {
    name: response.data.name,
    base_experience: response.data.base_experience,
    height: response.data.height,
    weight: response.data.weight,
    ability: response.data.abilities,
    image_url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
    order: response.data.order
  }
  return finalResponse;
}

export default searchPokemons;