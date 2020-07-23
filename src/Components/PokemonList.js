import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";
import styled from "styled-components";
import { capitalize } from "./SearchResult";
import Loading from "../Screens/Loading";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [prev, setPrev] = useState("");
  const [next, setNext] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    let TitleNumb = "My Pokemon Dex | page " + pageNumber;
    document.title = TitleNumb;
    axios
      .get(currentPage, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setPokemonList(res.data.results);
        setPrev(res.data.previous);
        setNext(res.data.next);
      });

    return () => {
      cancel();
    };
  }, [currentPage, pageNumber]);

  function NextPage() {
    setCurrentPage(next);
    setPageNumber((prevState) => prevState + 1);
  }
  function PrevPage() {
    setCurrentPage(prev);
    setPageNumber((prevState) => prevState - 1);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Container>
        {pokemonList.map((pokemon, index) => {
          let name = capitalize(pokemon.name);
          return <PokemonCard key={index} name={name} url={pokemon.url} />;
        })}
      </Container>
      <Pagination
        NextPage={next ? NextPage : null}
        PrevPage={prev ? PrevPage : null}
      />
    </>
  );
};

export default React.memo(PokemonList);
