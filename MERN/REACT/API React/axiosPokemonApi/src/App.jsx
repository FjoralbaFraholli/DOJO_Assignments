import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {

  const [axiosPokemon, setAxiosPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then((response) => {setAxiosPokemon(response.data.results);})
    .catch((err) => console.log(err));
  }, []);

  
  return (
    <>
      <ol>
        {
          axiosPokemon.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>))
        }
      </ol>
    </>
  )
}

export default App
