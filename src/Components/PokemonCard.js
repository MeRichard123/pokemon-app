import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Card = styled.div`
  border: 2px solid tomato;
  border-radius: 10px;
  margin: 15px;
  padding: 20px;
  width: 25rem;
`;
const TypesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PokemonCard = ({ name, url }) => {
  const [sprite, setSprite] = useState("");
  const [types, setTypes] = useState([]);
  let typesList = [];
  useEffect(() => {
    axios.get(url).then((res) => {
      setSprite(res.data.sprites.front_default);
      const TypesArray = res.data.types;
      TypesArray.map((type) => {
        typesList.push(type.type.name);
      });
      setTypes(typesList);
    });
  }, [url]);

  return (
    <Card>
      <img src={sprite} alt="" />
      <TypesContainer>
        {types.map((typeName, index) => (
          <h5 key={index} style={{ margin: "10px" }}>
            {typeName}
          </h5>
        ))}
      </TypesContainer>

      <h1>{name}</h1>
    </Card>
  );
};

export default PokemonCard;