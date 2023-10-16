import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import { PokemonProvider } from "./PokeContext";
import { Divider } from "@mui/material";

function App() {
  return (
    <div className="App">
      <div className="list-title-wrapper">
        <h1>Kelompok 25 | Modul 5</h1>
      </div>
      <PokemonProvider>
        <Router>
          <nav
            style={{
              display: "flex",
              marginBottom: "2rem",
            }}
          >
            <Link to="/page1">Nomor 1-10</Link>
            <Divider sx={{ mx: 1 }} orientation="vertical" />
            <Link to="/page2">Nomor 11-20</Link>
          </nav>
          <Routes>
            <Route path="/" exact element={<Page1 />}></Route>
            <Route path="/page1" exact element={<Page1 />}></Route>
            <Route path="/page2" exact element={<Page2 />}></Route>
          </Routes>
        </Router>
      </PokemonProvider>
    </div>
  );
}
export default App;
