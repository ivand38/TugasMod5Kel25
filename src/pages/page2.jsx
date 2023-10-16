import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ListItemUser from "../components/ListItemUser";
import { Card } from "@mui/material";
import { usePokemon } from "../PokeContext";
function Page2() {
  const pokemon = usePokemon();

  return (
    <div className="list-container">
      {pokemon?.slice(10, 21).map((d, index) => (
        <Card key={index}> {d.name}</Card>
      ))}
    </div>
  );
}
export default Page2;
