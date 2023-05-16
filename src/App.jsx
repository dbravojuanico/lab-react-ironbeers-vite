import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import BeerDetails from "./components/BeerDetails";
import Beers from "./components/Beers";
import NewBeer from "./components/NewBeer";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/beers" element={<Beers />} />
      <Route path="/beers/:id" element={<BeerDetails />} />
      <Route path="/new" element={<NewBeer />} />
    </Routes>
  );
}
export default App;
