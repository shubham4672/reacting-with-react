import "./App.css";
import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import ShowCards from "./ShowCards";
import Title from "./Title";

function App() {
  const API = "https://pokeapi.co/api/v2/pokemon?limit=24";
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API);
        const data = await response.json();
        const pokemonData = data.results;
        const allPokemonsData = pokemonData.map(async (pokemon) => {
          const singlePokemon = pokemon.url;
          const res = await fetch(singlePokemon);
          const data = await res.json();
          return data;
        });
        const detailedResponses = await Promise.all(allPokemonsData);
        setPokemon(detailedResponses);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  console.log(pokemon);
  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <Title />
        <SearchInput />
        <ShowCards pokemonData={pokemon} />
      </>
    );
  }
}

export default App;
