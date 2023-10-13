import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
function App() {
  return (
    <div className="App">
        <div className="list-title-wrapper">
          <h3>Kelompok 25 | Modul 5</h3>
        </div>
        <Router>
        <nav>
          <ul>
            <li>
            <Link to="/page1">Nomor 1-10</Link>
            </li>
            <li>
              <Link to="/page2">Nomor 11-20</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' exact element={<Page1 />}></Route>
          <Route path='/page1' exact element={<Page1 />}></Route>
          <Route path='/page2' exact element={<Page2 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
