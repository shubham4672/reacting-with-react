import React from 'react'
import PokemonCard from './PokemonCard';

const ShowCards = (props) => {
  const {pokemonData} = props;
  return (
    <div>
      <ul className='cards'>
        {pokemonData.map((currPokemon) => {
          return <PokemonCard key={currPokemon.id} pokemon={currPokemon} />
        })}
      </ul>
    </div>
  )
}

export default ShowCards
