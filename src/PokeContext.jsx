import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const BASE_API_URL = `https://pokeapi.co/api/v2/pokemon/`;

export const PokemonContext = createContext();

export function usePokemon() {
  return useContext(PokemonContext);
}

export function PokemonProvider({ children }) {
  const [poke, setPoke] = useState();
  useEffect(() => {
    async function getPokemon() {
      await axios
        .get(BASE_API_URL)
        .then((res) => {
          const responseData = res.data.results;
          setPoke(responseData);
        })
        .catch((error) => {
          console.log(error);
          window.alert(error);
        });
    }
    getPokemon();
  }, []);
  return (
    <PokemonContext.Provider value={poke}>{children}</PokemonContext.Provider>
  );
}
