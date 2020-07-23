import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import NotFound from "../Screens/NotFound";

const Card = styled.div`
  margin: 15px;
  padding: 20px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.5);
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const PokemonCard = ({ name, url }) => {
  const [sprite, setSprite] = useState("");
  const [backSprite, setBackSprite] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [stats, setStats] = useState([]);
  const [types, setTypes] = useState([]);
  const [hasError, setError] = useState(false);
  let typesList = [];
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setSprite(res.data.sprites.front_default);
        setBackSprite(res.data.sprites.back_default);
        setWeight(res.data.weight);
        setHeight(res.data.height);
        setStats(res.data.stats);
        const TypesArray = res.data.types;
        TypesArray.map((type) => {
          typesList.push(type.type.name);
          return type;
        });
        setTypes(typesList);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, [url]);

  return (
    <>
      {hasError ? (
        <NotFound />
      ) : (
        <div className="card-container">
          <Card className="card">
            <div className="front">
              <img src={sprite} alt="Pokemon" />
              <Container>
                {types.map((typeName, index) => (
                  <h5
                    key={index}
                    style={{ margin: "10px" }}
                    className={typeName}
                  >
                    {typeName}
                  </h5>
                ))}
              </Container>

              <h1>{name}</h1>
            </div>
            <div className="back">
              <img src={backSprite} alt="Pokemon" />
              <Container>
                <h5 style={{ margin: "10px" }}>Weight: {weight}</h5>
                <h5>Height: {height}</h5>
              </Container>
              <Container>
                {stats.map((stat, index) => (
                  <p
                    key={index}
                    style={{
                      fontSize: "13px",
                      marginRight: "5px",
                      lineHeight: "30px",
                    }}
                  >
                    {stat.stat.name}: {stat.base_stat}{" "}
                    <span style={{ fontSize: "20px" }}>|</span>
                  </p>
                ))}
              </Container>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default React.memo(PokemonCard);
