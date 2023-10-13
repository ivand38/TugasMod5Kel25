import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useEffect, useState } from "react";
import ListItemUser from "../components/ListItemUser";
import { List, Paper } from "@mui/material"; 
import axios from "axios";
const BASE_API_URL = `https://pokeapi.co/api/v2/pokemon/`;
function Page2() {
  const [pokemon, setPokemon] = useState([]);
  
  useEffect(() => {
    async function getPokemon() {
      await axios
        .get(`${BASE_API_URL}?offset=11&limit=10`)
        .then((res) => {
          const responseData = res.data.results;
          setPokemon(responseData);
        })
        .catch((error) => {
          console.log(error);
          window.alert(error);
        });
    }
    getPokemon();
  }, []);
  return (
      <div className="list-container">
        <Paper elevation={2} style={{ maxHeight: "700px", overflow: "auto" }}>
          <List>
            {pokemon?.map((d) => (
              <ListItemUser
                primaryText={`${d.name}`}
              />
            ))}
          </List>
        </Paper>
      </div>
    
  );
}
export default Page2;
