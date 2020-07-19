import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PokemonList from "./Components/PokemonList";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>My Pokemon Dex</title>
      </Helmet>
      <PokemonList />
    </div>
  );
}

export default App;
