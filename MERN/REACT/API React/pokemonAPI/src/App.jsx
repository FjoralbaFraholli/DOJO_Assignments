import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [pokemonApi, setPokemonApi] = useState([]);

  useEffect(() => {

    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => response.json())
        .then(response => setPokemonApi(response.results))
        .catch(err => {console.log(err);});
  }, []); 

  return (
    <>
      <ol>
        {pokemonApi.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ol>
    </>
  )
}

export default App
