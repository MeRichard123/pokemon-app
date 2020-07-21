import React, { useContext } from "react";
import PokemonCard from "./PokemonCard";
import { AppContext } from "../AppContext";

export function capitalize(string) {
  if (typeof string == undefined) return;
  var firstLetter = string[0] || string.charAt(0);
  return firstLetter ? firstLetter.toUpperCase() + string.slice(1) : "";
}

const SearchResult = () => {
  const { searchTerm } = useContext(AppContext);
  const name = searchTerm.toLowerCase();
  const DisplayName = capitalize(name);
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  return <PokemonCard name={DisplayName} url={url} />;
};

export default SearchResult;
