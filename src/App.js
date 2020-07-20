import React, { useState, useMemo } from "react";
import "./App.css";
import PokemonList from "./Components/PokemonList";
import Header from "./Components/Header";
import { Helmet } from "react-helmet";
import { AppContext } from "./AppContext";
import SearchResult from "./Components/SearchResult";

function App() {
  const [active, setActive] = useState(true);
  const ProviderValue = useMemo(() => ({ active, setActive }), [
    active,
    setActive,
  ]);
  return (
    <div className="App">
      <AppContext.Provider value={ProviderValue}>
        <Helmet>
          <title>My Pokemon Dex</title>
        </Helmet>
        <Header />
        {active ? <PokemonList /> : <SearchResult />}
      </AppContext.Provider>
    </div>
  );
}

export default App;
