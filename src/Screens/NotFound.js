import React from "react";
import styled from "styled-components";
import pikachu from "../Assets/pikachu.png";

const Container = styled.section`
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Message = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;
const Image = styled.img`
  height: 20vmax;
`;

const NotFound = () => {
  return (
    <Container>
      <Message>Pokemon Not Found</Message>
      <Image src={pikachu} />
    </Container>
  );
};

export default NotFound;
